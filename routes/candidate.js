const express = require('express');
const router = express.Router();
const { Candidate, Job, Application } = require('../models');

// Route: Get Candidate Profile
router.get('/profile/:id', async (req, res) => {
    try {
        const candidateId = req.params.id;
        const candidate = await Candidate.findByPk(candidateId);
        
        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        res.json(candidate);
    } catch (error) {
        console.error('Error fetching candidate profile:', error);
        res.status(500).json({ message: 'Error fetching candidate profile' });
    }
});

// Route: Update Candidate Profile
router.put('/profile/:id', async (req, res) => {
    try {
        const candidateId = req.params.id;
        const { name, email, skills } = req.body;

        const candidate = await Candidate.findByPk(candidateId);

        if (!candidate) {
            return res.status(404).json({ message: 'Candidate not found' });
        }

        candidate.name = name || candidate.name;
        candidate.email = email || candidate.email;
        candidate.skills = skills || candidate.skills;

        await candidate.save();

        res.json({ message: 'Profile updated successfully', candidate });
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).json({ message: 'Error updating profile' });
    }
});

// Route: Apply for a Job
router.post('/apply', async (req, res) => {
    try {
        const { candidateId, jobId } = req.body;

        // Check if job exists
        const job = await Job.findByPk(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // Check if candidate already applied for this job
        const existingApplication = await Application.findOne({
            where: { candidateId, jobId }
        });

        if (existingApplication) {
            return res.status(400).json({ message: 'You have already applied for this job' });
        }

        // Create a new application record
        const application = await Application.create({
            candidateId,
            jobId,
            status: 'Applied'
        });

        res.json({ message: 'Application submitted successfully', application });
    } catch (error) {
        console.error('Error applying for job:', error);
        res.status(500).json({ message: 'Error applying for job' });
    }
});

module.exports = router;
