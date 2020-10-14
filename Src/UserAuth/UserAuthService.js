const { UsersModel } = require("./UserAuthMode");

module.exports = {
  userReg: async (res, data, callback) => {
   let user = new UsersModel({
      name: data.name,
      emailId: data.emailId,
      password: data.password,
      address: data.address,
      username: data.username,
    });
    try {
      await user.save();
      //console.log(user,"im user")
      callback(null, user.toAuthJSON(res));
    } catch (e) {
      callback(e);
    }
  },
  userLogin: async (res,data, callback) => {
    try {
      const user = await UsersModel.findOne({ emailId: data.emailId })
      //console.log("im usesr", user);
      if (user) {
        await user.validatePassword(data.password, (err, isMatch) => {
          //console.log("im in in ");
          if (err) {
            console.log(err);
            return callback(err);
          }
          if (!isMatch) {
            const error = new Error("wrong password");

            return callback(error);
          }
          return callback(null, user.toAuthJSON(res));
        });
      } else {
        callback(new Error("user not found"));
      }
    } catch (e) {
      callback(e)
    }
  }
};
