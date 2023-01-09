import axios from "axios";
import { IAssets } from "../models/IAssets";
import { IProject } from "../models/IProject";

export function getImg(projectName: string): Promise<string> {
  return axios
    .get(
      "https://raw.githubusercontent.com/annaboye/portfolio/main/portfolio.png"
    )
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch(() => {
      return " ";
    });
}
