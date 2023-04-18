// write the routes for /students end poient and add middlewares. 
const express = require('express');
const router = express.Router();
const fs = require('fs');

// Importing middlewares
const logger = require('../middleware/logger.middleware');
const validator = require('../middleware/validator.middleware');

// GET all students
router.get('/', logger, (req, res) => {
  const students = JSON.parse(fs.readFileSync('./db.json')).students;
  res.status(200).send(students);
});

// GET student by student code
router.get('/:studentCode', logger, (req, res) => {
  const studentCode = parseInt(req.params.studentCode);
  const students = JSON.parse(fs.readFileSync('./db.json')).students;
  const student = students.find(s => s.student_code === studentCode);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send('Student not found');
  }
});

// POST add a student
router.post('/addstudent', logger, (req, res) => {
  const newStudent = req.body;
  const db = JSON.parse(fs.readFileSync('./db.json'));
  const students = db.students;
  newStudent.student_code = students.length + 1;
  students.push(newStudent);
  fs.writeFileSync('./db.json', JSON.stringify(db));
  res.status(201).send('Student has been added');
});

// PATCH update a student
router.patch('/:studentCode', logger, validator, (req, res) => {
  const studentCode = parseInt(req.params.studentCode);
  const updatedStudent = req.body;
  const db = JSON.parse(fs.readFileSync('./db.json'));
  let students = db.students;
  const index = students.findIndex(s => s.student_code === studentCode);
  if (index !== -1) {
    students[index] = { ...students[index], ...updatedStudent };
    fs.writeFileSync('./db.json', JSON.stringify(db));
    res.status(200).send('Patched Student Details');
  } else {
    res.status(404).send('Student not found');
  }
});

// DELETE delete a student
router.delete('/:studentCode', logger, validator, (req, res) => {
  const studentCode = parseInt(req.params.studentCode);
  const db = JSON.parse(fs.readFileSync('./db.json'));
  let students = db.students;
  const index = students.findIndex(s => s.student_code === studentCode);
  if (index !== -1) {
    students.splice(index, 1);
    // Update the student codes of all the students after the deleted student
    students.slice(index).forEach((student, i) => {
      student.student_code = index + i + 1;
    });
    fs.writeFileSync('./db.json', JSON.stringify(db));
    res.status(200).send('Deleted Student Details');
  } else {
    res.status(404).send('Student not found');
  }
});

module.exports = router;
