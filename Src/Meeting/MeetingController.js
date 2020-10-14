const {
  createMeeting,
  findAllMeetings,
  findMeetingsByTitle,
  findMeetingsbyDate,
  findMeetingsbyTime,
  updateTitle,
  updateTime,
  updateDate,
  addAttendie,
  delAttendie,
  delMeeting
} = require("./MeetingService");
const { validationResult } = require("express-validator");
const { checkDate, checkTime } = require("../MiddleWare/checkDateTIme");

module.exports = {
  createMeetingController: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body.date.toString());
    //* if(!checkDate(req.body.date)&& !checkTime(req.body.time)){
    //return res.status(401).json({
    //  status:"failed",
    //message:"date or time is invalid"
    //})
    //*}
    createMeeting(req, req.body, (err, result) => {
      if (err) {
        return res.status(401).send(err);
      }
      return res.json({
        status: "success",
        data: result,
      });
    });
  },
  findAllMeetingsController: (req, res) => {
    findAllMeetings(req, (err, result) => {
      if (err) {
        return res.status(401).send(err);
      }
      return res.json({
        status: "success",
        data: result,
      });
    });
  },
  findMeetingsByTitleController: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    findMeetingsByTitle(req, req.body, (err, result) => {
      if (err) {
        return res.status(401).send(err);
      }
      return res.json({
        status: "success",
        data: result,
      });
    });
  },
  findMeetingsByTimeController: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    findMeetingsbyTime(req, req.body, (err, result) => {
      if (err) {
        return res.status(401).send(err);
      }
      return res.json({
        status: "success",
        data: result,
      });
    });
  },
  findMeetingsByDateController: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    findMeetingsbyDate(req, req.body, (err, result) => {
      if (err) {
        return res.status(401).send(err);
      }
      return res.json({
        status: "success",
        data: result,
      });
    });
  },
  updateTitleController:(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    updateTitle(req,req.body,(err,result)=>{
        if(err){
        return  res.status(400).send(err)
        }
        return res.json({
            status: "success",
            data: result,
          });



    })
      
  },
  updateDateController:(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    updateDate(req,req.body,(err,result)=>{
        if(err){
        return  res.status(400).send(err)
        }
        return res.json({
            status: "success",
            data: result,
          });



    })
      
  },
  updateTimeController:(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    updateTime(req,req.body,(err,result)=>{
        if(err){
        return  res.status(400).send(err)
        }
        return res.json({
            status: "success",
            data: result,
          });



    })
      
  },
  addAttendieController:(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    addAttendie(req,req.body,(err,result)=>{
        if(err){
        return  res.status(400).send(err)
        }
        return res.json({
            status: "success",
            data: result,
          });



    })
      
  },
  delAttendieController:(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    delAttendie(req,req.body,(err,result)=>{
        if(err){
        return  res.status(400).send(err)
        }
        return res.json({
            status: "success",
            data: result,
          });



    })
      
  },
  delMeetingController:(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    delMeeting(req.body,(err,result)=>{
        if(err){
        return  res.status(400).send(err)
        }
        return res.json({
            status: "success",
            data: result,
          });



    })
  }

};
