<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <router-link to="/" @click="A11()" id="logo">
          <v-img
            class="shrink mr-2"
            contain
            src="./assets/img/logo.png"
            transition="scale-transition"
            width="70"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-img
        @click="showMenu = true"
        class="shrink ml-2 pointer"
        contain
        src="./assets/img/menu.png"
        width="40"
      />
    </v-app-bar>
    <v-main>
      <router-view :userName="userName" @input="userName = $event" />
    </v-main>
    <div class="nav" v-if="showMenu" @click="showMenu = false">
      <ul>
        <li>
          <router-link to="/productPage" v-if="userName != ''"
            ><img src="./assets/img/btn1.png"
          /></router-link>
          <router-link to="/" v-if="userName == ''"
            ><img src="./assets/img/btn1.png"
          /></router-link>
        </li>
        <li>
          <router-link to="/introduce"
            ><img src="./assets/img/btn2.png"
          /></router-link>
        </li>
        <li>
          <router-link to="/qaPage"
            ><img src="./assets/img/btn3.png"
          /></router-link>
        </li>
        <li>
          <router-link to="/fromPage"
            ><img src="./assets/img/btn4.png"
          /></router-link>
        </li>
        <li>
          <a href="#" target="_blank"><img src="./assets/img/fb.png" /></a>
          <a href="#" target="_blank"><img src="./assets/img/line.png" /></a>
        </li>
      </ul>
    </div>
    <popup
      :popupType="popupType"
      :popupItem="popupItem"
      v-if="dialog"
      @popupStatus="dialog = false"
    />
  </v-app>
</template>

<script>
// import liff from '@line/liff';
// import swal from 'sweetalert2';
export default {
  name: "App",
  components: {},
  data: () => ({
    dialog: false,
    popupType: "straight",
    popupItem: "",
    userName: "",
    showMenu: false,
    liffId: /(192.168|localhost)/.test(window.location.href)
      ? "1656433734-Av3Nlql3"
      : process.env.NODE_ENV == "production"
      ? "1655166006-PrwQEl4w"
      : "1656433734-Deg8qRqg",
    // 正式站                      測試站
  }),

  mounted() {
    // let _this = this;
    // liff.init({
    //   liffId: _this.liffId,
    //   withLoginOnExternalBrowser: true
    // }).then(() => {
    //   //確認登入狀態
    //   if (!liff.isLoggedIn()) {
    //     //執行登入
    //     liff.login({
    //       redirectUri: location.href
    //     });
    //   } else {
    //     // 新增邀請紀錄
    //     // _this.addInvitationRecord()
    //     //取得Line Token
    //     _this.$SetAccessToken(liff.getAccessToken());
    //     // User資訊
    //     _this.getUserInfo()
    //     //確認好友狀態
    //     liff.getFriendship().then(async (data) => {
    //       if (!data.friendFlag) {
    //         swal.fire({
    //           text: '請加入春風官方帳號好友',
    //           allowOutsideClick: false
    //         }).then(() => {
    //           // 判斷是否是開發環境
    //           var isDev = /(192.168|localhost|thor.iprefer|hulk.iprefer)/.test(window.location.href);
    //           window.location.href = isDev ? 'https://line.me/R/ti/p/@374zoemd' :
    //             'https://line.me/R/ti/p/@andantetissue';
    //         })
    //         // _this.showPopup = true
    //         // 做一個popup，有顆按鈕可以導到加好友畫面
    //       } else {
    //         try {
    //           //取得user資訊
    //           _this.lineProfile = await liff.getProfile();
    //           // console.log("lineProfile",_this.$accessToken,)
    //           // console.log("$accessToken",_this.lineProfile)
    //         } catch (error) {
    //           alert('忙碌中，請稍後再試');
    //           console.error(error);
    //         }
    //       }
    //     })
    //   }
    // });
    window.addEventListener("resize", this.renderResize, true);
  },
  beforeDestroy() {
    // 移除 監聽
    window.addEventListener("resize", this.renderResize, false);
  },
  methods: {
    // goAeSHOP() {
    //   liff.openWindow({
    //     url: "https://pse.is/4f5ggc",
    //     external: false,
    //   });
    // },
    // changeAeMember(val) {
    //   this.$set(this.userInfo, "isAeMember", val)
    // },
    // 禁止手機橫拿
    // 顯示popup視窗
    seePopUp() {
      this.dialog = true;
    },
    renderResize() {
      if (window.orientation == 180 || window.orientation == 0) {
        this.showPopup = false;
      }
      if (window.orientation == 90 || window.orientation == -90) {
        this.showPopup = true;
      }
    },
  },
};
</script>
<style lang="scss">
html {
  background-image: url(./assets/img/bg.png);
  background-size: cover;
  background-attachment: fixed;
}

#app {
  background: hsla(0deg 0% 100% / 0%);
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  font-family: "Noto Serif TC", serif !important;

  .title {
    font-family: "Noto Serif TC", serif !important;
  }

  .v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
    box-shadow: none;
  }

  .theme--light.v-app-bar.v-toolbar.v-sheet {
    background: none !important;
  }

  header {
    max-width: 600px;
    margin: 0 auto;
  }

  .v-main {
    padding: 0 !important;
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    background-color: hsla(0deg 0% 0% / 80%);
    width: 100vw;
    height: 100vh;

    ul {
      max-width: 380px;
      list-style: none;
      padding: 40px 30px;
      @extend %blueBg;
      outline: 1px solid hsla(0deg 0% 100% / 44%);
      outline-offset: -8px;

      img {
        width: 100%;
      }

      li {
        margin-bottom: 15px;

        &:last-child a {
          display: inline-block;
          width: 50%;
          text-align: center;

          img {
            width: 40%;
            height: 40%;
          }
        }
      }
    }
  }
}
</style>