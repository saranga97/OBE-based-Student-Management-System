const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema(
    {
      fname: {
        type: String,
        required: true,
      },
      lname: {
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
},{
    collection: "StudentInfo",
}
);

mongoose.model("StudentInfo",StudentSchema)