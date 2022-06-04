const mongoose = require("mongoose");

const CounterSchema= new mongoose.Schema({
  counter:{
    type: Number, 
    required:true,
    default: 0
  }
});

const Counter= mongoose.model("Counter", CounterSchema);

module.exports = Counter;

export default Counter;
