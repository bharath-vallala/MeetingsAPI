const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const token=req.cookies.JWT
    console.log(req.cookies.JWT)

    if(token==undefined){
       return res.status(401).send("unAuthorized");
    }
  
    jwt.verify(token, process.env.JWTSECREAT, (err, user) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
  }

module.exports={authenticateToken}