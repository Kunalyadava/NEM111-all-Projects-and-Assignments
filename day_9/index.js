// MongoDB, the most popular NoSQL database, 
// is an open-source document-oriented database.
// The term ‘NoSQL’ means ‘non-relational’.
// MongoDB provides us flexible database schema
// that has its own advantages and disadvantages
// Advantages of Mongoose module:

// Collection validation of the MongoDB
//  database can be done easily.

// Predefined Structure can be implemented 
// on the collection.

// Constraints can be applied to documents
// of collections using Mongoose.


const mongoose=require("mongoose")
const main=async ()=>{
    try{
    const connection=await mongoose.connect("mongodb://127.0.0.1:27017/web24nxm") 
    // await UserModel.insertMany([{name:"Kunal",age:42,city:"Blore"},{name:"Kunal",age:2,city:"clore"}]) //for inserting manny doc or data
  //if we wanted to insert only one data use const function line 25 to 30
  console.log("Welcome to DB")
//   const user=new UserModel({
//     name:"Thor",
//     age:45,
//     city:"JJP"
//   })
//   await user.save()
//to read all the data line 32 to 34
// console.log("Following is the data present in database:")
// const users=await UserModel.find()
// console.log(users)

//if we want to get data where is age is bet two given nums 37 -39
// console.log("Following is the data present in database:")
// const users=await UserModel.find({$and:[{age:{$gte:5}},{age:{$lte:42}}]}) //gte greaterthan   //lte lesserthan
// console.log(users)

await UserModel.deleteMany({name:"Thor"})//deleting name or detailes of name

connection.disconnect()

   
// console.log("Welcome to MongodB")
// console.log(1)
// console.log(2)
    connection.disconnect() //uncomment this line run the code in mongod oe backend and see the diff in backend
    } catch(err){
        console.log(err)
    }
}
main()
//schema(it will contain everything that we need for document) for user documents
const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    city:String
},{
    versionKey:false
})
//creating the model for user docs
const UserModel=mongoose.model("user",userSchema) //it will be the collect. // constructor function
//user is the name of model and it can be anything
//because collections are many in numbers so mongo will correct it to users in backend
//diff bet userScheme and UserScheme(camel and pascal case ) we can see this thing in advance js or constructor function 
//with const function we can create multiple docs with same property
//we can use new function while creationg new doc here there is no new keyword because we are declaring here

//mongodb is FLEXIBLE  aLSO used to help i structures
//schema(blueprint)=>model(tool)=(structure of doc)=Document (name,age,....)



//last phase validation

// name:{type:String,required:true}
// age::{type:Number,required:true}
// city::{type:String,required:true}
// if you put city:Number it will throw an error with showing it should be an string so it means mongodb is validating everything before inserting
//age:"20" mongo is type casting so it will read string and convert it to number
//age:"Kunal" it will error
