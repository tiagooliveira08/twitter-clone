export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  import authConfig from "./../config/authConfig.json";
  if (!authHeader) {
    res.status(400).send({
      error: "No token provided"
    });
  }

  jwt.verify(authHeader, authConfig.secret);
};
