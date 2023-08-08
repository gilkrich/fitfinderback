const User = require("../models/user");
const Subuser = require("../models/subuser");
const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.users = (req, res) => {
  User.find({}).then((data) => {
    res.send(data);
  });
};

exports.register = async (req, res) => {
  try {
    const isuser = await User.findOne({ email: req.body.email });
    if (!isuser) {
      hashedpassword = await bcrypt.hash(req.body.password, saltRound);
      const newuser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedpassword,
        gender: req.body.gender,
      });
      res.status(200).json("user has been successfully added");
    } else {
      res.status(400).send("already exist");
    }
  } catch (err) {
    res.status(500).send(err);
  }
};
exports.createsubuser = async (req, res) => {
  try {
    const newsub = await Subuser.create({
      measurements: req.body.measurements,
      username: req.body.username,
      gender: req.body.gender,
    });
    const finduser = await User.findByIdAndUpdate(
      { _id: req.body.id },
      { $push: { subusers: { _id: newsub._id } } }
    );
    res.status(200).json(finduser);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.addmeasurements = async (req, res) => {
  try {
    const finduser = await User.findByIdAndUpdate(
      { _id: req.body.id },
      { measurements: req.body.measurments }
    );
    res.status(200).json(finduser);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const isuser = await User.findOne({ email: req.body.email });
    if (!isuser) {
      return res.status(400).json({ error: "wrong email" });
    } else {
      const isMatch = await bcrypt.compare(req.body.password, isuser.password);
      if (!isMatch) {
        return res.status(400).json({ error: "wrong password" });
      } else if (isMatch) {
        const token = jwt.sign({ id: isuser._id }, process.env.SECRET);
        return res.status(200).json({ token });
      }
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.addlist = async (req, res) => {
  try {
    const patched = await User.findByIdAndUpdate(req.body.id, req.body);
    res.status(201).json("hey");
  } catch (err) {
    res.status(500).json("fuck");
  }
};

exports.deletepost = async (req, res) => {
  try {
    const patched = await User.findByIdAndUpdate(req.body.id, req.body);
    res.status(200).json("seccses");
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.isusers = async (req, res) => {
  try {
    const isuser = await User.find({ email: req.body.email });
    console.log(isuser);
    if (isuser == undefined) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    res.status(500).json("errors");
  }
};

exports.istoken = async (req, res) => {
  try {
    const newid = jwt.verify(req.body.token, process.env.SECRET);
    const isuser = await User.findOne({ _id: newid.id }).populate("subusers");
    if (!isuser) {
      return res.status(400).json("errors");
    }
    return res.status(201).send(isuser);
  } catch (err) {
    res.status(500).json("errors");
  }
};
exports.sizeincompaney = async (req, res) => {
  try {
    console.log(req.body.id);
    const updatesize = await User.findByIdAndUpdate(
      { _id: req.body.id },
      { sizeincompaney: req.body.sizeincompaney }
    );
    res.status(200).json(updatesize);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
