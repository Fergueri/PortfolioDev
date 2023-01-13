<template>
  <div class="home">
    <div class="box">

    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
//import { collapsed } from "./state";
//import LineAnime from "@/components/animations/LineAnime";
export default {
  components: {
    //LineAnime,
  },

  setup() {
    
  },
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    }
  },
  mounted() {
  this.$nextTick(() => {
    window.addEventListener('resize', this.onResize);
  })
    anime({
      targets: '.box',
      rotate: 360,
      loop: 3
    })
    
  },
  beforeDestroy() { 
    window.removeEventListener('resize', this.onResize); 
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight,
      this.windowWidth = window.innerWidth,
      
      console.log(this.windowHeight),
      console.log(this.windowWidth);

    },
    
  },
};
</script>
<style>
.home{
  height:100%;
  display: grid;
  place-items: center;

}
.box{
  
  width:60vmin;
  height:50vmin;
  border: 0.5rem solid transparent;
  border-image:
  conic-gradient(
    
    #d53e33 0deg 90deg,
    #fbb300 90deg 180deg,
    #377af5 180deg 270deg,
    #399953 270deg 360deg
  ) 1;

}



</style>
