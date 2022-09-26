var title = document.getElementById("co2Title");
var img = document.getElementById("co2");
var click = document.getElementById("co2click");
var box = document.getElementById("one");
var co2Section = document.getElementById("co2Section");

var flag = true;
const showSection = () => {
  if (flag) {
    co2Section.style.display = "flex";
    box.style.border = "2px solid #22A738";
    box.style.backgroundColor = "white";
    box.style.boxShadow = "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px";
    title.style.color = "#22A738";
    img.src = "./assets/icons/kachel1_co2verbrauch-gruen.svg";
    click.style.opacity = "0";
  } else {
    co2Section.style.display = "none";
    box.style.border = "none";
    box.style.backgroundColor = "#22A738";
    box.style.boxShadow = "none";
    title.style.color = "white";
    img.src = "./assets/icons/kachel1_co2verbrauch-weiss.svg";
    click.style.opacity = "1";
  }
  flag = !flag;
};

box.addEventListener("click", () => {
  showSection();
});
