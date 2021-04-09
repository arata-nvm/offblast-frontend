<template>
  <div id="app">
    <navigation :projectName="projectName" />
    <index />
    <src />
  </div>
</template>

<script>
import navigation from "@/components/partical/Navigation";
import index from "@/views/index";
import src from "@/components/partical/Src";
import "normalize.css";

export default {
  name: "App",
  components: {
    navigation,
    index,
    src,
  },
  data: function () {
    return {
      projectName: process.env.VUE_APP_PROJECT_NAME,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap");

body {
  font-family: -apple-system, BlinkMacSystemFont, "Noto Sans JP", "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #222;
  background-color: #faf8f4;
}

#app {
  width: 95%;
  margin: auto;
  padding: 10px;
  max-width: 1100px;
}
a {
  color: #9b7c3f;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
