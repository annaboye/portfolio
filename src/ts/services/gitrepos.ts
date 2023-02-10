import axios, { AxiosPromise } from "axios";
// import { IGithubResponse } from "../models/IGithubResponse";
import { IProject } from "../models/IProject";

export function getData(): Promise<IProject[]> {
  return axios

    .get("https://api.github.com/users/annaboye/repos")

    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
