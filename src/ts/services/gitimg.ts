import axios from "axios";
import { IAssets } from "../models/IAssets";
import { IProject } from "../models/IProject";

export function getImg(projectName: string): Promise<string> {
  return axios
    .get("https://api.github.com/repos/annaboye/portfolio/contents/assets")
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(() => {
      return " ";
    });
}
