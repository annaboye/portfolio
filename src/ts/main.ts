import { IProject } from "./models/IProject";
import { getData } from "./services/gitrepos";

let projects: IProject[] = [];

async function getProjects() {
  projects = await getData();
  console.log(projects);
  createHtml(projects);
}

getProjects();
//getdata();
function createHtml(projects: IProject[]) {
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
    img.className = "project__picture";
    img.alt = projects[i].name;
    img.src = projects[i].html_url;
    container.appendChild(titleOfProject);
    container.appendChild(link);
    container.appendChild(img);
    projectContainer.appendChild(container);
  }
}
