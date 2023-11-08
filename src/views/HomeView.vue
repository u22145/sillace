<template>
  <div class="HomePage">
    <v-img class="title" data-aos="fade-up" data-aos-duration="1500" contain src="../assets/img/index/txt1.png" />
    <v-img class="toiletPaper"  data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000" contain src="../assets/img/index/txt2.png" />
    <div class="inputBox" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field v-model="name" :counter="10" :rules="rules.name" label="您的暱稱是？(限10字)" required solo
          @input="$emit('input',$event)"></v-text-field>
        <img class="pointer" @click="validate()" src="../assets/img/index/check-in.png">
      </v-form>
    </div>
    <footerComponents />
  </div>
</template>

<script>
  import footerComponents from '../components/footerComponents'
  
  export default {
    name: 'HomePage',
    components: {
      footerComponents
    },
    data() {
      return {
        name: '',
        valid: true,
        rules: {
          name: [
            v => !!v || '請輸入暱稱',
            v => (v && v.length <= 10) || '暱稱限10字',
          ],
        },
      }
    },
    watch: {

    },
    mounted() {},
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          this.$router.push('productPage')
        }
      },
    }
  }
</script>
<style lang="scss">
  .HomePage {
    padding-top: 56px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img {
      width: 100%;
      position: relative;
      z-index: 1;
    }

    .toiletPaper {
      height: 40%;
    }

    .inputBox {
      width: 50%;
      margin: 0 auto;
      position: relative;

      .theme--light.v-label {
        color: #ffffff;
      }

      .v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)>.v-input__control>.v-input__slot {
        box-shadow: none;
      }

      .theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
        background-color: hsla(206deg 37% 61% / 73%);
      }

      >a {
        position: relative;
        z-index: 1;
      }

      &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        background-size: 100%;
        width: 375px;
        height: 243px;
        left: -146px;
        top: -39px;
        background-image: url(../assets/img/index/invalid-name.png);
      }
    }
  }
</style>