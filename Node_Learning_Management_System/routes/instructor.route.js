// write the routes for /instructors end poient and add middlewares. 
const express = require('express');
const router = express.Router();
const db = require('../db.json');

const logger = require('../middleware/logger.middleware');
const validator = require('../middleware/validator.middleware')

// get all instructors
router.get('/', logger, (req, res) => {
  const { instructors } = db;
  res.status(200).json(instructors);
});

// get instructor by employee id
router.get('/:emp_id', logger, (req, res) => {
  const { empID } = req.params;
  const { instructors } = db;
  const instructor = instructors.find((inst) => inst.emp_id === parseInt(empID));

  if (instructor) {
    res.status(200).json(instructor);
  } else {
    res.status(404).json({ message: 'Instructor not found' });
  }
});

// add a new instructor
router.post('/addinstructor', logger, (req, res) => {
  const { instructors } = db;
  const newInstructor = {
    emp_id: instructors.length + 1,
    name: req.body.name,
    sub: req.body.sub,
    experience: req.body.experience,
  };

  instructors.push(newInstructor);
  res.status(201).json({ message: 'Instructor has been added', instructor: newInstructor });
});

// update instructor by employee id
router.patch('/:empID', logger, validator, (req, res) => {
  const { empID } = req.params;
  const { instructors } = db;
  const instructor = instructors.find((inst) => inst.emp_id === parseInt(empID));

  if (instructor) {
    instructor.name = req.body.name || instructor.name;
    instructor.sub = req.body.sub || instructor.sub;
    instructor.experience = req.body.experience || instructor.experience;
    res.status(200).json({ message: 'Patched Instructor Details', instructor });
  } else {
    res.status(404).json({ message: 'Instructor not found' });
  }
});

// delete instructor by employee id
router.delete('/:empID', logger, validator, (req, res) => {
  const { empID } = req.params;
  const { instructors } = db;
  const index = instructors.findIndex((inst) => inst.emp_id === parseInt(empID));

  if (index !== -1) {
    instructors.splice(index, 1);
    res.status(200).json({ message: 'Deleted Instructor Details' });
  } else {
    res.status(404).json({ message: 'Instructor not found' });
  }
});

module.exports = router;
