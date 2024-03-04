const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");

//Schema is like a blueprint of document 
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
    academicTerms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicTerm",
      },
    ],
    programs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Program",
      },
    ],
    yearGroups: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "YearGroup",
      },
    ],
    academicYears: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicYear",
      },
    ],
    classLevels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ClassLevel",
      },
    ],
    teachers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
      },
    ],
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    //generate field (created_at)
    timestamps: true,
  }
);
//Hash password:
// adminSchema.pre('save' , async function (next) {
//   if(!this.isModified('password'))
//     {//if user wanna modify his information without showing password (hash...)
//       next();
//     }
//   console.log('Process hashingpassword on ...');
//   console.log(this);//printing current object that should be hashed
//   //salt bcrypt algorithm 
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();//calling the next Middleware that is the controller which we have password hashing process
// })

// //Verify password:
// adminSchema.methods.verifyPassword = async function(enterPassword)
// {
//   //comparing the current password registered with the one entered by the user
//   return await bcrypt.compare(enterPassword , this.password);
// }

//model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
