const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/FruuitsDB", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number
    

})
const Fruit = mongoose.model("Fruit", fruitSchema);
const mango = new Fruit({
    name: "mango",
    rating: 9
});
// mango.save();
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFruit: fruitSchema
})
const Person = mongoose.model("Person", personSchema);
const person = new Person({
    name: "any",
    age: 27,
    favoriteFruit: mango
});
// person.save();
Person.updateOne({ name: "John" }, { favoriteFruit:  mango }, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("updated successfully");
    }
})
Fruit.find(function (err,fruits) {
    if (err) {
        console.log(err);
        
    } else {
        fruits.forEach(function (element) {
            console.log(element.name);
        })
    }
})
// Fruit.deleteMany({ name: "APPLE" }, function (err) {
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("successfully deleted");
        
//     }
// })
//  Fruit.deleteOne({ name: "Banana" }, function (err) {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log("successfully deleted");

//     }
// })