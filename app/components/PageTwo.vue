<template>
  <div>
    <table class="table" v-if="datas">
      <tr style="margin-bottom:30px">
        <th>date</th>
        <th>contenu</th>
      </tr>
      <tr v-for="data in datas">
        <td>{{data.month + '/' + data.day}}</td>
        <td>{{data.content}}</td>
      </tr>
    </table>

    <div v-else class="error">
      <h1>Veuillez entrer au moins une date</h1>
      <router-link class="error__link" :to="{ name: 'home' }">Page 1</router-link>
    </div>


  </div>

</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted() {

    },
    props: ['datas']
  };
</script>