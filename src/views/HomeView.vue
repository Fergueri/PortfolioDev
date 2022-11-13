<template>
  <div class="home"></div>
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
   var myPath = anime.path('#bigSvg path');

   anime({
    targets: '#emoji',
    translateX: myPath('x'),
    translateY: myPath('y'),
    rotate: myPath('angle'),
    easing: 'linear',
    duration: 10000,
    
    loop: true,
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
#emoji{
  position: absolute;
  top: -30px;
  left: -25px;
}
.wrapper{
  position:relative;
  
}
.myPath{
  stroke-width: 5px;
}

#outerSvg{
  position: absolute;
  stroke-width: 5px;
}



</style>
