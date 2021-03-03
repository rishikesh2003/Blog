const router = require("express").Router();
const Email = require("../Models/Email");

router.post("/", async (req, res) => {
  try {
    let { email } = req.body;
    if (!email) {
      return res.status(406).json({ msg: "Please fill all required fields" });
    }
    let userWithEmail = await Email.findOne({ email });
    if (userWithEmail) {
      return res.status(406).json({ msg: "Email already exists" });
    }
    let newEmail = Email({
      email: email,
    });
    let newSubscriber = await newEmail.save();
    res.json(newSubscriber);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let email = await Email.findById(req.params.id);
    if (!email) {
      res.status(406).json({ msg: "Email does not exist in database" });
    }
    await email.remove();
    res.json({ msg: "Email is Successfully removed from the database" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
