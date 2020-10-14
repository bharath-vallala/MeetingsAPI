const mongoose = require("mongoose");

const MeetingSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time:{
      type:String,
      required:true
  },
  organiser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required:true
  },
  attendies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
},{
    timestamps: true,
}
);


const MeetingModel=mongoose.model("meetings",MeetingSchema);

exports.MeetingModel=MeetingModel;
