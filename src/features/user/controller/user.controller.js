// Please don't change the pre-written code
// Import the necessary modules here
import jsonwebtoken from "jsonwebtoken";
import { addUser, confirmLogin } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  const { email } = req.body;
  if (status) {
    //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
    const token = jsonwebtoken.sign(
      { email },
      "my-32-character-ultra-secure-and-ultra-long-secret",
      { expiresIn: "1h" }
    );
    res.cookie("jwtToken", token);
    res
      .status(200)
      .json({ status: "success", msg: "login successfull", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
