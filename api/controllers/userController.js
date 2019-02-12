import userModel from "./../models/User";

export const store = async (req, res) => {
  const { user, password, name } = req.body;
  if (!user) {
    res.status(400).json({
      message: "user is required"
    });
  }
  if (!password) {
    res.status(400).json({
      message: "password is required"
    });
  }
  if (!name) {
    res.status(400).json({
      message: "name is required"
    });
  }

  try {
    const userCreated = await userModel.create(req.body);

    userCreated.password = undefined;

    res.json(userCreated);
  } catch (error) {
    res.status(500).json(error);
  }
};
