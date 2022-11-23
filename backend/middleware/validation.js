const { string } = require("joi");
const Joi = require("joi");
const User = require("../models/user");

const userSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z]*$/)
    .required(),

  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),

  type: Joi.string().valid("admin", "interviewee", "interviewer").required(),
});

const interviewSchema = Joi.object({
  startDate: Joi.date().required(),

  endDate: Joi.date().greater(Joi.ref("startDate")).required(),

participants:Joi.array().min(2).required(),
});

const interviewUpdateSchema = Joi.object({
  startDate: Joi.date(),

  endDate: Joi.date().greater(Joi.ref("startDate")),

participants:Joi.array().min(2).required(),
});

const userValidation = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body);
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }

  return next();
};

const interviewValidation = async (req, res, next) => {
  try {
    await interviewSchema.validateAsync(req.body);
  } catch (err) {
    return res.status(500).json({ Message: err.message });
  }

  return next();
};

const interviewUpdateValidation = async (req,res,next) =>{
    try{
        await interviewUpdateSchema.validateAsync(req.body);
    }catch(err){
        return res.status(500).json({ Message: err.message });
    }
    return next();
}




module.exports = {
  userValidation,
  interviewValidation,
  interviewUpdateValidation
};