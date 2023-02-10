import { IProject } from "./models/IProject";

import { getData } from "./services/gitrepos";

let projects: IProject[] = [];

function init() {
  createHtmlForShowButton();
}

async function getProjects() {
  projects = await getData();
  console.log(projects);
  createHtmlForRepos(projects);
}

function createHtmlForRepos(projects: IProject[]) {
  let projectContainer = document.getElementById(
    "projectcontainer"
  ) as HTMLDivElement;

  projectContainer.innerHTML = "";

  let hideBtn = document.createElement("button");
  hideBtn.setAttribute("type", "button");
  hideBtn.classList.add("showcasebtn");
  hideBtn.innerHTML = "HIDE PROJECTS";
  hideBtn.addEventListener("click", createHtmlForShowButton);

  for (let i = 0; i < projects.length; i++) {
    let container = document.createElement("div");

    let link = document.createElement("a");
    let imgContainer = document.createElement("div");
    let img = document.createElement("img");

    container.className = "project";
    imgContainer.className = "project__imgcontainer";

    link.href = projects[i].html_url;
    link.setAttribute("target", "new");

    img.src =
      "https://github.com/annaboye/portfolio/blob/main/src/assets/" +
      projects[i].name +
      ".png?raw=true";

    img.className = "project__imgcontainer__picture";
    img.alt = projects[i].name;

    link.appendChild(img);
    imgContainer.appendChild(link);
    container.appendChild(imgContainer);

    projectContainer.appendChild(container);
  }

  projectContainer.appendChild(hideBtn);
}

function createHtmlForShowButton() {
  let projectContainer = document.getElementById(
    "projectcontainer"
  ) as HTMLDivElement;

  projectContainer.innerHTML = "";

  let showBtn = document.createElement("button");
  showBtn.setAttribute("type", "button");
  showBtn.classList.add("showcasebtn");
  showBtn.innerHTML = "SHOW PROJECTS";
  showBtn.addEventListener("click", getProjects);

  projectContainer.appendChild(showBtn);
}

init();
