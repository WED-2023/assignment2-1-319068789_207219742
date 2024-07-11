// src/services/auth.js

import axios from "axios";
import store from "../store";

console.log(store.state); // To see if the state is properly imported and has the server_domain
const API_URL = "https://AlonAndYoni.cs.bgu.ac.il";

export async function register(userDetails) {
  try {
    const response = await axios.post(`${API_URL}/auth/Register`, userDetails);
    return response.data;
  } catch (error) {
    throw error.response;
  }
}

export function mockLogin(credentials, success = true) {
  // Check if already logged in

  if (!success) {
    throw {
      status: 409,
      response: {
        data: { message: "A user is already logged in", success: false },
      },
    };
  }

  // If all checks pass, return a success message
  return {
    status: 200,
    response: { data: { message: "login succeeded", success: true } },
  };
}

export function mockRegister(userDetails, success = true) {
  if (!success) {
    throw {
      status: 409,
      response: { data: { message: "Username taken", success: false } },
    };
  }

  return {
    status: 200,
    response: { data: { message: "user created", success: true } },
  };
}

export function mockLogout() {
  return {
    status: 200,
    response: { data: { message: "logout succeeded", success: true } },
  };
}

export function mockCheckIfUserNameExist(userName) {
  if (userName === "exist") return true;
  return false;
}
