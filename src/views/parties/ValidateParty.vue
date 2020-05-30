<template>
  <div>
    <NavBar/>
    <br><br>
    <h3 class="text-center" v-if="fetching"><br><br>Chargement...</h3>
    <h3 class="text-center" v-else-if="!parties.length">
      <br><br>Aucun parti politique enregistré pour le moment !
    </h3>
    <ValidationForm v-else :parties="parties"/>
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
      parties: [],
      fetching: false
    }
  },
  async mounted() {
    this.fetching = true
    const data = await this.$store.dispatch(`parties/${PARTIES_ACTIONS.get_parties}`, 'alpha');
    this.parties = data
    this.fetching = false
  }
}
</script>
