<template>
  <footer><br>2022 正隆股份有限公司 © All Rights Reserved.<br>
    This site is protected by reCAPTCHA and the Google <a href="”https://policies.google.com/privacy”">Privacy
      Policy</a> and <a href="”https://policies.google.com/terms”">Terms of Service</a> apply.<br>
  </footer>
</template>

<script>
  export default {
    name: 'footerPage',

    data: () => ({
      dialog: false,
      popupType: '',
    }),
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss">
  footer {
    position: relative;
    z-index: 1;
    color: #013b53;
    font-size: 12px;
    text-align: center;
    padding: 10px;
  }
</style>