const urlParams = new URLSearchParams(window.location.search);

// Render project details depending on URL parameters
const projectName = urlParams.get("project");
console.log(projectName);
