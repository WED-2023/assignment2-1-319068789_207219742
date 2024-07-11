const axios = require("axios");
const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const registerUser = async (userDetails) => {
  try {
    const response = await axios.post(
      "https://alonandyoni.cs.bgu.ac.il/auth/Register",
      userDetails,
      { httpsAgent: agent }
    );
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response:", error.response.data);
      throw error.response.data;
    } else {
      console.error("Error:", error.message);
      throw error;
    }
  }
};

// Example usage
const userDetails = {
  username: "john_doe4",
  firstName: "John",
  lastName: "Doe",
  country: "Country",
  password: "secure_password",
  email: "john4.doe@example.com",
};

registerUser(userDetails)
  .then((data) => {
    console.log("User registered successfully:", data);
  })
  .catch((err) => {
    console.error("Failed to register user:", err);
  });
