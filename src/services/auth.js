// src/services/auth.js
// This file handles user authentication. It includes functions for user registration, login, and logout. The functions in this file interact with the backend API to manage user authentication.

import axios from "axios";
const API_URL = `https://alonandyoni.cs.bgu.ac.il`;

// Register a new user
export async function register(userDetails) {
  const response = await axios.post(`${API_URL}/auth/Register`, userDetails);
  console.log("Response:", response.data);
  return response;
}

// Login a user
export async function login(userDetails) {
  const response = await axios.post(`${API_URL}/auth/Login`, userDetails);
  console.log("Response:", response.data);
  return response;
}

// Logout the current user
export async function logout() {
  const response = await axios.post(`${API_URL}/auth/Logout`);
  console.log("Response:", response.data);
  return response;
}


//************************************************************ mock section *********************************************************************

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
