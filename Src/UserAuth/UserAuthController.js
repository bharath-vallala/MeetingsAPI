const { userReg,userLogin } = require("./UserAuthService");
const { validationResult } = require("express-validator");

module.exports = {
  userRegController: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    userReg(res, req.body, (err, result) => {
      if (err) {
        return res.send(err);
      }
      // console.log(result,"19")
      return res.send(result);
    });
  },
  userLoginController: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    userLogin(res,req.body,(err,result)=>{
        if (err) {
            return res.status(404).json({
                status:"failed",
                message:"email or password is invald"
            });
          }
          return res.send(result);
      })
      
    
    },
    userLogoutController:(req,res)=>{
      res.cookie('JWT', "", {
        maxAge: 0,
        httpOnly: true
      })
        res.json({
          status:"success",
          message:"logout successfull"
        });
    }

  
}
