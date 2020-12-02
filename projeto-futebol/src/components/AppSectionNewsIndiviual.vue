<template>
  <div class="row">
    <div class="col-3">
      <slot name="title"></slot>
      <span class="font-italic">{{ formatDate(newsDate) }} </span>
      <hr />

      <slot>Teste </slot>
    </div>
    <div class="col-9">
      <div>
          <img :src="require('../assets/' + this.imgName)" :alt="imgInfo">

           
        <canvas
          class="camera"
          id="videoCanvas"
          width="640" 
          height="360"
          
           ></canvas>
      </div>
     
    </div>
  </div>
</template>
<style>
      
    </style>

<script>
import Utils from "./../mixins/UtilsMixin";
import JSMpeg from 'jsmpeg'



export default {
  props: {
    imgName: {
      type: String,
      required: true,
    },
    imgInfo: {
      type: String,
      required: true,
    },

    newsDate: {
      type: String,
      required: true,
    },
  },
  mixins: [Utils],

  mounted(){

    var url = 'ws://localhost:8080' 
    var canvas = document.getElementById('videoCanvas');
    var player = new JSMpeg(url, {canvas: canvas});
    // var canvas = document.getElementById("videoCanvas");
    // var uri= 'ws://localhost:9999'

    // var player = new JSMpeg.Player("ws://localhost:9999", {
    // canvas: canvas
    //});
    
  }
};
</script>

<style scoped>
.row {
  margin-bottom: 30px;
}
img {
  height: 300px;
  width: 100%;
}
h2 {
  cursor: pointer;
  color: white;
}
</style>