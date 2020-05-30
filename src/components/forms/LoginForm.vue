<template>
<div class="container">
  <br>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h4 class="text-center text-danger" v-if="error === 'authentication-failed'">
              Username or password incorrect!
            </h4>
            <div class="account-wall">
                <img class="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt="">
                <form class="form-signin" @submit.prevent="handleSubmit">
                <input type="text" class="form-control" placeholder="login" required autofocus v-model="login">
                <input type="password" class="form-control" placeholder="Password" required v-model="password">
                <button class="btn btn-lg btn-primary btn-block" type="submit">
                    Sign in</button>
                <label class="checkbox pull-left">
                    <input type="checkbox" value="remember-me">
                    Remember me
                </label>
                <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import { AUTHENTICATION_ACTIONS } from '../../store/actions.type'

export default {
  name: 'LoginForm',
  data () {
    return {
      login: '',
      password: '',
      error: ''
    }
  },

  computed: {
    ...mapGetters({
      loading: 'auth/authenticating',
      authenticationMsg: 'auth/authenticationMsg'
    })
  },

  methods: {
    async handleSubmit () {
      this.error = ''
      const result = await this.$store.dispatch(`auth/${AUTHENTICATION_ACTIONS.login}`,
        { username: this.login, password: this.password })
      this.error = result
    }
  }
}
</script>
