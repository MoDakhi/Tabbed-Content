// Tabbed Content

document.getElementById("btn1").addEventListener("click", btn1Clicked);
document.getElementById("btn2").addEventListener("click", btn2Clicked);
document.getElementById("btn3").addEventListener("click", btn3Clicked);

function btn1Clicked() {
  document.getElementById("Section-1").style.display = "block";
  document.getElementById("Section-2").style.display = "none";
  document.getElementById("Section-3").style.display = "none";
}

function btn2Clicked() {
  document.getElementById("Section-1").style.display = "none";
  document.getElementById("Section-2").style.display = "block";
  document.getElementById("Section-3").style.display = "none";
}

function btn3Clicked() {
  document.getElementById("Section-1").style.display = "none";
  document.getElementById("Section-2").style.display = "none";
  document.getElementById("Section-3").style.display = "block";
}
