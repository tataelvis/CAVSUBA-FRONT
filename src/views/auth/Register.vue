<template>
  <div>
    <br><br><br>
    <SignUpForm/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SignUpForm from '../../components/forms/SignUpForm'

export default {
  name: 'Register',
  components: { SignUpForm },
  computed: {
    ...mapGetters({
      authenticationMsg: 'auth/authenticationMsg'
    })
  }
}
</script>
