<template>
<div class="add">
   
        <Dashboard>  </Dashboard>
          <div class="row justify-content-center">
            <div class="col-md-6">
         <h3 class="text-center">Add Appointment</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>User</label>
          <input
            type="text"
            class="form-control"
            v-model="appointment.user"
            required
          />
        </div>

        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            v-model="appointment.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Specialty</label>
          <input
            type="text"
            class="form-control"
            v-model="appointment.specialty"
            required
          />
        </div>
        <div class="form-group">
          <label for="dentist">Dentist</label>
        <select id="dentist" name="dentist" class="form-control form-select" required v-model="appointment.dentist">
            <option value="01">Valentina Rodriguez</option>
            <option value="02">Eliot Perez</option>
        </select>
        </div>
         <div class="form-group">
          <label>Schedule</label><br>
           <input type="date" id="schedule" name="schedule" class="form-control" required v-model="appointment.schedule">
        </div>
         <div class="form-group">
          <label>Time</label>
          <input
            type="text"
            class="form-control"
            v-model="appointment.time"
            required
          />
        </div>
        
<br>
        <div class="form-group">
          <button class="btn btn-primary ">Add</button>
        </div>
      </form>
    </div>
  </div>
    </div>
</template>
<script>
import axios from "axios";
import Dashboard from '@/components/Dashboard.vue'
export default {
    // @ is an alias to /src
name: 'Add',
  data() {
     return {
      appointment:{
          user: "",
          email: "",
          specialty: "",
          dentist: "",
          schedule: "",
          time: ""

      },
    };
  }, 
    methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:3000/api/create-appointment";

      axios
        .post(apiURL, this.appointment)
        .then(() => {
          this.$router.push("/");
          this.appointment = {
            user: "",
            email: "",
            specialty: "",
            dentist: "",
            schedule: "",
            time: ""
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: {
    Dashboard
  }
}
</script>