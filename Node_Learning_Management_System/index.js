// // create the express app and export it.
// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');
// // const morgran = require('morgran')


// const app = express();
// app.use(express.json())
// const port = process.env.PORT || 3000;
// // var accessLogStream = fs.createWriteStream(path.join(__dirname,'./logs.txt'), {flags : 'a'})

// // app.use (morgar('Method::method, Route :: url, user-agent::user-agent' , {stream : accessLogStream}))



// // Middlewares
// const loggerMiddleware = require('./middleware/logger.middleware');
// const validatorMiddleware = require('./middleware/validator.middleware');

// // Routes
// const studentRoutes = require('./routes/student.route');
// const instructorRoutes = require('./routes/instructor.route');

// // JSON database
// const dbFilePath = path.join(__dirname, 'db.json');
// let db = {
//   students: [],
//   instructors: []
// };
// if (fs.existsSync(dbFilePath)) {
//   const dbFileContents = fs.readFileSync(dbFilePath);
//   db = JSON.parse(dbFileContents);
// }
// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Logger middleware
// app.use(loggerMiddleware);

// // Routes
// app.use('/students', studentRoutes);
// app.use('/instructors', instructorRoutes);

// // Validator middleware
// app.use(validatorMiddleware);

// app.post("/students/addstudent",(req,res)=>{
//     let newStudentData = req.body;
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     // console.log(fileData);
//     fileData.students.push(newStudentData);
//     // console.log(fileData)
//     fs.writeFileSync("./db.json",JSON.stringify(fileData));
//     res.status(200).send("Student has been added")
// })

// // adding instructors
// app.post("/instructors/addinstructor",(req,res)=>{
//     let newInstructorData = req.body;
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     // console.log(fileData);
//     fileData.instructors.push(newInstructorData);
//     // console.log(fileData)
//     fs.writeFileSync("./db.json",JSON.stringify(fileData));
//     res.status(200).send("Instructor has been added")
// })

// //get students
// // app.get("/students",(req,res)=>{
// //     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     let allStudents = fileData.students;
// //     console.log(allStudents);
// //     res.status(200).send(JSON.stringify(allStudents));
// // })
// app.get("/students",(req,res)=>{
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allStudents = fileData.students;
//     console.log(allStudents[0]);
//     res.status(200).send((JSON.stringify(allStudents)).replace(/[\[\]"]+/g, ''));
// })

// //all instructors
// app.get("/instructors",(req,res)=>{
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allInstructors = fileData.instructors;
//     console.log(allInstructors);
//     res.status(200).send(JSON.stringify(allInstructors));
// })
// //get student whose code is passed as parameter
// app.get("/students/:studentCode",(req,res)=>{
//     let studentCodeParameter = req.params.studentCode;
//     console.log(studentCodeParameter);
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allStudents = fileData.students;
//     let filteredStudent = allStudents.filter((item)=>{
//         return item.student_code == studentCodeParameter;
//     })
//     console.log(filteredStudent);
//     res.status(200).send(JSON.stringify(filteredStudent));
// })
// // get instructor whose code is passed as parameter
// app.get("/instructors/:empID",(req,res)=>{
//     let instructorCodeParameter = req.params.empID;
//     console.log("parametere",instructorCodeParameter);
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allInstructors = fileData.instructors;
//     let filteredInstructors = allInstructors.filter((item)=>{
//         return item.emp_id == instructorCodeParameter;
//     })
//     console.log(filteredInstructors);
//     res.status(200).send(JSON.stringify(filteredInstructors));
//     // res.send("ok")
// })

// app.delete("/students/:id", (req, res) => {
//     let studentId = req.params.id;
//     let fileData = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
//     let allStudents = fileData.students;
  
//     let updatedStudents = allStudents.filter(
//       (student) => student.emp_id !== parseInt(studentId)
//     );
  
//     fileData.students = updatedStudents;
//     fs.writeFileSync("./db.json", JSON.stringify(fileData));
  
//     res.status(200).send(`You are not authorised to do this operation`);
//   });
  


// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });

// // Start server
// // app.listen(port, () => {
// //   console.log(`Server started on port ${port}`);
// // });



// // export the app











// module.exports=app;

// // // create the express app and export it.
// // const express = require("express");
// // const fs = require("fs")
// // const path = require("path")
// // const morgan = require('morgan')
// // const app = express();
// // const { validate, ValidationError, Joi } = require('express-validation')
// // app.use(express.json());
// // const port=8001;

// // var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs.txt'), { flags: 'a' })

// // // setup the logger
// // app.use(morgan('Method::method, Route::url, user-agent::user-agent', { stream: accessLogStream }))

// // // adding students
// // app.post("/students/addstudent",(req,res)=>{
// //     let newStudentData = req.body;
// //     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     // console.log(fileData);
// //     fileData.students.push(newStudentData);
// //     // console.log(fileData)
// //     fs.writeFileSync("./db.json",JSON.stringify(fileData));
// //     res.status(200).send("Student has been added")
// // })
// // // adding instructors
// // app.post("/instructors/addinstructor",(req,res)=>{
// //     let newInstructorData = req.body;
// //     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     // console.log(fileData);
// //     fileData.instructors.push(newInstructorData);
// //     // console.log(fileData)
// //     fs.writeFileSync("./db.json",JSON.stringify(fileData));
// //     res.status(200).send("Instructor has been added")
// // })
// // //get students
// // app.get("/students",(req,res)=>{
// //     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     let allStudents = fileData.students;
// //     console.log(allStudents);
// //     res.status(200).send(JSON.stringify(allStudents));
// // })
// // //all instructors
// // app.get("/instructors",(req,res)=>{
// //     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     let allInstructors = fileData.instructors;
// //     console.log(allInstructors);
// //     res.status(200).send(JSON.stringify(allInstructors));
// // })
// // //get student whose code is passed as parameter
// // app.get("/students/:studentCode",(req,res)=>{
// //     let studentCodeParameter = req.params.studentCode;
// //     console.log(studentCodeParameter);
// //     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     let allStudents = fileData.students;
// //     let filteredStudent = allStudents.filter((item)=>{
// //         return item.student_code == studentCodeParameter;
// //     })
// //     console.log(filteredStudent);
// //     res.status(200).send(JSON.stringify(filteredStudent));
// // })
// // // get instructor whose code is passed as parameter
// // app.get("/instructors/:empID",(req,res)=>{
// //     let instructorCodeParameter = req.params.empID;
// //     console.log("parametere",instructorCodeParameter);
// //     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     let allInstructors = fileData.instructors;
// //     let filteredInstructors = allInstructors.filter((item)=>{
// //         return item.emp_id == instructorCodeParameter;
// //     })
// //     console.log(filteredInstructors);
// //     res.status(200).send(JSON.stringify(filteredInstructors));
// //     // res.send("ok")
// // })
// // // patch students details

// // // const validatorMiddleware = app.use()
// // app.patch("/students/:studentCode",(req,res)=>{
// //     let studentCodeParameter = req.params.studentCode;
// //     let newData = req.body;
// //     console.log(studentCodeParameter);
// //     console.log(newData);
// //     // let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     // let allStudents = fileData.students;
// //     // let filteredStudent = allStudents.filter((item)=>{
// //     //     return item.student_code == studentCodeParameter;
// //     // })
// //     // console.log(filteredStudent);
// //     res.status(200).send("Patched Student Details");
// // })
// // //delete students with validation 
// // app.delete("/students/?:studentCode",(req,res)=>{
// //     let studentCodeQuery = req.query;
// //     // let newData = req.body;
// //     console.log(studentCodeQuery);
// //     // console.log(newData);
// //     // let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
// //     // let allStudents = fileData.students;
// //     // let filteredStudent = allStudents.filter((item)=>{
// //     //     return item.student_code == studentCodeParameter;
// //     // })
// //     // console.log(filteredStudent);
// //     res.status(200).send("Deleted Student Details");
// // })

// // // logger middleware

// // app.listen(port,()=>{
// //     console.log(`server started at ${port}`)
// // })
// // // export the app
// // module.exports=app;

// create the express app and export it.
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
// const morgran = require('morgran')


const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;
// var accessLogStream = fs.createWriteStream(path.join(__dirname,'./logs.txt'), {flags : 'a'})

// app.use (morgar('Method::method, Route :: url, user-agent::user-agent' , {stream : accessLogStream}))



// Middlewares
const loggerMiddleware = require('./middleware/logger.middleware');
const validatorMiddleware = require('./middleware/validator.middleware');

// Routes
const studentRoutes = require('./routes/student.route');
const instructorRoutes = require('./routes/instructor.route');

// JSON database
const dbFilePath = path.join(__dirname, 'db.json');
let db = {
  students: [],
  instructors: []
};
if (fs.existsSync(dbFilePath)) {
  const dbFileContents = fs.readFileSync(dbFilePath);
  db = JSON.parse(dbFileContents);
}

app.post("/students/addstudent",(req,res)=>{
    let newStudentData = req.body;
    let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    // console.log(fileData);
    fileData.students.push(newStudentData);
    // console.log(fileData)
    fs.writeFileSync("./db.json",JSON.stringify(fileData));
    res.status(200).send("Student has been added")
})

// adding instructors
app.post("/instructors/addinstructor",(req,res)=>{
    let newInstructorData = req.body;
    let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    // console.log(fileData);
    fileData.instructors.push(newInstructorData);
    // console.log(fileData)
    fs.writeFileSync("./db.json",JSON.stringify(fileData));
    res.status(200).send("Instructor has been added")
})
app.delete("/students/:id", (req, res) => {
    let studentId = req.params.id;
    let fileData = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    let allStudents = fileData.students;
  
    let updatedStudents = allStudents.filter(
      (student) => student.emp_id !== parseInt(studentId)
    );
  
    fileData.students = updatedStudents;
    fs.writeFileSync("./db.json", JSON.stringify(fileData));
  
    res.status(200).send(`You are not authorised to do this operation`);
  });
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Logger middleware
app.use(loggerMiddleware);

// Routes
app.use('/students', studentRoutes);
app.use('/instructors', instructorRoutes);

// Validator middleware
app.use(validatorMiddleware);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// Start server
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });



// export the app











module.exports=app;

// // create the express app and export it.
// const express = require("express");
// const fs = require("fs")
// const path = require("path")
// const morgan = require('morgan')
// const app = express();
// const { validate, ValidationError, Joi } = require('express-validation')
// app.use(express.json());
// const port=8001;

// var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs.txt'), { flags: 'a' })

// // setup the logger
// app.use(morgan('Method::method, Route::url, user-agent::user-agent', { stream: accessLogStream }))

// // adding students
// app.post("/students/addstudent",(req,res)=>{
//     let newStudentData = req.body;
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     // console.log(fileData);
//     fileData.students.push(newStudentData);
//     // console.log(fileData)
//     fs.writeFileSync("./db.json",JSON.stringify(fileData));
//     res.status(200).send("Student has been added")
// })
// // adding instructors
// app.post("/instructors/addinstructor",(req,res)=>{
//     let newInstructorData = req.body;
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     // console.log(fileData);
//     fileData.instructors.push(newInstructorData);
//     // console.log(fileData)
//     fs.writeFileSync("./db.json",JSON.stringify(fileData));
//     res.status(200).send("Instructor has been added")
// })
// //get students
// app.get("/students",(req,res)=>{
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allStudents = fileData.students;
//     console.log(allStudents);
//     res.status(200).send(JSON.stringify(allStudents));
// })
// //all instructors
// app.get("/instructors",(req,res)=>{
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allInstructors = fileData.instructors;
//     console.log(allInstructors);
//     res.status(200).send(JSON.stringify(allInstructors));
// })
// //get student whose code is passed as parameter
// app.get("/students/:studentCode",(req,res)=>{
//     let studentCodeParameter = req.params.studentCode;
//     console.log(studentCodeParameter);
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allStudents = fileData.students;
//     let filteredStudent = allStudents.filter((item)=>{
//         return item.student_code == studentCodeParameter;
//     })
//     console.log(filteredStudent);
//     res.status(200).send(JSON.stringify(filteredStudent));
// })
// // get instructor whose code is passed as parameter
// app.get("/instructors/:empID",(req,res)=>{
//     let instructorCodeParameter = req.params.empID;
//     console.log("parametere",instructorCodeParameter);
//     let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     let allInstructors = fileData.instructors;
//     let filteredInstructors = allInstructors.filter((item)=>{
//         return item.emp_id == instructorCodeParameter;
//     })
//     console.log(filteredInstructors);
//     res.status(200).send(JSON.stringify(filteredInstructors));
//     // res.send("ok")
// })
// // patch students details

// // const validatorMiddleware = app.use()
// app.patch("/students/:studentCode",(req,res)=>{
//     let studentCodeParameter = req.params.studentCode;
//     let newData = req.body;
//     console.log(studentCodeParameter);
//     console.log(newData);
//     // let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     // let allStudents = fileData.students;
//     // let filteredStudent = allStudents.filter((item)=>{
//     //     return item.student_code == studentCodeParameter;
//     // })
//     // console.log(filteredStudent);
//     res.status(200).send("Patched Student Details");
// })
// //delete students with validation 
// app.delete("/students/?:studentCode",(req,res)=>{
//     let studentCodeQuery = req.query;
//     // let newData = req.body;
//     console.log(studentCodeQuery);
//     // console.log(newData);
//     // let fileData = JSON.parse(fs.readFileSync("./db.json","utf-8"));
//     // let allStudents = fileData.students;
//     // let filteredStudent = allStudents.filter((item)=>{
//     //     return item.student_code == studentCodeParameter;
//     // })
//     // console.log(filteredStudent);
//     res.status(200).send("Deleted Student Details");
// })

// // logger middleware

// app.listen(port,()=>{
//     console.log(`server started at ${port}`)
// })
// // export the app
// module.exports=app;