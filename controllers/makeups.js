import Makeup from "../models/Makeup.js";

export const getMakeups = async (req, res) => {
  try {
    const makeups = await makeups.find();
    res.json(makeups);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMakeup = async (req, res) => {
  try {
    const { id } = req.params;
    const makeups = await makeups.findById(id).populate("members");

    if (makeups) {
      return res.json(makeups);
    }

    res.status(400).json({ message: "makeups not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createMakeups = async (req, res) => {
  try {
    const makeups = new makeups(req.body);
    await makeups.save();
    res.status(201).json(makeups);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateMakeups = async (req, res) => {
  const { id } = req.params;
  const makeups = await makeups.findByIdAndUpdate(id, req.body);
  res.status(200).json(makeups);
};

export const deleteMakeups = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await makeups.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("makeups deleted!");
    }

    throw new Error("makeups not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};