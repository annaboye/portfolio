import axios from "axios";
import { IAssets } from "../models/IAssets";
import { IProject } from "../models/IProject";

export function getImg(projectName: string) {
  axios
    .get<IAssets>(
      "https://api.github.com/repos/annaboye/" +
        projectName +
        "/contents/assets"
    )
    .then((response) => {
      console.log(response.data);
      return response.data.path[1];
    });
}
