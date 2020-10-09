const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    title: { type: String},
    amount: { type: Number  },
    note: { type: String  },
    date: { type: String  }
    
});

module.exports = mongoose.model("expenses", expenseSchema)