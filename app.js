document.getElementById("forRestaurant").style.display = "none";
document.getElementById("forRecipe").style.display = "none";

document.getElementById("contributing").onchange = function () {
  var option = document.getElementById("contributing").value;
  if (option == "restaurant") {
    document.getElementById("forRestaurant").style.display = "block";
    document.getElementById("forRecipe").style.display = "none";
  } else if (option == "recipe") {
    document.getElementById("forRestaurant").style.display = "none";
    document.getElementById("forRecipe").style.display = "block";
  }
};
