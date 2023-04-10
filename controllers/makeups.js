import Makeup from "../models/Makeup.js";

export const getMakeups = async (req, res) => {
  try {
    const makeups = await Makeup.find();
    res.json(makeups);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getMakeup = async (req, res) => {
  try {
    const { id } = req.params;
    const makeup = await Makeup.findById(id);

    if (makeup) {
      return res.json(makeup);
    }

    res.status(400).json({ message: "Makeup not found!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const createMakeup = async (req, res) => {
  try {
    const makeup = new Makeup(req.body);
    await makeup.save();
    res.status(201).json(makeup);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const updateMakeup = async (req, res) => {
  const { id } = req.params;
  const makeup = await Makeup.findByIdAndUpdate(id, req.body);
  res.status(200).json(makeup);
};

export const deleteMakeup = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Makeup.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Makeup deleted!");
    }

    throw new Error("Makeup not found");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};
