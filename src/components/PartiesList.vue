<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h4 class="text-center">Liste des partis politiques </h4><br>
          <div class="table-responsive">
            <table id="mytable" class="table table-bordred table-striped">
              <thead>
                <th>NOM DU PARTI</th>
                <th>NOM REPRESENTANT</th>
                <th>Address</th>
                <th>Email</th>
                <th>Contacts</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="party in parties" :key="party.id">
                  <td>{{ party.partyName }}</td>
                  <td>{{party.representName }}</td>
                  <td>{{party.partyAdresse}}</td>
                  <td>{{party.email}}</td>
                  <td>{{party.partyPhone1}}, {{ party.partyPhone2}}</td>
                  <td>
                    <p data-placement="top" data-toggle="tooltip" title="Edit">
                      <button
                        @click="$router.push({ name: 'edit-party', params: { id: party.id}})"
                        class="btn btn-primary btn-xs"
                        data-title="Edit"
                        data-toggle="modal"
                        data-target="#edit"
                      >
                        modifier
                      </button>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartiesList',
  props: {
    parties: {
      required: true
    }
  }
}
</script>