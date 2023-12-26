const mongo = require("mongoose");
const UserSchema = new mongo.Schema(
  {
    username: {type:String, unique:true},
    password: String,
  },
  { timestamps: true }
);
export const UserModel = mongo.model('User', UserSchema);
