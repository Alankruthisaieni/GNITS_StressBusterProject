let point = sessionStorage.getItem("points");
document.querySelector(".points").innerHTML = point;
if (point >= 0 && point <= 13) {
  document.querySelector(".level").innerHTML = "Mild";
  document.querySelector(".stress_img").src = "stress-images/low-stress.jpg"
}
else if (point >= 14 && point <= 26) {
  document.querySelector(".level").innerHTML = "Moderate";
  document.querySelector(".stress_img").src = "stress-images/medium-stress.jpg"
}
else if (point >= 27 && point <= 40) {
  document.querySelector(".level").innerHTML = "High";
  document.querySelector(".stress_img").src = "stress-images/high-stress.jpg"
}
