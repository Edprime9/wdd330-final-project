const EXERCISE_API = "https://exercisedb.p.rapidapi.com/exercises?limit=6";

document.getElementById("loadWorkouts").addEventListener("click", async () => {
  try {
    const res = await fetch(EXERCISE_API, {
      headers: {
        "X-RapidAPI-Key": "d1d2c9eb19msh7f216bf5181a042p1bb913jsndf15dd90325f",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    });

    const data = await res.json();

    document.getElementById("workoutList").innerHTML = data
      .map(
        (ex) => `
      <div style="margin-bottom:10px;">
        <h4>${ex.name}</h4>
        <p><strong>Target:</strong> ${ex.target}</p>
        <p><strong>Equipment:</strong> ${ex.equipment}</p>
      </div>
    `,
      )
      .join("");
  } catch (error) {
    document.getElementById("workoutList").textContent =
      "Error loading workouts";
  }
});
