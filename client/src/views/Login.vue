<template>
  <!--Form Login-->
    <div class="card col-4 mx-auto my-2">
        <img src="" class="card-img-top img-thumbnail " alt="...">
        <div class="card-body d-flex flex-row">
          <form class="col-12" @submit.prevent="login">
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" type="email" class="form-control"  required />
            </div>
            <div class="form-group">
              <label for="caption">Password</label>
              <input  v-model="password" type="password" class="form-control"  required />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login(){
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            })
        }
    }
}
</script>

<style>

</style>