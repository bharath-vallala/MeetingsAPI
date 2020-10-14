const {MeetingModel} =require("./MeetingModel")


module.exports={
    //creating new meeting
    createMeeting:async(req,data,callback)=>{
        //console.log(req.user)
        let meeting= await MeetingModel.findOne({title:data.title,organiser:req.user.id})
        //console.log(meeting,"im meeting")
        if(meeting){
            let error=new Error()
            error.name="duplicate"
            return callback(error)
        }

         meeting=new MeetingModel({
            title:data.title,
            date:data.date,
            time:data.time,
            organiser:req.user.id,
            attendies:data.attendies,
        })
        console.log(meeting.date instanceof Date)
        try{
            await meeting.save();
           return callback(null,meeting);

        }catch(e){
           return callback(e)
        }
    },
    //getting all the meetings of loggedin user
    findAllMeetings:async(req,callback)=>{
        try{
            let meetings=await MeetingModel.find({organiser:req.user.id}).populate({
                path:"attendies",
                model:"users"
            })
            if(meetings){
              return callback(null, meetings)
            }else{
                return(null,"no meetings found")
            }
        }catch(e){
           return callback(e)

        }
        

    },
    //getting meetings by title
    findMeetingsByTitle:async(req,data,callback)=>{
        try{
            //console.log("im title")
            let meeting=await MeetingModel.findOne({title:data.title,organiser:req.user.id}).populate({
                path:"attendies",
                model:"users"
            })
            //console.log(meeting,"im meetng")
            return callback(null,meeting)

        }catch(e){
            callback(e)

        }

    },
    //getting meetings by time
    findMeetingsbyTime:async(req,data,callback)=>{
        try{
            console.log("im title")
            let meeting=await MeetingModel.find({time:data.time,organiser:req.user.id}).populate({
                path:"attendies",
                model:"users"
            })
            console.log(meeting,"im meetng")
            return callback(null,meeting)

        }catch(e){
            callback(e)

        }

    },
    //getting meetings by date
    findMeetingsbyDate:async(req,data,callback)=>{
        try{
            console.log(new Date("2020-05-11").toDateString())
            let meeting=await MeetingModel.find({date:new Date((data.date)),organiser:req.user.id}).populate({
                path:"attendies",
                model:"users"
            })
            console.log(meeting,"im meetng")
            return callback(null,meeting)

        }catch(e){
            callback(e)

        }

    },
    //update title by id
    updateTitle:async(req,data,callback)=>{
        try{
            
            let meeting=await MeetingModel.findByIdAndUpdate(data.id,{title:data.title},{returnOriginal: false})
            if(meeting){
                return callback(null,meeting)
            }else{
                return callback(null,"cannot find document with given id")

            }

        }catch(e){
            callback(e)
        }
    },
    updateDate:async(req,data,callback)=>{
        try{
            let meeting=await MeetingModel.findByIdAndUpdate(data.id,{date:new Date((data.date))},{returnOriginal: false})
            if(meeting){
                return callback(null,meeting)
            }else{
                return callback(null,"cannot find document with given id")

            }

        }catch(e){
            callback(e)
        }
    },
    updateTime:async(req,data,callback)=>{
        try{
            let meeting=await MeetingModel.findByIdAndUpdate(data.id,{time:data.time},{returnOriginal: false})
            if(meeting){
                return callback(null,meeting)
            }else{
                return callback(null,"cannot find document with given id")

            }

        }catch(e){
            callback(e)
        }
    },
    addAttendie:async(req,data,callback)=>{
        try{
            let meeting=await MeetingModel.findByIdAndUpdate(data.id,{ $addToSet: { attendies: data.attendieId} },{returnOriginal: false})
            if(meeting){
                return callback(null,meeting)
            }else{
                return callback(null,"cannot find document with given id")

            }
        }catch(e){
            callback(e)
        }
    },
    delAttendie:async(req,data,callback)=>{
        try{
            let meeting=await MeetingModel.findByIdAndUpdate(data.id,{ $pull: { attendies: data.attendieId} },{returnOriginal: false})
            if(meeting){
                return callback(null,meeting)
            }else{
                return callback(null,"cannot find document with given id")

            }
        }catch(e){
            callback(e)
        }

    },
    delMeeting:async(data,callback)=>{
        try{
            let doc=await MeetingModel.deleteOne({_id:data.id})
            console.log(doc)
            if(doc){
                return callback(null,doc)
            }else{
                return callback(null,"cannot find document with given id")
            }

        }catch(e){
            callback(e)
        }
    }


}