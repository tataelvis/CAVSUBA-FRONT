<template>
  <div>
    <NavBar/>
    <br><br>
    <PoliticalPartyForm />
  </div>
</template>

<script>
import NavBar from '../../components/NavBar';
import PoliticalPartyForm from '../../components/forms/PoliticalPartyForm'
import PartiesList from '../../components/PartiesList'
import ValidationForm from '../../components/forms/ValidationForm'
import { PARTIES_ACTIONS } from '../../store/actions.type';

export default {
  name: 'Home',
  components: { NavBar, PoliticalPartyForm, PartiesList, ValidationForm },
  data() {
    return {
      fetching: false
    }
  },
  async mounted() {
    // this.fetching = true
    // const data = await this.$store.dispatch(`parties/${PARTIES_ACTIONS.get_parties}`)
    // this.parties = data
  }
}
</script>