const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let appointmentSchema = new Schema(
  {
    user: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    specialty: {
        type: String,
    },
    dentist:{
        type: String,
    },
    schedule: {
        type: String,
    },
    time: {
        type: String,
    }
  },
  {
    collection: "appointments",
  }
);

module.exports = mongoose.model("Appointment", appointmentSchema);