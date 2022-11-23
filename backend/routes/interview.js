const { Router } = require('express');
const express = require('express');
const router = express.Router();
const {createInterview,getAllUpcomingInterviews,listInterviewById} = require('../controller/interview');
const {interviewValidation,interviewUpdateValidation} = require('../middleware/validation');

router.post('/',interviewValidation,createInterview);
router.patch('/:uid',interviewUpdateValidation,createInterview);
router.get('/',getAllUpcomingInterviews);
router.get('/:uid',listInterviewById);


module.exports = router;