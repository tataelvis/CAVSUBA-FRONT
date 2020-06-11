<template>
  <header>
    <div class="container">
      <div class="row">
      <div id="branding" class="col-md-2">
        <h1>
          <span class="highlight">CAVSUBA</span> System
        </h1>
      </div>

      <div class="col-md-1">
        <img src="~@/assets/ubap.png" alt="logo-university of bamenda" class="image-responsive"/>
      </div>

      <nav class="col-md-9">
        <ul class="pull-right">
          <li class="current">
            <a href="/">Home</a>
          </li>
          <li class="current" v-if="!user">
            <a href="/login">Login</a>
          </li>
          <li class="current" v-if="!user">
            <a href="/register">Register</a>
          </li>
          <li class="current" v-else>
            <a @click="logout">Logout</a>
          </li>
          <li class="current">
            <a href="/verify">Communique Verification</a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { AUTHENTICATION_ACTIONS } from '../store/actions.type';

export default {
  name: 'NavBar2',
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  methods: {
    logout () {
      this.$store.dispatch(`auth/${AUTHENTICATION_ACTIONS.logout}`)
    }
  }
};
</script>
