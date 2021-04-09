<template>
  <div class="haiku-list-wrapper">
    <div>
      <a :href="url" class="law-name">{{ name }}</a
      >には575が<span class="haiku-num">{{ haikus.length }}</span
      >個含まれています。
    </div>
    <div class="haiku-list">
      <haiku
        v-for="haiku in haikus"
        :key="haiku.haikus"
        :haiku="haiku"
        :name="name"
      />
    </div>
  </div>
</template>

<script>
import haiku from "@/components/partical/Haiku";
export default {
  components: {
    haiku,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    haikus: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.haiku-list {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;

  justify-content: space-evenly;
  --gap: 10px;
  margin: calc(-1 * var(--gap)) 0 0 calc(-1 * var(--gap));
  width: calc(100% + var(--gap));
}

@media (max-width: 400px) {
  .haiku-list {
    justify-content: center;
  }
}

.law-name,
.haiku-num {
  padding-right: 10px;
  font-size: 1.25em;
}
.haiku-num {
  padding-left: 10px;
}
</style>