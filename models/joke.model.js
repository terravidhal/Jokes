const mongoose = require('mongoose');
 

const JokeSchema = new mongoose.Schema(
   {
        setup: { 
          type: String,
          required: [true, "setup is required"],
          minlength: [6, "setup must be at least 6 characters long"]
        },
        punchline: { 
            type: String,
            required: [true, "punchline is required"],
            maxlength: [20, "punchline must be less than 20 characters long"]
        }
   }, 
   { timestamps: true }
);
 
const Joke = mongoose.model('Joke', JokeSchema);
 
module.exports = Joke;