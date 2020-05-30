<template>
  <div class="container my-4">
    <p
      class="font-weight-bold text-center"
    >VALIDATION DES PIÈCES</p>
    <hr />
    <h3 class="text-success text-center" v-if="success"> VALIDÉE AVEC SUCCÈS !<br></h3>
    <br><br>
    <p class="font-weight-bold text-center">
      Selectionner un partie politique
      <select v-model="validations.embLogo">
        <option v-for="party in parties" :key="party.id" :value="party.id">
          {{ party.partyName }}
        </option>
      </select>
    </p>
    <br><br>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
           id="check1" v-model="validations.actConst" />
          <label class="custom-control-label" for="check1">
            ACTE CONSTITUTIF NOTARIE STATUTS OBJECTIFS DU PARTI OU REGRPMENTs
          </label>
        </div>
      </li>
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
           v-model="validations.actRec" id="check2" />
          <label class="custom-control-label" for="check2">
            ACTE DE RECONNAISSANCE DU PARTI POLITIQUE
          </label>
        </div>
      </li>
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
          v-model="validations.recOrg" id="check3" checked />
          <label class="custom-control-label" for="check3">
            RECONNAISSANCE ORGANISATION FORMANT REGROUPEMENT
          </label>
        </div>
      </li>
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
          v-model="validations.listPP" id="check4" checked />
          <label class="custom-control-label" for="check4">
            LISTE PARTIS ORGANISATIONS SIGNATAIRES ACCORD GROUPEMENT POLITIK
          </label>
        </div>
      </li>
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
          v-model="validations.docACC" id="check5" />
          <label class="custom-control-label" for="check5">
            DOCUMENT ACCORD UTILISATION EMBLEME UNIQUE GPOLITIQUE
          </label>
        </div>
      </li>
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
          v-model="validations.copyEmb" id="check6" />
          <label class="custom-control-label" for="check6">
            Copie de emblème sur support électronique
          </label>
        </div>
      </li>
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
          v-model="validations.docNomRep" id="check7" />
          <label class="custom-control-label" for="check7">
            DOCUMENT NOMREPRESENTANT MANDATAIRE CHAQUE PARTI GRPT POLITIQUE
          </label>
        </div>
      </li>
      <li class="list-group-item">
        <!-- Default checked -->
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input"
          v-model="validations.siglEmb" id="check8" />
          <label class="custom-control-label" for="check8">
            SIGLES EMBLEME COULEURS ADOPTES IDENTIFICATION PARTI GPOLITIK
          </label>
        </div>
      </li>
    </ul>
    <br><br>
    <div class="row">
      <div class="col-md-4">
        <input type="text" class="txt" v-model="validations.receiverName" placeholder="RECU PAR"/>
      </div>
    </div>
    <br><br>
    <p class="text-center">EMBLÈME <input type="file" @change="handleFileChange"/></p>
    <br><br>
    <div class="row">
      <div class="col-sm">
        <p class="text-center">
        <input type="submit" class="txt2" value="VALIDER" @click.prevent="handleSubmit"/>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { PARTIES_ACTIONS } from '../../store/actions.type';
export default {
  name: 'ValidationForm',
  props: {
    parties: {
    }
  },
  data() {
    return {
      success: false,
      validations: {
        creationDate: new Date(),
        actConst: false,
        actRec: false,
        recOrg: false,
        listPP: false,
        docACC: false,
        copyEmb: false,
        docNomRep: false,
        siglEmb: false,
        receiverName: '',
        embLogo: '',
      },
      file: ''
    };
  },
  methods: {
    async handleSubmit() {
      this.success = false;
      await this.$store.dispatch(`parties/${PARTIES_ACTIONS.validate_party}`,
       {validation: this.validations, logo: this.file });
      this.success = true;
      window.scrollTo(0,0);
    },

    handleFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return true;
      }
      this.file = files[0];
      return true;
    }
  }
}
</script>