<template>
  <nav class="navigation">
    <span class="project-name">{{ projectName }}</span>
    <small class="contact"
      ><a href="https://twitter.com/arata_nvm">@arata_nvm</a></small
    >
  </nav>
</template>

<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.project-name {
  font-size: 18px;
  margin-right: auto;
}
.contact {
  margin-left: auto;
}
</style>