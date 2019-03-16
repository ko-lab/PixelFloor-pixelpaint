<template>
  <div>
    <b-button-group vertical>
    <b-button 
        @click="fillFloor" 
        v-b-tooltip.hover 
        title="Fill floor with selected color"
    >
    <font-awesome-icon icon="fill" />
    Fill
    </b-button>
    <b-button 
        @click="clearFloor" 
        v-b-tooltip.hover 
        title="Set all pixels black"
    >
    <font-awesome-icon icon="eraser" />
    Clear
    </b-button>
    <b-button 
        @click="resendFloor" 
        v-b-tooltip.hover 
        title="Resend the entire image"
    >
    <font-awesome-icon icon="redo" />
    Resend
    </b-button>
    </b-button-group>
  </div>
</template>

<script>
export default {
  methods: {
    fillFloor () {
      this.$root.$emit('changeAllTilesColor')
    },
    clearFloor () {
      this.$root.$emit('clearFloor')
    },
    resendFloor () {
      this.$root.$emit('resendFloor')
    }
  },
  mqtt: {
    'ledfloorupdates' (data, topic) {
      console.log(topic + ': ' + String.fromCharCode.apply(null, data))
    }
  }
}
</script>