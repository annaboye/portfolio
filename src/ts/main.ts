import { IProject } from "./models/IProject";

import { getData } from "./services/gitrepos";
// import { portfolio } from "../assets/portfolio.png";

let projects: IProject[] = [];

async function getProjects() {
  projects = await getData();
  console.log(projects);
  createHtml(projects);
}

async function createHtml(projects: IProject[]) {
  let projectContainer = document.getElementById(
    "projectcontainer"
  ) as HTMLDivElement;

  for (let i = 0; i < projects.length; i++) {
    let container = document.createElement("div");
    let titleOfProject = document.createElement("h3");
    let link = document.createElement("a");
    let img = document.createElement("img");

    container.className = "project";

    titleOfProject.className = "project__name";
    titleOfProject.innerHTML = projects[i].name;
    link.href = projects[i].html_url;
    link.innerHTML = projects[i].html_url;
    img.src =
      "https://github.com/annaboye/portfolio/blob/main/src/assets/" +
      projects[i].name +
      ".png?raw=true";

    img.className = "project__picture";
    img.alt = projects[i].name;
    container.appendChild(img);

    container.appendChild(titleOfProject);
    container.appendChild(link);
    projectContainer.appendChild(container);
  }
}
getProjects();
