<template>
        <div class="floor" v-on:dragstart.prevent v-on:drop.prevent>
            <Tile
                v-for="tile in tiles"
                :key="tile.id"
                :tile="tile"
                @changeTileColor="changeTileColor"
            />
        </div>
</template>


<script>
import Tile from './Tile.vue'


export default {
  components: {
    Tile
  },
  data () {
    return {
      tiles: []
    }
  },
  methods: {
    'changeTileColor': function (idToChange) {
      var tile = this.tiles.find(x => x.id == idToChange);
      if (tile) {
        var color = this.$parent.color
        var rgb = this.hexToRgb(color)
        tile.color = color;
        var msg = `${tile.x} ${tile.y} ${rgb.r} ${rgb.g} ${rgb.b}`
        this.$mqtt.publish('ledfloorupdates', msg)
      }
    },
    'changeAllTilesColor': function () {
      var color = this.$parent.color
      var rgb = this.hexToRgb(color)
      var msg = `${rgb.r} ${rgb.g} ${rgb.b}`
      this.$mqtt.publish('ledfloorupdates', msg)
      this.tiles.map(e => e.color = this.$parent.color)
    },
    'concatenatePixelStrings': function(sequence, pos) {
        var col = this.hexToRgb(pos.color)
        var msg = `${sequence}\n${pos.x} ${pos.y} ${col.r} ${col.g} ${col.b}`;
        return msg
    },
    'resendFloor': function () {
      var msg = this.tiles.reduce(this.concatenatePixelStrings)
      this.$mqtt.publish('ledfloorupdates', msg)
    },
    'clearFloor': function () {
      this.tiles.map(e => e.color = "#000000")
      var msg = "0 0 0"
      this.$mqtt.publish('ledfloorupdates', msg)
    },
    'requestSave': function () {
      var msg = {
        artist: "anonymous",
        title: "unnamed",
        data: this.tiles
      }
      console.log(msg)

    //   this.$http.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //     .then(response => (console.log(response.data.bpi)))
    },
    'hexToRgb': function(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
  },
  mounted: function () {
    this.$root.$on('changeAllTilesColor', this.changeAllTilesColor);
    this.$root.$on('clearFloor', this.clearFloor);
    this.$root.$on('resendFloor', this.resendFloor);
    this.$root.$on('requestSave', this.requestSave);
  },
  created: function () {
    // load last save
    // this.$http.get('http://10.90.154.80:5000/api/artpiece')
    //     .then(response => (console.log(response.data)))

    for (var y = 10; y >= 0; y--) { 
      for (var x = 0; x < 11; x++) {
        this.tiles.push({
          id: y*11 + x, 
          x: x, 
          y: y, 
          color: "#000000"
        })
      }
    }
  }
}
</script>


<style scoped>
    /* .floor {
        display: grid;
        grid-template-columns: repeat(11, 1fr);
        grid-template-rows: repeat(11, 1fr);
        place-items: center;
        width: 100%;
        height: 0;
        top:0px;
        bottom:0px;
        padding-top: 100%
    } */

    .floor {
        display: flex;
        flex-wrap: wrap;
    }
</style>
