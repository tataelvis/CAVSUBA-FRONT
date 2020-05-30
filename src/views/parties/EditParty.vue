<template>
  <div>
    <NavBar/>
    <br><br>
    <h3 class="text-center" v-if="fetching"><br><br>Chargement...</h3>
    <h3 class="text-center" v-else-if="!party">
      <br><br>Parti politique inexistant !
    </h3>
    <PoliticalPartyForm :givenParty="party" :edit="true" v-else/>
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
      party: null,
      fetching: false
    }
  },
  async mounted() {
    this.fetching = true
    const data = await this.$store.dispatch(`parties/${PARTIES_ACTIONS.get_party_by_id}`,
      this.$route.params.id)
    this.party = data
    this.fetching = false;
  }
}
</script>