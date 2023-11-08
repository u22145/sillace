<template>
  <div class="qaPage" :class="qaNumber < 4 ? 'qaBG' : 'asBG' + this.imgNB">
    <div class="img" data-aos="fade-down" data-aos-duration="1000">
      <img v-if="qaNumber < 4" :src="require('@/assets/img/qa/a/banner.png')" />
      <img
        v-else
        :src="require('@/assets/img/qa/a/banner' + this.imgNB + '.png')"
      />
    </div>
    <div
      v-if="qaNumber < 4"
      :class="['qa', 'key' + this.qaNumber == 'key3' ? 'txt' : '']"
    >
      <div :class="'key' + this.qaNumber == 'key3' ? '' : 'txt'">
        <span v-if="this.qaNumber == '0'"
          >{{
            userName
          }}很幸運呢！<br />本飯店【隱藏驚喜房】剛好有空<br />房間有魔法！相信會帶來專屬療癒體驗</span
        >
        <span v-if="this.qaNumber == '1'"
          ><strong>Ｑ1</strong>這次住宿，<br />和誰一起來呢？</span
        >
        <span v-if="this.qaNumber == '2'"
          ><strong>Ｑ2</strong>趁著好天氣，<br />想在哪裡待待呢？</span
        >
        <span v-if="this.qaNumber == '3'"
          >我們已經了解需求囉<br />請抽一把專屬您的房門鑰匙</span
        >
      </div>
      <div
        class="btnBox"
        v-if="this.qaNumber == '1'"
        :class="['key' + this.qaNumber]"
      >
        <img
          @click="choose('1')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-1.png')"
          alt=""
        />
        <img
          @click="choose('2')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-2.png')"
          alt=""
        />
        <img
          @click="choose('3')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-3.png')"
          alt=""
        />
      </div>
      <div
        class="btnBox"
        v-if="this.qaNumber == '2'"
        :class="['key' + this.qaNumber]"
      >
        <img
          @click="choose('1')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-1.png')"
          alt=""
        />
        <img
          @click="choose('2')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-2.png')"
          alt=""
        />
        <img
          @click="choose('3')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-3.png')"
          alt=""
        />
      </div>
      <div
        class="btnBox"
        v-if="this.qaNumber == '3'"
        :class="['key' + this.qaNumber]"
      >
        <img
          @click="choose('1')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-1.png')"
          alt=""
        />
        <img
          @click="choose('2')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-2.png')"
          alt=""
        />
        <img
          @click="choose('3')"
          :src="require('@/assets/img/qa/q/' + this.qaNumber + '-3.png')"
          alt=""
        />
      </div>
    </div>
    <div v-else class="as">
      answer:{{ this.answer }}<br />
      imgNB:{{ this.imgNB }}
      <div class="txt">
        <img :src="require('@/assets/img/qa/a/txt' + this.imgNB + '.png')" />
      </div>
      <div class="goNext">
        <img @click="seePopUp()" src="@/assets/img/qa/a/share.png" />
        <img @click="reFlash()" src="@/assets/img/qa/a/room.png" />
      </div>
      <footerComponents />
    </div>
    <div v-if="qaNumber < 4">
      <footerComponents />
    </div>
    <popup
      :popupType="popupType"
      :popupItem="popupItem"
      v-if="dialog"
      @popupStatus="dialog = false"
    />
  </div>
</template>

<script>
import footerComponents from "../components/footerComponents";
import popup from "../components/popup";
export default {
  name: "qaPage",
  components: {
    footerComponents,
    popup,
  },
  props: ["userName"],
  data() {
    return {
      dialog: false,
      popupType: "qa",
      popupItem: "",
      qaNumber: 0,
      imgNB: "",
      answer: "",
      comparison: [
        {
          img: "1",
          choosens: [112, 133, 313, 223],
        },
        {
          img: "2",
          choosens: [111, 233, 323, 332],
        },
        {
          img: "3",
          choosens: [112, 212, 221, 333],
        },
        {
          img: "4",
          choosens: [113, 132, 312, 231, 321],
        },
        {
          img: "5",
          choosens: [123, 213, 131, 311, 222],
        },
        {
          img: "6",
          choosens: [121, 211, 232, 322, 331],
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => (this.qaNumber = this.qaNumber + 1), 5000);
  },
  methods: {
    // 顯示popup視窗
    seePopUp(val) {
      this.dialog = true;
      this.popupItem = val;
    },
    choose(val) {
      if (this.qaNumber <= 3) {
        this.qaNumber = this.qaNumber + 1;
      }
      if (this.qaNumber > 1) {
        this.answer = this.answer + val;
        this.imgNB = this.comparison.find(
          (item) => item.choosens.indexOf(parseInt(this.answer)) != -1
        )?.img;
      }
    },
    reFlash() {
      this.$router.go(0);
    },
  },
};
</script>
<style lang="scss">
.qaPage {
  height: 100vh;
  background-image: url(../assets/img/product/bgF.png);
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  background-color: #abdbe3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .txt {
    margin: 0 auto 20px auto;
  }
  &.qaBG {
    background-image: url(../assets/img/product/bgF.png);
  }
  @for $i from 1 through 6 {
    &.asBG#{$i} {
      background-image: url('../assets/img/qa/a/bg'+#{$i}+'.png');
    }
  }
  &.asBG1 {
    background-image: url(../assets/img/qa/a/bg1.png);
  }

  img {
    width: 100%;
  }

  .img {
    width: 45%;
  }
  @mixin show($name) {
    .#{$name} img {
      &:nth-child(1) {
        animation: scrollToTop 1.5s forwards;
      }
      &:nth-child(2) {
        animation: scrollToTop 2s forwards;
      }
      &:nth-child(3) {
        animation: scrollToTop 2.5s forwards;
      }
    }

    @keyframes scrollToTop {
      from {
        transform: translate3d(0, 100px, 0);
        transition-property: opacity, transform;
        opacity: 0;
      }
      to {
        transform: translateZ(0px);
        transition-duration: 1.5s;
        opacity: 1;
      }
    }
  }
  @include show(key1);
  @include show(key2);
  @include show(key3);
  .qa {
    max-width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      display: block;
      font-size: 25px;
      margin-bottom: 10px;
    }
    .btnBox {
      width: 70%;
      img:hover {
        cursor: pointer;
      }
    }
    &.txt {
      .btnBox {
        display: flex;
        justify-content: space-between;
        max-width: 80%;
        padding: 25px 10px;

        img {
          width: 22%;
        }
      }
    }
  }
  .as {
    .goNext {
      min-width: 240px;
      width: 40%;
      margin: 0 auto;
    }
    .txt {
      width: 60%;
      img {
        max-width: 310px;
      }
    }
  }
}
</style>