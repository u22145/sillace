<template>
  <div class="productPage" :class="ScrollType">
    <div class="first">
      <div class="item">
        <div class="img" data-aos="fade-down" data-aos-duration="1000"><img src="../assets/img/product/banner.png">
        </div>
        <div class="txt" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500">
          {{userName}}<br>歡迎來到蓬鬆大飯店<br>入住前，先認識本飯店的頂級設施<br>沿著長廊走，讓我為你導覽介紹</div>
        <div class="btnBox">
          <span class="pointer" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000" @click="addScrollClass('scroll')"><img
              src="../assets/img/product/btn1.png"></span>
          <router-link data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500" to="/qaPage"><img
              src="../assets/img/product/btn2.png"></router-link>
        </div>
      </div>
      <div class="item">
        <footerComponents />
      </div>
    </div>
    <div class="last">
      <div class="item">
        <div class="txt" data-aos="flip-left" data-aos-duration="1500" data-aos-delay="500">
          為了給您全然放鬆的頂級寵愛<br>我們明白，有些關鍵很重要<br>「五星飯店裡，您最在乎的是？」</div>
        <div class="btnBox">
          <span class="pointer" @click="seePopUp('1')" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000"><img
              src="../assets/img/product/Lbtn1.png"></span>
          <span class="pointer" @click="seePopUp('2')" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1500"><img
              src="../assets/img/product/Lbtn2.png"></span>
          <span class="pointer" @click="seePopUp('3')" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2000"><img
              src="../assets/img/product/Lbtn3.png"></span>
          <popup :popupType="popupType" :popupItem="popupItem" v-if="dialog" @popupStatus="dialog=false" />
        </div>
      </div>
      <div class="item">
        <footerComponents />
      </div>
    </div>

  </div>
</template>

<script>
  import footerComponents from '../components/footerComponents'
  import popup from '../components/popup'
  import AOS from 'aos'
  export default {
    name: 'productPage',
    components: {
      footerComponents,
      popup
    },
    props: ['userName'],
    data() {
      return {
        ScrollType: '',
        dialog: false,
        popupType: 'product',
        popupItem: '',
      }
    },
    mounted() {
     
    },
    methods: {
      addScrollClass(val) {
        this.ScrollType = val
        if (this.ScrollType != '') {
          AOS.refreshHard()
        }
        console.log('2');
      },
      // 顯示popup視窗
      seePopUp(val) {
        this.dialog = true
        this.popupItem = val
      },
    }
  }
</script>
<style lang="scss">
  .productPage {
    height: 100vh;
    overflow: hidden;
    position: relative;

    &.scroll {
      [data-aos=flip-left]{
        transform: perspective(2500px) rotateY(0);
      }
      [data-aos^=fade][data-aos^=fade]{
        opacity: 1;
      }
      [data-aos=fade-up]{
        transform: translate3d(0,0,0);
      }
      [data-aos-delay="1000"]{
        transition-delay:1s;
      }
      [data-aos-delay="1500"]{
        transition-delay:1.5s;
      }
      [data-aos-delay="2000"]{
        transition-delay:2s;
      }
      @mixin scrollTo($name, $from, $to) {
        .#{$name} {
          animation: scrollTo-#{$name} .8s forwards;
        }

        @keyframes scrollTo-#{$name} {
          from {
            top: $from;
          }

          to {
            top: $to;
          }
        }
      }

      @include scrollTo (first, 0, -100vh);
      @include scrollTo (last, 100vh, 0);
    }

    img {
      width: 100%;
    }

    >div {
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 100vh;

      .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
      }
    }

    .first {
      top: 0;
      background-image: url(../assets/img/product/bgF.png);
      background-color: #abdbe3;

      .img {
        width: 45%;
      }

      .btnBox {
        width: 250px;
      }
    }

    .last {
      top: 100vh;
      background-image: url(../assets/img/product/bgL.png);
      padding-top: 100px;

      .btnBox {
        width: 75%;

        span {
          display: flex;
          width: 100%;

          img {
            width: 60%;
          }

          &:nth-child(2) {
            justify-content: end;
          }
        }
      }
    }
  }
</style>