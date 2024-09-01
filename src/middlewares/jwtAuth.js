// Please don't change the pre-written code
// Import the necessary modules here
import jwtwebtoken from "jsonwebtoken";
const jwtAuth = (req, res, next) => {
  // Write your code here
  const token = req.cookies.jwtToken;
  if (!token) {
    return res.status(401).send({ success: false, msg: error });
  } else {
    try {
      jwtwebtoken.verify(
        token,
        "my-32-character-ultra-secure-and-ultra-long-secret"
      );
    } catch {
      return res.status(401).send({ success: false, msg: error });
    }
  }
  next();
};

export default jwtAuth;
