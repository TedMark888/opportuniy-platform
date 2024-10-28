const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employer = require('../models/employer');
const router = express.Router();
require('dotenv').config();

//Register Employer
router.post('/register', async (req, res) => {
    const { name, email, password, company } = req.body;

    try {
        let employer = await EWmployer.findOne({ where: { email } });
        if (employer) return res.status(400).json({ msg: 'Employer already exists'});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        employer = await Employer.create({ name, email, password: hashedPassword, company });

        const payload = { user: { id: employer.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 360000 });

        res.json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;