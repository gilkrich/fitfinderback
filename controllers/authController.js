const User = require("../models/user");
const Subuser = require("../models/subuser");
const bcrypt = require("bcrypt");
const saltRound = 10;
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.users = (req, res) => {
    User.find({username:'kim gusovsky'}).then((data) => {
        res.send(`${data.length}`);
    });
};

exports.register = async (req, res) => {
    try {
        const isuser = await User.findOne({ email: req.body.email });
        if (!isuser) {
            hashedpassword = await bcrypt.hash(req.body.password, saltRound)
            const newuser = await User.create({ username: req.body.username, email: req.body.email, password: hashedpassword, gender: req.body.gender, icon: req.body.icon })
            const token = jwt.sign({ id: newuser._id }, process.env.SECRET);
            return res.status(200).json({ token });
        } else {
            res.status(400).send("already exist");
        }
    } catch (err) {
        res.status(500).send(err);
    }

};
exports.createsubuser = async (req, res) => {
    try {
        console.log(req.body)
        const newsub = await Subuser.create({username:req.body.username,gender:req.body.gender,measurements:req.body.measurements,icon:req.body.icon})
        console.log(newsub)
        const finduser = await User.findByIdAndUpdate({ _id: req.body.id }, { $push: { subusers: { _id: newsub._id } } })
        console.log(finduser)
        res.status(200).json(finduser)
    }
    catch (err) {
        console.error('Error:', err);
        // res.status(500).send("couldnt create new subuser");
    }
}

exports.addmeasurements = async (req, res) => {
    try {
        const finduser = await User.findByIdAndUpdate({ _id: req.body.id }, { $push: { measurements: { data: req.body.measurments } } })
        res.status(200).json(finduser)
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.login = async (req, res) => {
    try {
        const isuser = await User.findOne({ email: req.body.email });
        if (!isuser) {
            return res.status(400).json({ error: "The email you entered in wrong" });
        } else {
            const isMatch = await bcrypt.compare(req.body.password, isuser.password)
            if (!isMatch) {
                return res.status(400).json({ error: "The password you entered in wrong" });
            } else if (isMatch) {
                const token = jwt.sign({ id: isuser._id }, process.env.SECRET);
                return res.status(200).json({ token });
            }
        }
    }
    catch (err) {
        res.status(500).json({ error: "shit" });
    }
}

exports.addlist = async (req, res) => {
    try {
        const patched = await User.findByIdAndUpdate(req.body.id, req.body);
        res.status(201).json("hey");
    } catch (err) {
        res.status(500).json("fuck");
    }
};

exports.addlist = async (req, res) => {
    try {
        const patched = await User.findByIdAndUpdate(req.body.id, req.body)
        res.status(201).json("hey")
    } catch (err) {
        res.status(500).json("fuck")
    }
}



exports.deletepost = async (req, res) => {
    try {
        const patched = await User.findByIdAndUpdate(req.body.id, req.body)
        res.status(200).json("seccses");
    } catch (err) {
        res.status(500).json(err.message);
    }

}

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
        const newid = jwt.verify(req.body.token, process.env.SECRET)
        const isuser = await User.findOne({ _id: newid.id }).populate('subusers')
        if (!isuser) {
            return res.status(400).json('errors')
        }
        return res.status(201).send(isuser)

    } catch (err) {
        res.status(500).json('errors')
    }
}

exports.deletesub = async (req, res) => {
    try {
        const deleteduser = await Subuser.findByIdAndDelete(req.body.subid)
        const updateduser = await User.findByIdAndUpdate(req.body.id, { $pull: { subusers: { $in: req.body.subid } } })
        return res.status(201).send(updateduser)
    } catch (err) {
        res.status(500).json('errors')
    }
}


exports.editsub = async (req, res) => {
    try {
        const edituserUnset = await Subuser.findByIdAndUpdate(req.body.id, {$unset: { sizeincompany: 1 }}, { new: true });
        const edituser = await Subuser.findByIdAndUpdate(req.body.id, req.body)
        return res.status(201).send(edituser)
    } catch (err) {
        res.status(500).json(err.message)
    }
}


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


exports.sizeincompaneysub = async (req, res) => {
    try {
        const updatesize = await Subuser.findByIdAndUpdate(
            { _id: req.body.id },
            { sizeincompany: req.body.sizeincompany }
        );
        res.status(200).json(updatesize);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.editmeasurements = async (req, res) => {
    try {
        const edituserUnset = await User.findByIdAndUpdate(req.body.id, {$unset: { sizeincompaney: 1 }}, { new: true });
        const edituserPulled = await User.findByIdAndUpdate(req.body.id, {$pull : { measurements: { data: { $exists: true } } }});
        const edituserPushed = await User.findByIdAndUpdate(req.body.id, {$push: { measurements: { data: req.body.measurments } }}, { new: true });
        return res.status(201).send(edituserPushed)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

