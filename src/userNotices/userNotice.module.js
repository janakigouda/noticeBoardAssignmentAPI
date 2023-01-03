const mongoose = require('mongoose');

const userNoticeSchema=mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    notice:{type:String},
    createdDate:new Date().toDateString(),
    createdTime:new Date().toTimeString(), 
},{
    timestamps:true
});

const userNotices=mongoose.model("userNotice",userNoticeSchema);

module.exports = userNotices;