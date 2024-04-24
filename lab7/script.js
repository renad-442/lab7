document.getElementById("colorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var color = document.getElementById("color").value;

    document.getElementById("header").style.color = color;
  });
