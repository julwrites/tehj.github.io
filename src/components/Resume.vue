<template>
  <div class="resume" id="resume">
    <object
      data="https://www.tehj.io/assets/resume/Resume_Julian_Teh.pdf#zoom=Fit"
      type="application/pdf"
      style="width:75vw;height:75vw;"
      typemustmatch
    >
      <a class="link" href="https://resume.tehj.io">
        <img class="img-icon" src="@/assets/images/alt/resume.png" alt="Resume" />
      </a>
    </object>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Resume extends Vue {}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
