import bcrypt from "bcryptjs";
import UserModel from "./../models/User";
import jwt from "jsonwebtoken";
import authConfig from "./../config/auth.json";

export const auth = async (req, res) => {
  const { user, password } = req.body;
  try {
    const userFind = await UserModel.findOne({ user }).select("+password");
    if (!userFind) {
      res.json({
        error: true,
        message: "user not found"
      });
    }

    if (!(await bcrypt.compare(password, userFind.password))) {
      return res.json({
        error: true,
        message: "invalid password"
      });
    }
    userFind.password = undefined;

    const token = jwt.sign({ id: userFind.id }, authConfig.secret, {
      expiresIn: 86400
    });

    res.send({ userFind, token });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: "error in auth",
      code: error
    });
  }
};
