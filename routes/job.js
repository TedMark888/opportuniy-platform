const express = require('express');
const Job = require('../models/job');
const auth = require('../middleware/auth');
const router = express.Router();

//Post a Job
router.post ('/', auth, async (req, res) => {
    const { title, description, location, salaryRange } = req.body;

    try {
        const job  = await job.cretae({
            title,
            description,
            location, salaryRange,
            employerId: req.user.id
        });
        res.json(job);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

//Get All Jobs
router.get('/', async (res, req) => {
    try {
        const jobs = await Job.findAll({ include: 'Employer' });
        resizeTo.json(jobs);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;