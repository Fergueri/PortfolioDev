<template>
  <div class="home">
    <div ref="path" class="path">
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { ref, watch, unwatch } from "vue";
import { sidebarWidth, collapsed } from "@/components/sidebar/state";
//import LineAnime from "@/components/animations/LineAnime";
export default {
  components: {
    //LineAnime,
  },

  setup() {

  },
  data(){
    return{
      pathWidth: window.innerWidth - parseInt(sidebarWidth.value),
      pathHeight: window.innerHeight,
      boxDiv: document.createElement("div"),
      
    }
  },
  mounted() {
    this.box();
    
    watch(() => this.pathWidth, (newVal) => {
      this.updateResize();
      
    });
    watch(() => collapsed.value, (newVal) => {
    this.updateResize();
  });
},

  onUnmounted() {
    unwatch(() => collapsed.value);
    unwatch(() => this.pathWidth);
  },

  
  methods: {
    updateResize(){
      this.animated();
      this.pathWidth = window.innerWidth - parseInt(sidebarWidth.value);
      this.pathHeight = window.innerHeight;
      console.log(this.pathWidth);
      console.log(this.pathHeight);
    },
    path() {
      
      this.$el.style.width = this.pathHeight + 'px';
      this.$el.style.height = this.pathHeight + 'px';
      
    },
    box() {
      
      const pathDiv = document.getElementsByClassName("path")[0];
      this.boxDiv.className = "box";
      this.boxDiv.style.width = "50px";
      this.boxDiv.style.height = "50px";
      this.boxDiv.style.backgroundColor = "black";
      
      pathDiv.appendChild(this.boxDiv);
    },
    animated(data) {
      var pathPaddingX = this.pathWidth -70;
      var pathPaddingY = this.pathHeight - 50;
      anime.timeline({
          targets: ".box",
          duration: 2000, // 2 seconds
          translate: [0,0],
          loop: true,
          easing: 'easeInOutQuad',
          direction: 'normal'
          }).add({
            translateX: pathPaddingX,
          }).add({
            translateY: pathPaddingY,
          }).add({
            translateX: 0,
          }).add({
            translateY: 0,
          })
    },
    
  },



};
</script>
<style>
.home {
  height: 100%;
  width: 100%;
}
.path{
  height: 100%;
  width: 100%;
}



</style>
