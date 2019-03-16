<template>
    <div class="tile"
      @touchstart="clicked($event)"
      @mousedown="clicked($event)"
      @mouseover="clicked($event)"
      :style="{'background-color': tile.color}" 
    />
</template>


<script>
export default {
  props: {
    tile: {
        type: Object,
        required: true
    }
  },
  methods: {
    clicked: function (event) {
        if(event.buttons == 1) {
            this.$emit('changeTileColor', this.tile.id)
        }
    }
  }
}
</script>


<style scoped>

.tile {
  position: relative;
  flex-basis: calc(9% - 10px);
  margin: 3px;
  box-sizing: border-box;
  border-radius: 5%;
}

.tile::before {
  content: '';
  display: block;
  padding-top: 100%;
}

.tile .content {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
}

.tile:hover {
    border: 2px solid #ffffff;
}
</style>
