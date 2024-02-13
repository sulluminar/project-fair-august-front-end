import { commonAPI } from "./commonAPI"
import { BASE_URL } from "./baseurl";

//1) register user
export const registerAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/register`, user, "")
}

//2) login user
export const loginAPI = async (user) => {
    return await commonAPI("POST", `${BASE_URL}/user/login`, user, "")
}

//3) Add project
export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI("POST", `${BASE_URL}/project/add`, reqBody, reqHeader)
}

// 4) get home projects
export const homeProjectAPI = async () => {
    return await commonAPI("GET", `${BASE_URL}/project/home-project`, "", "")
}

// 5) get all projects
export const allProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/project/all-project`, "", reqHeader)
}

// 6) get user project
export const userProjectAPI = async (reqHeader) => {
    return await commonAPI("GET", `${BASE_URL}/project/user-project`, "", reqHeader)
}