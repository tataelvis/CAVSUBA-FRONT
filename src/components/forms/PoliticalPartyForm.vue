<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="form_main">
          <h4 class="heading text-center" v-if="!edit">
            Enregistrer un partie politique
          </h4>
          <h4 class="heading text-center" v-else>
            Modifier un partie politique
          </h4>
          <div class="form">
            <form @submit.prevent="handleSubmit">
              <div class="row">
              <div class="col-sm">
              <label>DATE ENREGISTREMENT MINISTERE JUSTICE*</label>
              <input
                type="date"
                required
                placeholder="DATE ENREGISTREMENT MINISTERE JUSTICE"
                name="dateEnregMin"
                class="txt"
                v-model="party.dateEnregMin"
              />
              </div>
              <div class="col-sm">
              <label>NOM DU PARTI*</label>
              <input
                type="text"
                required
                placeholder="NOM DU PARTI"
                value
                name="partyName"
                class="txt"
                v-model="party.partyName"
              />
              </div>
              </div>
              <div class="row">
              <div class="col-sm">
              <label>SIGLE*</label>
              <input
                type="text"
                required
                placeholder="SIGLE"
                name="sigle"
                class="txt"
                v-model="party.sigle"
              />
              </div>
              <div class="col-sm">
                <label>CIN*</label>
              <input
                type="text"
                required
                placeholder="CIN"
                class="txt"
                v-model="party.cin"
              />
              </div>
              </div>
                            <div class="row">
              <div class="col-sm">
                <label>NOM REPRESENTANT*</label>
              <input
                type="text"
                required
                placeholder="NOM REPRESENTANT"
                name="representName"
                class="txt"
                v-model="party.representName"
              />
              </div>
              <div class="col-sm">
                <label>PRENOM REPRESENTANT*</label>
              <input
                type="text"
                required
                placeholder="PRENOM REPRESENTANT"
                name="mob"
                class="txt"
                v-model="party.representSurname"
              />
              </div>
              </div>
                            <div class="row">
              <div class="col-sm">
                <label>FONCTION*</label>
              <input
                type="text"
                required
                placeholder="FONCTION"
                name="fonction"
                class="txt"
                v-model="party.fonction"
              />
              </div>
              <div class="col-sm">
                <label>EMAIL*</label>
              <input
                type="email"
                required
                placeholder="EMAIL"
                name="email"
                class="txt"
                v-model="party.email"
              />
              </div>
              </div>
                            <div class="row">
              <div class="col-sm">
                <label>ADRESSE REPRESENTANT*</label>
              <input
                type="text"
                required
                placeholder="ADRESSE DU REPRESENTANT"
                name="representAddress"
                class="txt"
                v-model="party.representAddress"
              />
              </div>
              <div class="col-sm">
                <label>DATE D'ENREGISTREMENT AU CEP*</label>
              <input
                type="date"
                required
                placeholder="DATE D'ENREGISTREMENT AU CEP"
                name="cepEnrollDate"
                class="txt"
                v-model="party.cepEnrollDate"
              />
              </div>
              </div>
                            <div class="row">
              <div class="col-sm">
                 <label>NIF*</label>
              <input
                type="text"
                required
                placeholder="NIF"
                name="name"
                class="txt"
                v-model="party.nif"
              />
              </div>
              <div class="col-sm">
                 <label>TELEPHONE 1*</label>
              <input
                type="text"
                required
                placeholder="TELEPHONE 1"
                name="phone1"
                class="txt"
                v-model="party.phone1"
              />
              </div>
              </div>
                            <div class="row">
              <div class="col-sm">
                 <label>TELEPHONE 2*</label>
              <input
                type="text"
                required
                placeholder="TELEPHONE 2"
                name="phone"
                class="txt"
                v-model="party.phone2"
              />
              </div>
              <div class="col-sm">
                 <label>SITE WEB*</label>
              <input
                type="text"
                required
                placeholder="SITE WEB"
                name="website"
                class="txt"
                v-model="party.website"
              />
              </div>
              </div>
                            <div class="row">
              <div class="col-sm">
                 <label>ADRESSE PARTI*</label>
              <input
                type="text"
                required
                placeholder="ADRESSE PARTI"
                name="partyAdresse"
                class="txt"
                v-model="party.partyAdresse"
              />
              </div>
              <div class="col-sm">
                 <label>EMAIL PARTI*</label>
              <input
                type="email"
                required
                placeholder="EMAIL PARTI"
                name="partyEmail"
                class="txt"
                v-model="party.partyEmail"
              />
              </div>
              </div>
                            <div class="row">
              <div class="col-sm">
                 <label>TELEPHONE 1 PARTI*</label>
              <input
                type="text"
                required
                placeholder="TELEPHONE 1 PARTI "
                name="partyPhone1"
                class="txt"
                v-model="party.partyPhone1"
              />
              </div>
              <div class="col-sm">
                 <label>TELEPHONE 2 PARTI*</label>
              <input
                type="text"
                required
                placeholder="TELEPHONE 2 PARTI"
                name="partyPhone2"
                class="txt"
                v-model="party.partyPhone2"
              />
              </div>
              </div><br>
              <p class="text-center">
              <input type="submit" value="Enregistrer" name="submit" class="txt2" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { PARTIES_ACTIONS } from '../../store/actions.type';

export default {
  name: 'PoliticalPartyForm',
  data() {
    return {
      party: {
        creationDate: new Date(),
        dateEnregMin: '',
        partyName: '',
        sigle: '',
        cin: '',
        representName: '',
        representSurname: '',
        fonction: '',
        email: '',
        representAddress: '',
        cepEnrollDate: '',
        nif: '',
        phone1: '',
        phone2: '',
        website: '',
        partyAdresse: '',
        partyEmail: '',
        partyPhone1: '',
        partyPhone2: ''
      }
    };
  },
  props: {
    edit: {
      type: Boolean
    },
    givenParty:{
    }
  },
  mounted() {
    if (this.edit) {
      Object.assign(this.party, this.givenParty);
      this.party.dateEnregMin = this.formatDate(this.party.dateEnregMin)
      this.party.cepEnrollDate = this.formatDate(this.party.cepEnrollDate)
    }
  },
  computed: {
    ...mapGetters({
      resultMsg: 'address/resultMsg',
      awaiting: 'address/awaitingResponse',
      currentAddressId: 'address/currentAddressId',
      currentAddress: 'address/currentAddress',
    })
  },
  methods: {
    async handleSubmit() {
      if (this.edit) {
        this.$store.dispatch(`parties/${PARTIES_ACTIONS.update_party}`, this.party)
        return true
      }
      return this.$store.dispatch(`parties/${PARTIES_ACTIONS.add_party}`, this.party);
    },
  formatDate (date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }
  },
};
</script>
