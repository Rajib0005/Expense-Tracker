const mongoose = require('mongoose')
const schema = mongoose.Schema;

// categories=> feilds=>[type, color]
const categories_model = new schema({
    type:{type:String, default:"Investment"},
    color:{type: String, default:"#FCBE44"}
})

//transaction => feolds =>[name, type, amount, date]
const transaction_model = new mongoose.Schema({
    name:{type:String, default:"Salary"},
    type:{type:String, default:"Investment"},
    amount:{type: Number},
    date:{type:Date, default: Date.now}
})

const Categories = mongoose.model('categories', categories_model)
const Transaction = mongoose.model('transaction', transaction_model)

exports.default = Transaction;
module.exports={
    Categories,
    Transaction
}