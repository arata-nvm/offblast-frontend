<template>
  <div class="haiku-wrapper">
    <div class="haiku">
      <div class="haiku-inner">
        <div class="haiku-ku-wrapper">
          <p class="haiku-ku haiku-ku-1">{{ partsOfHaiku(haiku, 0) }}</p>
          <p class="haiku-ku haiku-ku-2">{{ partsOfHaiku(haiku, 1) }}</p>
          <p class="haiku-ku haiku-ku-3">{{ partsOfHaiku(haiku, 2) }}</p>
        </div>
      </div>
    </div>
    <div class="share">
      <a class="share-link" :href="genShareUrl(haiku, name)">
        <font-awesome-icon class="share-icon" :icon="['fab', 'twitter']" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    formatHaiku: function (haiku) {
      return haiku.replace(" ", "\n　").replace(" ", "\n　　");
    },
    partsOfHaiku: function (haiku, n) {
      return haiku.split(" ")[n];
    },
    genShareUrl: function (haiku, name) {
      let text = encodeURIComponent(`${haiku}\n- ${name}`);
      let url = encodeURIComponent(process.env.VUE_APP_PROJECT_URL);
      return `https://twitter.com/share/?url=${url}&text=${text}`;
    },
  },
  props: {
    haiku: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.haiku-wrapper {
  flex-shrink: 0;
  min-width: 212px;
}
.haiku {
  writing-mode: vertical-rl;
  text-align: left;
  height: 20em;
  margin: 10px 0 0 10px;
}
.haiku-inner {
  top: 0;
  right: 50%;
  display: block;
  border: 6px solid #b3ab9b;
  background-color: #f4f5f7;
  width: 200px;
  text-align: center;
}
.haiku-ku-wrapper {
  transform: translate(-15px, 0);
}
.haiku-ku {
  font-family: "Noto Serif JP", serif;
  font-size: 2em;
  padding: 30px 20px 40px 20px;
  white-space: nowrap;
}
p.haiku-ku {
  margin: 0;
  padding: 10px 10px;
}
.haiku-ku-1 {
  text-align: left;
}
.haiku-ku-2 {
  text-align: center;
}
.haiku-ku-3 {
  text-align: right;
}
.share {
  position: relative;
  top: -38px;
  left: 182px;
  width: 32px;
  height: 32px;
  color: #b3ab9b;
  margin: 0;
}
.share:hover {
  cursor: pointer;
}
.share-link {
  color: #b3ab9b7c;
}
.share-icon {
  padding: 8px;
}
</style>