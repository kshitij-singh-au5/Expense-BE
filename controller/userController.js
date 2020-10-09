const expenseSchema = require("../model/expense");


let addExpense = async (req, res) => {
    try {
        const { title, amount, note, date } = req.body

        let newUser = new expenseSchema({ title, amount, note, date })
        let response = await newUser.save()
        res.json(response)
    }
    catch (err) {
        console.error(err)
    }

}

let getExpense = async (req, res) => {
    try {
        let response = await expenseSchema.find()
        res.json(response)
    }
    catch (err) {
        console.error(err)
    }
}

let deleteExpense = async (req, res) => {
    try {
        let user_id = req.params.userId
        let response = await expenseSchema.findByIdAndRemove(user_id)
        res.json(response)
    }
    catch (err) {
        console.error(err)
    }
}


let updateExpense = async (req, res) => {
    try {
        const data = {
            title:req.body.title,
            amount:req.body.amount,
            note:req.body.note,
            date:req.body.date
        }
        let user_id = req.params.userId
        let response = await expenseSchema.findByIdAndUpdate(user_id,{$set:data},{new:true} )
        res.json(response)
    }
    catch (err) {
        console.error(err)
    }
}

module.exports = { addExpense, getExpense, deleteExpense, updateExpense };