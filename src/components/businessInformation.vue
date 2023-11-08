<template>
  <div class="businessInformation">
    <p @click="seePopUp('businessInformation')">相關資訊請洽業務</p>
    <popup :popupType="popupType" v-if="dialog" @popupStatus="dialog=false" />
  </div>
</template>

<script>
  import popup from '../components/popup';
  export default {
    name: 'businessInformation',
    components: {
      popup,
    },
    data: () => ({
      dialog: false,
      popupType: '',
    }),
    mounted() {},
    methods: {
      seePopUp(val) {
        this.dialog = true
        this.popupType = val
      },
    },
  }
</script>
<style lang="scss">
  p {
    margin-top: 80px;
    background-color: #044ED7;
    text-align: center;
    padding: 15px;
    font-size: 18px;
    color: #ffffff;
  }
</style>