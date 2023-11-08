<template>
  <v-dialog v-model="dialog" persistent>
    <div v-if="popupType == 'straight'">
      <img src="@/assets/img/straight.png" />
    </div>
    <div class="txt" :class="popupType == 'product' ? 'padd0' : ''">
      <img
        class="closeX"
        @click="closePopup()"
        v-if="popupType == 'privacyType'"
        src="@/assets/img/menuX.png"
      />
      <!-- 產品介紹 -->
      <div v-if="popupType == 'product'">
        <img
          :src="require('@/assets/img/popup/product' + popupItem + '.png')"
        />
        <router-link to="/qaPage"
          ><img src="../assets/img/product/btn3.png"
        /></router-link>
        <span @click="closePopup()"
          ><img src="../assets/img/product/btn4.png"
        /></span>
      </div>
      <!-- /產品介紹 -->

      <!-- 問答 -->
      <div v-if="popupType == 'qa'">
        <fromComponents v-if="popupType == 'qa'" />
      </div>
      <!-- /問答 -->
      <!-- 隱私權 -->
      <div class="privacy" v-if="popupType == 'privacyType'">
        隱私權
        <p>
          內容內內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容容
        </p>
      </div>
      <!-- /隱私權 -->
    </div>
  </v-dialog>
</template>

<script>
import fromComponents from "../components/fromComponents";
export default {
  name: "popupBox",
  props: ["popupType", "popupItem"],
  components: {
    fromComponents,
  },
  data: () => ({
    dialog: true,
  }),
  methods: {
    closePopup() {
      this.$emit("popupStatus", false);
    },
    reFlash() {
      this.$router.go(0);
    },
  },
};
</script>
<style lang="scss">
#app {
  .message {
    font-size: 13px;
    color: #c35238;
    margin-bottom: 10px;
  }

  .v-dialog {
    overflow-y: inherit;
  }

  .v-btn {
    width: 100%;
  }
}

.v-dialog {
  overflow-y: inherit;
  box-shadow: none;
  max-width: 500px;

  .txt {
    width: 100%;
    max-width: 100%;
    position: relative;

    &.padd0 {
      padding: 0;
      img {
        width: 100%;
      }
    }
    .privacy p {
      max-height: 70vh;
      overflow-y: scroll;
    }
    .closeX {
      width: 50px;
      height: 51px;
      position: absolute;
      right: -20px;
      top: -20px;
    }
  }

  > div {
    margin: 0 auto;
  }

  .theme--light.v-sheet {
    background-color: rgb(255 255 255 / 0%);
  }

  .v-sheet.v-card:not(.v-sheet--outlined) {
    box-shadow: none;
  }

  .v-sheet.v-card,
  .v-card__actions {
    border-radius: 12px;
  }
}
</style>