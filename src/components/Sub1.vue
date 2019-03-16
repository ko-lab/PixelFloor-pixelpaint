<template>
  <div class="sub" v-html="buff">
  </div>
</template>

<script>
export default {
  data () {
    return {
      buff: '<br>'
    }
  },
  mqtt: {
    // VueMqtt/publish1' or '+/publish1' */
    'ledfloorupdates' (data) {
      this.buff = this.buff + data + '<br>'
    }
  }
}
</script>