const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();
const Interview = require("./models/interview");
const API_KEY=process.env.API_KEY;
sgMail.setApiKey(API_KEY);

const clashinginterviewHelper = async (
  inputParticipants,
  inputstartDate,
  inputendDate
) => {
  try {
    const clashedInterviews = await Interview.aggregate([
      {
        $match: {
          $and: [
            {
              participants: { $in: inputParticipants },
            }
          ],
        },
      },
    ]);

    function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
      if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
      if (a_start <= b_end   && b_end   <= a_end) return true; // b ends in a
      if (b_start <  a_start && a_end   <  b_end) return true; // a in b
      return false;
  }

    if (clashedInterviews.length) {
     
    for(let i=0;i<clashedInterviews.length;i++){
       const interview=clashedInterviews[i];
       if(dateRangeOverlaps(interview.startDate,interview.endDate,inputstartDate,inputendDate))
       return true;
    }
    return false;
    
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  }
};

const sendMail = (msg) =>{
  


//ES6
sgMail
  .send(msg)
  .then(() => console.log("EMAIL SENT"), error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
}

module.exports = {
  clashinginterviewHelper,
  sendMail
};