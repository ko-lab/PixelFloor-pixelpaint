<template>
  <b-container id="app" class="text-light text-center">
    <b-row>
        <b-col align-self="center" offset-md="3">
            
        </b-col>
    </b-row>
    <b-row>

      <b-col sm="3" md="3" lg="3" class="center-block text-center">
        <p>
          <h1 class="title">Pixel Paint</h1>
        </p>
        <p>
            <color-picker v-model="color" :width="200" :height="250" style="display: inline-block;" />
        </p>
        <p>
          <ColorButtons></ColorButtons>
        </p>
      </b-col>

      <b-col sm="9">
        <Floor/>
      </b-col>
      <!-- <b-col>
        <Gallery />
      <form>
        <div class="form-group">
            <input class="form-control" id="exampleFormControlInput1" placeholder="Artist Name">
            <input class="form-control" id="exampleFormControlInput2" placeholder="Title of Artwork">
        </div>
        </form>
        <b-btn @click="requestSave">Save to Gallery</b-btn>
      </b-col> -->
    </b-row>

  </b-container>
</template>

<script>
import Floor from './components/Floor.vue'
import ColorButtons from './components/ColorButtons'
// import Gallery from './components/Gallery'
import ColorPicker from 'vue-iro-color-picker';

export default {
  name: 'app',
  components: {
    Floor, 
    ColorButtons, 
    // Gallery,
    'color-picker': ColorPicker
  },
  data () {
    return {
      color: "#ff0000"
    }
  },
  methods: {
    colorSelection : function () {
    },
    requestSave: function() {
      this.$root.$emit('requestSave')
    }
  },
  mounted () {
    this.$emit('clearFloor')
    // this.$mqtt.subscribe('ledfloorupdates')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Press+Start+2P');

body {
  background-color: rgb(32, 32, 32) !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;  
  margin-top: 60px;
  margin: 5px;
  padding: 20px;
}

.title {
    color: whitesmoke;
    text-align: center;
    font-family: 'Press Start 2P';
    font-size: 35pt;
    background: linear-gradient(to right, #FF5C4D,#FF9636,rgb(54, 196, 149),rgb(69, 141, 189));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
