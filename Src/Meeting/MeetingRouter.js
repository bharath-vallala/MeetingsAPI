const router = require("express").Router();
const { body } = require("express-validator");
const { route } = require("../UserAuth/UserAuthRouter");
const {
  createMeetingController,
  findAllMeetingsController,
  findMeetingsByTitleController,
  findMeetingsByDateController,
  findMeetingsByTimeController,
  updateTitleController,
  updateDateController,
  updateTimeController,addAttendieController,delAttendieController,delMeetingController
} = require("./MeetingController");
router.post(
  "/createmeeting",
  [body("title").exists(), body("date").exists(), body("time").exists()],
  createMeetingController
);
router.get("/getallmeetings", findAllMeetingsController);
router.get("/getbytitle",[body("title").exists()],findMeetingsByTitleController)
router.get("/getbytime",[body("time").exists()],findMeetingsByTimeController)
router.get("/getbydate",[body("date").exists()],findMeetingsByDateController)
router.post("/updatetitle",[body("title").exists(),body("id").exists()],updateTitleController)
router.post("/updatedate",[body("date").exists(),body("id").exists()],updateDateController)
router.post("/updatetime",[body("time").exists(),body("id").exists()],updateTimeController)
router.delete("/delAttendie",[body("id").exists(),body("attendieId").exists()],delAttendieController)
router.post("/addAttendie",[body("id").exists(),body("attendieId").exists()],addAttendieController)
router.delete("/delmeeting",[body("id").exists()],delMeetingController)








module.exports = router;
