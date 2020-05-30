<template>
  <div>
    <div class="main">
      <div class="container is-reduced">
        <center>
          <div class="middle">
            <div id="login">
              <form @submit.prevent="handleSubmit">
                <fieldset class="clearfix">
                  <p>
                    <span class="fa fa-user"></span>
                    <input
                     v-model="user.username"
                     type="text"
                     placeholder="Login"
                     required
                    />
                  </p>
                  <p>
                    <span class="fa fa-lock"></span>
                    <input
                     v-model="user.password"
                     type="password"
                     placeholder="mot de passe"
                     required
                    />
                  </p>
                  
                  <div>
                    <span style="width:48%; text-align:left;  display: inline-block;">
                      <input type="submit" value="INSCRIPTION" />
                    </span>
                    <span style="width:50%; text-align:right;  display: inline-block;">
                      <a class="small-text" href="/login">
                        CONNEXION
                      </a>
                    </span>

                  </div>
                </fieldset>
                <div class="clearfix"></div>
              </form>

              <div class="clearfix"></div>
            </div>
            <!-- end login -->
            <div class="logo">
              &nbsp;&nbsp;&nbsp;INSCRIPTION
              <div class="clearfix"></div>
            </div>
          </div>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { AUTHENTICATION_ACTIONS } from '../../store/actions.type'

export default {
  name: 'SignUpForm',
  data () {
    return {
      user: {
        username: '',
        password: '',
        emailVerified: true,
        email: 'test@test.com'
      }
    }
  },

  computed: {
    ...mapGetters({
      loading: 'auth/authenticating',
      authenticationMsg: 'auth/authenticationMsg'
    })
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch(`auth/${AUTHENTICATION_ACTIONS.register}`, this.user)
    }
  }
}
</script>
