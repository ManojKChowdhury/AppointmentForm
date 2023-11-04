<template>
  <Card role="form" class="w-3 m-auto">
    <template #header>
      <!--  logo goes here
      <img alt="logo" src=""/>
      -->
    </template>
    <template #title>Create New Account</template>
    <template #subtitle>Marketplace For Home Healthcare</template>
    <template #content>
      <form @submit="submitForm">
        <div class="flex flex-column gap-2">
          <div class="flex flex-column gap-2">
            <label for="name">Full name*</label>
            <InputText id="name" type="text" v-model="name" placeholder="Your Full name" required/>
          </div>
          <div class="flex flex-column gap-2">
            <label for="email">Email Address*</label>
            <InputText id="email" type="text" v-model="email" placeholder="example123@gmail.com"/>
          </div>
          <div class="flex flex-column gap-2">
            <label for="phone">Phone Number*</label>
            <InputNumber id="phone" type="text" v-model="phone" placeholder="+91 Registered Number"
                         :useGrouping="false" prefix="+91 "/>
          </div>
          <div class="flex flex-column gap-2 full-width">
            <label for="password">Password*</label>
            <Password id="password" v-model="password" placeholder="unique password"
                      :class="{ 'p-invalid': passwordErrorMessage }" @change="passwordChangeHandler" toggle-mask/>
            <small class="p-error" id="text-error" v-if="passwordErrorMessage !== ''">{{
                passwordErrorMessage
              }}</small>
          </div>
          <div class="flex flex-column gap-2 full-width">
            <label for="confirmPassword">Re-enter Password*</label>
            <Password id="confirmPassword" v-model="confirmPassword" placeholder="Re-enter unique password"
                      :class="{ 'p-invalid': passwordErrorMessage }" @change="confirmPasswordChangeHandler"
                      toggle-mask/>
            <small class="p-error" id="text-error" v-if="passwordErrorMessage !== ''">{{ passwordErrorMessage }}</small>
          </div>
        </div>
      </form>
    </template>
    <template #footer>
      <div class="flex justify-content-between flex-wrap">
        <Button icon="pi pi-check" type="submit" label="Sign Up" :loading="loading" @click="submitForm"/>
        <Button icon="pi pi-times" label="Cancel" severity="secondary" @click="cancel"/>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: null,
      password: '',
      confirmPassword: '',
      passwordErrorMessage: '',
      loading: false
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid()) {
        this.loading = true;
        // save data
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    },
    confirmPasswordChangeHandler() {
      this.matchPasswords();
    },
    passwordChangeHandler() {
      this.matchPasswords();
    },
    matchPasswords() {
      this.passwordErrorMessage = this.password === this.confirmPassword ? '' : 'Passwords do not match';
    },
    cancel() {
      this.$data.name = '';
      this.$data.email = '';
      this.$data.phone = null;
      this.$data.password = '';
      this.$data.confirmPassword = '';
    },
    isFormValid() {
      if (this.name.trim() === '') return false;
      if (this.email.trim() === '') return false;
      if (this.phone === null) return false;
      if (this.password.trim() === '') return false;
      if (this.confirmPassword.trim() === '') return false;
      return true;
    }
  }
}
</script>

<style scoped lang="scss">
@import url('/node_modules/primeflex/primeflex.css');

$atom1: '.p-password';

#{$atom1} {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.full-width {
  width: 100%;
}
</style>