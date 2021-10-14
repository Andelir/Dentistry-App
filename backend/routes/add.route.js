const express = require("express");
const appointmentRoute = express.Router();

// appointment model
let AppointmentModel = require("../models/add");

appointmentRoute.route("/").get((req, res) => {
  //res.send("Hello");
  AppointmentModel.find((error, data, next) => {
    if (error) {
      //res.send(error);
      return next(error);
    } else {
      console.log(error);
      res.json(data);
    }
  });
});

appointmentRoute.route("/create-appointment").post((req, res, next) => {
  AppointmentModel.create(req.body, (error, data) => {
    if (error) {
      //res.send(error);
      return next(error);
    } else {
      //console.log(data);
      res.json(data);
    }
  });
});

/* appointmentRoute.route("/edit-add/:id").get((req, res) => {
  AppointmentModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error);
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update appointment
appointmentRoute.route("/update-add/:id").put((req, res, next) => {
  AppointmentModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("Student successfully updated!");
      }
    }
  );
});

// Delete appointment
appointmentRoute.route("/delete-add/:id").delete((req, res, next) => {
  AppointmentModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
}); */

module.exports = appointmentRoute;