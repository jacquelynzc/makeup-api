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
    const {id} = req.params
    const makeup = await Makeup.findById(id);
    res.json(makeup);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}

export const getMakeupByBrand = async (req, res) => {
  try {
    const brand = req.params.brand;
    const makeup = await Makeup.find({brand: brand});

    if (makeup.length > 0) {
      return res.json(makeup);
    } else {res.status(404).json({error: error.message})}

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Makeup not found!" });
  }
};

export const getMakeupByType = async (req, res) => {
  try {
    const productType = req.params.productType;
    console.log(productType)
    const makeup = await Makeup.find({productType: productType});
    if (makeup.length > 0) {
      return res.json(makeup);
    } else {res.status(404).json({error: error.message})}

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Makeup not found!" });
  }
};

export const getMakeupByName = async (req, res) => {
  try {
    const name = req.params.name;
    const lowerCase = new RegExp(`^${name}$`, 'i')
    const makeup = await Makeup.find({name: lowerCase});

    if (makeup.length > 0) {
      return res.json(makeup);
    } else {res.status(404).json({error: error.message})}

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Makeup not found!" });
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
