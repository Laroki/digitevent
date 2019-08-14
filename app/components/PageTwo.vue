<template>
  <div class="table">
    <table v-if="datas">
      <tr style="margin-bottom:30px">
        <th >date</th>
        <th >contenu</th>
      </tr>
      <tr v-for="data in datas">
        <td>{{data.month + '/' + data.day}}</td>
        <td>{{data.content}}</td>
      </tr>
    
    </table>

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