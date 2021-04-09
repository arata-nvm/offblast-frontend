<template>
  <main role="main">
    <section>
      <div class="loading" v-if="!loadedHaikus">
        <loading :active="true" color="#b3ab9b" />
      </div>
      <div v-else>
        <haiku_list :name="name" :url="url" :haikus="haikus" />
        <control />
      </div>
    </section>
  </main>
</template>

<script>
import API from "@/modules/apiClient.js";

import loading from "vue-loading-overlay";
import haiku_list from "@/components/partical/HaikuList";
import control from "@/components/partical/Control";

export default {
  components: {
    loading,
    haiku_list,
    control,
  },
  data: function () {
    return {
      name: "",
      haikus: [],
      loadedHaikus: false,
    };
  },
  mounted: function () {
    API.getRandomHaikus().then((response) => {
      this.name = response.data.name;
      this.url = response.data.url;
      this.haikus = response.data.haikus;
      this.loadedHaikus = true;
    });
  },
};
</script>

<style scoped>
main {
  padding-top: 3vh;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
</style>