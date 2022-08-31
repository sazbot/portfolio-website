const projectOne = document.querySelector(".project-one");
const projectTwo = document.querySelector(".project-two");
const projectThree = document.querySelector(".project-three");
const projectFour = document.querySelector(".project-four");
const leftSliderLink = document.querySelector(".left-slider");
const rightSliderLink = document.querySelector(".right-slider");
const leftSliderText = document.querySelector(".left-slider-title");
const rightSliderText = document.querySelector(".right-slider-title");

const urlParams = new URLSearchParams(window.location.search);
const projectNumber = urlParams.get("project");

const projectNames = ["Manage", "Bookmark", "Insure", "Fylo"];

// Render project details depending on URL parameters
renderProject(projectNumber);

// NOTE: REPLACE WITH DATA ATTRIBUTES (i.e. data-project="1") and projectNames.length

function renderProject(projectNumber) {
  if (projectOne.className == projectNumber) {
    leftSliderText.innerText = projectNames[3];
    rightSliderText.innerText = projectNames[1];
    leftSliderLink.href = "./project.html?project=project-four";
    rightSliderLink.href = "./project.html?project=project-two";
    projectOne.removeAttribute("hidden");
  } else if (projectTwo.className == projectNumber) {
    leftSliderText.innerText = projectNames[0];
    rightSliderText.innerText = projectNames[2];
    leftSliderLink.href = "./project.html?project=project-one";
    rightSliderLink.href = "./project.html?project=project-three";
    projectTwo.removeAttribute("hidden");
  } else if (projectThree.className == projectNumber) {
    leftSliderText.innerText = projectNames[1];
    rightSliderText.innerText = projectNames[3];
    leftSliderLink.href = "./project.html?project=project-two";
    rightSliderLink.href = "./project.html?project=project-four";
    projectThree.removeAttribute("hidden");
  } else {
    leftSliderText.innerText = projectNames[2];
    rightSliderText.innerText = projectNames[0];
    leftSliderLink.href = "./project.html?project=project-three";
    rightSliderLink.href = "./project.html?project=project-one";
    projectFour.removeAttribute("hidden");
  }
}
