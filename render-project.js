const projectOne = document.querySelector(".project-one");
const projectTwo = document.querySelector(".project-two");
const projectThree = document.querySelector(".project-three");
const projectFour = document.querySelector(".project-four");

const urlParams = new URLSearchParams(window.location.search);
const projectNumber = urlParams.get("project");

// Render project details depending on URL parameters
renderProject(projectNumber);

function renderProject(projectNumber) {
  if (projectOne.className == projectNumber) {
    projectOne.removeAttribute("hidden");
  } else if (projectTwo.className == projectNumber) {
    projectTwo.removeAttribute("hidden");
  } else if (projectThree.className == projectNumber) {
    projectThree.removeAttribute("hidden");
  } else {
    projectFour.removeAttribute("hidden");
  }
}
