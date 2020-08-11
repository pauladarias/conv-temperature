document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  let fahrenInput = document.getElementById("fahrenInput").value;

  fahrenInput = parseInt(fahrenInput);

  document.getElementById("celResult").textContent = (
    ((fahrenInput - 32) * 5) /
    9
  ).toFixed(2);
});
