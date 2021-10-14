<template>
  <div class="search">
   <Dashboard></Dashboard>
    <div class="row justify-content-center">
            <div class="col-md-6">
         <h3 class="text-center">Serch Appointment</h3>
      <form>
        <div class="form-group">
          <label>Enter the user code:</label><br>
          <input
            type="text"
            class="form-control"
          
            required
          />
        </div> 
<br>
        <div class="form-group">
          <button class="btn btn-primary ">Search</button>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>
<script>
 // import axios from "axios";
import Dashboard from '@/components/Dashboard.vue'
export default {
    // @ is an alias to /src   v-model="appointment.user"
name: 'Search',
  data() {
     return {
      appointment:{
          user: ""
      },
    };
  }, 
    /*methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/find-appointment";

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
  },*/
  components: {
    Dashboard
  }
}
</script>