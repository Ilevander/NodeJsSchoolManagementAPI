const AsyncHandler = require("express-async-handler");
const ClassLevel = require("../../model/Academic/ClassLevel");
const Program = require("../../model/Academic/Program");
const Admin = require("../../model/Staff/Admin");
const YearGroup = require("../../model/Academic/YearGroup");


//@desc  Create Year Group
//@route POST /api/v1/year-group
//@access  Private
exports.createYearGroup = AsyncHandler(async (req, res) => {
        const { name, academicYear } = req.body;
        //check if exists
        const year_Group = await YearGroup.findOne({ name });
        if (year_Group) {
          throw new Error("Year Group/Graduation already exists");
        }
        //create
        const yearGroup = await YearGroup.create({
          name,
          academicYear,
          createdBy: req.userAuth._id,
        });
        //push to the program 
        const admin = await Admin.findById(req.userAuth._id);
        if(!admin)
                {
                  throw new Error("Admin not found");
                }
          //Push year group into admin      
        admin.yearGroups.push(yearGroup._id);
        //save
        await admin.save();

        res.status(201).json({
          status: "success",
          message: "Year Group created successfully",
          data: yearGroup,
        });
      });



//@desc  get all Year groups
//@route GET /api/v1/year-group
//@access  Private
exports.getYearGroups = AsyncHandler(async (req, res) => {
        const groups = await YearGroup.find();
        res.status(201).json({
          status: "success",
          message: "Year Group fetched successfully",
          data: groups,
        });
      });



//@desc  get Years Group by id
//@route GET /api/v1/year-group/:id
//@access  Private
exports.getYearGroup = AsyncHandler(async (req, res) => {
      const group = await YearGroup.findById(req.params.id);
      res.status(201).json({
        status: "success",
        message: "Year Groups fetched successfully",
        data: group,
      });
    });



//@desc   Update  Year GROUP
//@route  PUT /api/v1/year-group/:id
//@access  Private
exports.updateYearGroup = AsyncHandler(async (req, res) => {
        const { name, academicYear } = req.body;
        //check name exists
        const yearGroupFound = await YearGroup.findOne({ name });
        if (yearGroupFound) {
          throw new Error("Year Group already exists");
        }
        const yearGroup = await YearGroup.findByIdAndUpdate(
          req.params.id,
                  {
                    name,
                    academicYear,
                    createdBy: req.userAuth._id,
                  },
                  {
                    new: true,
                  }
        );
        res.status(201).json({
          status: "success",
          message: "Year Group updated successfully",
          data: yearGroup,
        });
      });



//@desc   Delete  Year GROUP
//@route  PUT /api/v1/year-group/:id
//@access  Private
exports.deleteYearGroup = AsyncHandler(async (req, res) => {
        await YearGroup.findByIdAndDelete(req.params.id);
        res.status(201).json({
          status: "success",
          message: "Year Group deleted successfully",
        });
      });
