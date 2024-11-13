const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");
const sidemenu = document.getElementById("sidemenu");
const headerTextEl = document.querySelector(".header-text");

const careersArray = [
  "Frontend Developer.",
  "Web Developer.",
  "Web Designer.",
  "JavaScript Developer.",
  "Backend Developer.",
];

let careersIndex = 0;
let lettersIndex = 0;

const updateCareers = () => {
  headerTextEl.innerHTML = `
  <h1>Hi, I'm <span>Selaelo Serumula</span><br>from Pretoria, South Africa.</h1>
  <p>I am a ${careersArray[careersIndex].slice(0, lettersIndex)}</p>
  `;
  lettersIndex++;

  if (lettersIndex === careersArray[careersIndex].length + 1) {
    lettersIndex = 0;
    careersIndex++;
    if (careersIndex === careersArray.length) {
      careersIndex = 0;
    }
  }

  setTimeout(updateCareers, 200);
};

updateCareers();

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
