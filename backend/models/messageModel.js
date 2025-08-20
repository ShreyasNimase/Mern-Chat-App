const mongoose = require("mongoose");

const messageSchema = ({
    sender:{type:mongoose.Schema.Types.ObjectId, ref:"User"},
    content:{type:String, trim:true},
    chat:{type:mongoose.Schema.Types.ObjectId},
},
{
    timestamp :true,
})

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;