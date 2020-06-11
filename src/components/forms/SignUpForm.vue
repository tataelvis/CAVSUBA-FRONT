<template>
  <div class="container col-md-8 col-md-offset-2 col-xs-12">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h4>Administrative Personnel Registration Page</h4>
      </div>
      <div class="panel-body">
        <form action="<%= request.getContextPath() %>/registerApersonnel" method="post">
          <div class="form-group">
            <label class="control-label" for="name">FULL NAMES</label>
            <input
              type="text"
              name="name"
              class="form-control"
              placeholder="enter Admins names "
              required
            />
            <span></span>
          </div>

          <div class="form-group">
            <label class="control-label" for="username">USERNAME</label>
            <input
              type="text"
              name="username"
              class="form-control"
              placeholder="enter Admins Username"
              required
            />
            <span></span>
          </div>

          <div class="form-group">
            <label class="control-label" for="email">EMAIL ADDRESS</label>
            <input
              type="text"
              name="email"
              class="form-control"
              placeholder="enter email@"
              required
            />
            <span></span>
          </div>

          <div class="form-group">
            <label class="control-label" for="password">SECRETARY PASSWORD</label>
            <input
              type="password"
              name="password"
              class="form-control"
              placeholder="enter Admin Password"
              required
            />
            <span></span>
          </div>

          <div class="form-group">
            <label class="control-label" for="sex">ADMINISTRATIVE POST</label>
            <select>
              <option value="Administrative_post">VICE CHANCELLOR</option>
              <option value="Administrative_post">DEAN OF STUDIES</option>
              <option value="Administrative_post">HEAD OF DEPARTMENT</option>
            </select>
            <span></span>
          </div>
          <div class="form-group">
            <!-- 	 					<button  input type ="submit" class="btn btn-primary"  value="Submit">save</button> -->
            <input type="submit" value="Submit" />
          </div>
        </form>
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
