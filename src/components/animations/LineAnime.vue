<script>
import { anime } from "animejs/lib/anime.es";
export default {
  name: "LineAnime",

  setup() {},
};

anime({
  targets: "#BigLine #BigLine path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});
</script>
<template>
  <div>
    <svg id="BigLine" viewBox="0 0 1207.67 940.11">
      <path
        d="M1207.67,940.11H44.44V30.26H1207.67V940.11Zm-1158.22-5H1202.67V35.26H49.44V935.11Z"
        style="fill: #b2aa8c"
      />
      <path
        d="M1170.33,895.67H0V0H1170.33V895.67ZM5,890.67H1165.33V5H5V890.67Z"
        style="fill: #b2aa8c"
      />
    </svg>
  </div>
</template>
