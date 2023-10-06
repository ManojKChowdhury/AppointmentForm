<template>
  <nav-bar></nav-bar> 
  <div class="main-wrapper">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8-desktop is-12-mobile">
          <div class="card">
            <div class="card-content">
              <form @submit.prevent="submitForm">
                <div class="field">
                  <label for="patientName" class="label">Patient's Name:</label>
                  <div class="control">
                    <input v-model="formData.patientName" type="text" id="patientName" class="input" required />
                  </div>
                </div>

                <div class="field">
                  <label for="pincode" class="label">Pincode:</label>
                  <div class="control">
                    <input v-model="formData.pincode" type="text" id="pincode" class="input" required />
                  </div>
                </div>

                <div class="field">
                  <label for="timeRequired" class="label">Time when required:</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="formData.timeRequired" id="timeRequired" required>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                        <option value="Evening">Evening</option>
                        <option value="Full Time">Full Time</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label for="dates" class="label">Dates:</label>
                  <div class="control">
                    <div class="calendar">
                      <input type="date" id="dateRange" class="input" placeholder="Select dates" />
                    </div>
                  </div>
                </div>

                <div class="field">
                  <label for="preferredGender" class="label">Preferred Gender of Nurse:</label>
                  <div class="control">
                    <div class="select is-fullwidth">
                      <select v-model="formData.preferredGender" id="preferredGender" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Does not matter">Does not matter</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="field">   
                  <p class="control">
                    <button type="submit" class="button is-primary">Submit</button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
import NavBar from '~/components/NavBar.vue'
export default {
  components: [NavBar],
  data() {
    return {
      formData: {
        patientName: '',
        pincode: '',
        timeRequired: '',
        dates: [],
        preferredGender: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here, e.g., send data to the server
      console.log(this.$data.formData);
    },
  },
};
</script>
    
<style lang="scss">
.main-wrapper {
  display: flex;
  flex-direction: column;
  .container{
    margin-top: 5rem;
    width: calc(100% - 600px);
  }
}

@media screen and (max-width: 767px) {
  .main-wrapper {
    .container {
      margin-top: 1rem;
      width: 100%;
    }

    flex-direction: column;
  }
}
</style>
    