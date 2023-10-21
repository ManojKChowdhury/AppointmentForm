<template>
  <div class="main-wrapper">
    <div v-if="!hideNotification" class="notification is-primary">
      <button class="delete" @click="hideNotification = true"></button>
      {{message}}
    </div>
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-8-desktop is-12-mobile">
          <div class="card">
            <div class="card-content">
              <form @submit.prevent="submitForm">
                <section>
                  <h2 class="title is-4">Job Requirement</h2>
                  <div class="field">
                    <label class="label">Job Description</label>
                    <div class="control">
                      <textarea placeholder="Add requirement description" v-model="job.description" class="input"
                        required></textarea>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Job Type</label>
                    <div class="control">
                      <input v-model="job.type" class="input" type="text" required />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Job Services</label>
                    <div class="control">
                      <div class="select is-fullwidth">
                        <select v-model="job.services[0].name" required>
                          <option v-for="(service, index) in services" :key="index" :value="service.name">{{ service.name
                          }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
                <br />
                <section>
                  <h2 class="title is-4">Contact Information</h2>
                  <div class="field is-grouped is-flex is-justify-content-space-between">
                    <div class="control">
                      <label class="label">Patient Name</label>
                      <input v-model="contactInfo.name" class="input" type="text" placeholder="Add patient's name" required />
                    </div>
                    <div class="control">
                      <label class="label">Patient Phone</label>
                      <input v-model="contactInfo.phone" class="input" type="text" placeholder="Add patient's contact" pattern="^\d{10}$" title="Please enter a valid phone number in the format (xxx) xxx-xxxx" required />
                    </div>
                    <div class="control">
                      <label class="label">Patient Gender</label>
                      <div class="select">
                        <select v-model="contactInfo.gender" name="gender" required>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Does not matter">Does not matter</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="field is-grouped is-flex is-justify-content-space-between">
                    <div class="control">
                      <label class="label">State</label>
                      <input v-model="contactInfo.address.state" class="input" type="text" placeholder="Add patient's state" required />
                    </div>
                    <div class="control">
                      <label class="label">City</label>
                      <input v-model="contactInfo.address.city" class="input" type="text"  placeholder="Add patient's city" required />
                    </div>
                    <div class="control">
                      <label class="label">Pincode</label>
                      <input v-model="contactInfo.address.pincode" pattern="^\d{6}$" title="PIN code must be 6 digits" class="input" type="text"  placeholder="Add patient's pincode" required />
                    </div>
                  </div>
                </section>
                <br />

                <section>
                  <h2 class="title is-4">Appointment Information</h2>
                  <div class="field">
                    <label class="label">Time when required:</label>
                    <div class="control">
                      <div class="field is-grouped is-flex is-justify-content-space-between">
                        <div class="control">
                          <label class="radio">
                            <input type="radio" v-model="formData.timeRequired" value="Morning" name="timeRequired"
                              required>
                            Morning
                          </label>
                        </div>
                        <div class="control">
                          <label class="radio">
                            <input type="radio" v-model="formData.timeRequired" value="Afternoon" name="timeRequired"
                              required>
                            Afternoon
                          </label>
                        </div>
                        <div class="control">
                          <label class="radio">
                            <input type="radio" v-model="formData.timeRequired" value="Evening" name="timeRequired"
                              required>
                            Evening
                          </label>
                        </div>
                        <div class="control">
                          <label class="radio">
                            <input type="radio" v-model="formData.timeRequired" value="Full Time" name="timeRequired"
                              required>
                            Full Time
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Preferred Gender of Nurse:</label>
                    <div class="control">
                      <div class="field is-grouped is-flex is-justify-content-space-between">
                        <div class="control">
                          <label class="radio">
                            <input type="radio" v-model="formData.preferredGender" value="Male" name="preferredGender"
                              required>
                            Male
                          </label>
                        </div>
                        <div class="control">
                          <label class="radio">
                            <input type="radio" v-model="formData.preferredGender" value="Female" name="preferredGender"
                              required>
                            Female
                          </label>
                        </div>
                        <div class="control">
                          <label class="radio">
                            <input type="radio" v-model="formData.preferredGender" value="Does not matter"
                              name="preferredGender" required>
                            Does not matter
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="field">
                    <label for="dates" class="label">Dates:</label>
                    <div class="control">
                      <div class="calendar">
                        <input type="date" v-model="formData.dates" id="dateRange" class="input"
                          placeholder="Select dates" />
                      </div>
                    </div>
                  </div>
                </section>

                <br />
                <div class="field is-grouped is-grouped-right">
                  <p class="control">
                    <button type="button" class="button is-light" @click="fillForm">Reset</button>
                  </p>
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
import api from '~/api/index'
export default {
  components: [NavBar],
  data() {
    return {
      hideNotification: true,
      job: {
        description: '',
        type: 'Nurse',
        services: [
          { name: 'Pregnancy Care' },
        ],
        status: 'Posted',
      },
      contactInfo: {
        name: '',
        phone: '',
        gender: '',
        address: {
          state: '',
          city: '',
          pincode: '',
        }
      },
      formData: {
        timeRequired: 'Morning',
        dates: new Date().toISOString().split('T')[0],
        preferredGender: 'Male',
      },
      services: [
        { name: "Elderly Care" },
        { name: "Pregnancy Care" },
        { name: "Mother & Child Care" },
        { name: "Child Care" },
        { name: "Critical Care" },
        { name: "Post Surgery Care" },
        { name: "General Care" }
      ]
    };
  },
  created(){
    const { baseUrl } = this.$config.public;
    this.baseUrl = baseUrl;
    this.checkApi();
  },
  methods: {
    async checkApi() {
      const resp = await fetch(this.baseUrl);
      return await resp.json();
    },
    submitForm() { 
      api.postData(`${this.baseUrl}/jobs`, { ...this.job, ...this.contactInfo, ...this.formData });
      this.resetFrom();
      this.showNotification();
    },
    resetFrom() {
      this.$data.contactInfo = {
        name: '',
        phone: '',
        gender: '',
        address: {
          state: '',
          city: '',
          pincode: '',
        }
      }
      this.$data.job.description = '';
    },
    showNotification() {
      this.message = `Added Job to records. Please wait while we review, A ${this.job.type} will contact you shortly.`
      this.hideNotification = false;
      setTimeout(() => this.hideNotification = true, 3000);
    },
    fillForm(){
      this.$data.contactInfo = {
        name: 'Aditya Dubey',
        phone: '8602118580',
        gender: 'Male',
        address: {
          state: 'MP',
          city: 'Indore',
          pincode: '452012',
        }
      }
      this.$data.job.description = 'Need a Nurse for my mother';
      this.$data.job.services[0].name = 'Pregnancy Care';
    }
  }
};
</script>
    
<style lang="scss" scoped>
@import url('bulma/css/bulma.min.css');
.main-wrapper {
  display: flex;
  flex-direction: column;

  .container {
    width: calc(100% - 600px);
  }
}

@media screen and (max-width: 767px) {
  .main-wrapper {
    .container {
      width: 100%;
    }

    flex-direction: column;
  }
}
</style>
    