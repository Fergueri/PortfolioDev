<template>
  <div class="home">
  <div>
    <svg class="square">
    <rect
        x="10"
        y="10"
        width="300"
        height="300"
        stroke="black"
        fill="white"
      />
    </svg>
    <svg id="path">
      <rect
        class="path"
        x="10"
        y="10"
        width="30"
        height="30"
        stroke="black"
        fill="transparent"
      />
      
    </svg>
  </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
//import LineAnime from "@/components/animations/LineAnime";
export default {
  components: {
    //LineAnime,
  },

  setup() {},
  data() {
    
  },
  mounted() {
    var myPath = anime.path("#path path");
    anime({
      targets: ".square",
      translateX: myPath("x"),
      translateY: myPath("y"),
      // rotate: myPath('angle'),
      easing: "linear",
      duration: 2000,
      loop: true,
    });
  },
  function() {},
};
</script>
<style>
#BigLine {
  width: 100%;

  height: 98vh;
}

.path {
  stroke-width: 5px;
  width: 90%;
  height: 90%;
}
</style>
