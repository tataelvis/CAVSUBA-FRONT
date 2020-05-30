<template>
  <div>
    <LoginForm/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import LoginForm from '../../components/forms/LoginForm'

export default {
  name: 'Login',
  components: { LoginForm },
  computed: {
    ...mapGetters({
      authenticationMsg: 'auth/authenticationMsg'
    })
  }
}
</script>
