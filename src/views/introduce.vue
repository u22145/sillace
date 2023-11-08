<template>
  <div class="introduce">
    <v-img contain src="@/assets/img/introduce/txt.png" />
    <footerComponents />
  </div>
</template>

<script>
import footerComponents from "../components/footerComponents";

export default {
  name: "introducePage",
  components: {
    footerComponents,
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.introduce {
  background-color: #c9e3f3;
  img {
    width: 100%;
  }
}
</style>