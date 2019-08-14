<template>
  <div>
        <div class="fact" v-if="data">
          <time>{{ data.month + '/' + data.day }}</time>
          <p>{{ data.content }}</p>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ["data"]
  };
</script>