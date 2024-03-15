const mongoose=require('mongoose') //import mongoose
const Mongouri='Placce your connection string' //mongodb URI(Uniform Resource Identifier) string
const Mongodb=async()=>{

    await mongoose.connect(Mongouri) //establish connection to mongodb database

    console.log('connected') //after connenting to database this console message is shown in terminal

    const fetched_data= await mongoose.connection.db.collection("food_items") //this line go to the database and go in the specific area and connent with that. Mongoose is help to connect node js with mongodb.here we say "mongoose.connection" which means you tell mongoose to connect with database.After that("db") which means you navigate in specific area in database ,".collection("food_items")" this means that in this area there was some data in food_items collection

    const data=await fetched_data.find({}).toArray() //agter navigating the data and store the location in fetched_data.".find({})" this function take parameter on basis of that parameter it will filter the data here we don't give any parameter so it will select all. And ".toArray()" function will take all the list and store it is in array. 

    const fetched_data2= await mongoose.connection.db.collection("foodCategory")//same as above only different collection is used.
    const foodCategorydata=await fetched_data2.find({}).toArray()
        // console.log(foodCategorydata)
    //    console.log(data)       
        console.log("data fetched"); //this message shown on terminal it will tell the user that data is fetched

        global.food_items =data; //we store food items data in food_items and make it global which gives us benifit that now we can access food_items anywhere from the code 
        
        global.food_Category =foodCategorydata;//samefor this also
   
}
module.exports=Mongodb;