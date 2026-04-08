document.getElementById("searchFoodBtn").addEventListener("click", async () => {
  const query = document.getElementById("foodInput").value.trim();

  if (!query) {
    alert("Please enter a food");
    return;
  }

  document.getElementById("foodResult").textContent = "Loading...";

  try {
    const res = await fetch(
      `https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=${encodeURIComponent(query)}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "d1d2c9eb19msh7f216bf5181a042p1bb913jsndf15dd90325f",
          "X-RapidAPI-Host": "nutrition-by-api-ninjas.p.rapidapi.com",
        },
      },
    );

    if (!res.ok) {
      throw new Error("API error: " + res.status);
    }

    const data = await res.json();

    if (!data || data.length === 0) {
      document.getElementById("foodResult").textContent = "No results found";
      return;
    }

    document.getElementById("foodResult").innerHTML = data
      .map(
        (food) => `
      <div>
        <strong>${food.name}</strong><br>
        Calories: ${food.calories}<br>
        Protein: ${food.protein_g}g<br>
      </div>
    `,
      )
      .join("");
  } catch (error) {
    console.error(error);
    document.getElementById("foodResult").textContent = "Failed to load data";
  }
});
