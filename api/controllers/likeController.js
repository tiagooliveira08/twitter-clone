import TweetModel from "./../models/Tweet";

export const store = async (req, res) => {
  try {
    const like = await TweetModel.findById(req.params.id);
    like.set({ likes: like.likes + 1 });

    await like.save();

    req.io.emit("like", like);
    res.status(500).json(like);
  } catch (error) {
    res.json(error);
  }
};
