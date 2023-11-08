<template>
  <div class="formBox">
    <h5 v-if="!finish">填寫您的抽獎資訊</h5>
    <h5 v-else>恭喜完成！<br />絲嵐大飯店 感謝您的蒞臨</h5>
    <p v-if="!finish">
      獲得抽獎資格就差一步！<br />填寫並公開分享FB，<span>抽飯店住宿券</span>
    </p>
    <p v-else>回歸日常，也不忘要品味細節<br />讓生活過得更質感</p>
    <v-form v-if="!finish" ref="form" v-model="valid" lazy-validation>
      <v-row>
        <!-- 姓名 -->
        <v-col cols="3" class="pr-0 pt-0 pb-0">
          <p class="title">姓名</p>
        </v-col>
        <v-col cols="9" class="pl-0 pt-0 pb-0">
          <v-text-field
            v-model="form.name"
            :rules="rules.name"
            solo
            required
            label="請輸入真實姓名"
          ></v-text-field>
        </v-col>
        <!-- E-mail-->
        <v-col cols="3" class="pr-0 pt-0 pb-0">
          <p class="title">E-mail</p>
        </v-col>
        <v-col cols="9" class="pl-0 pt-0 pb-0">
          <v-text-field
            v-model="form.mail"
            :rules="rules.mail"
            solo
            required
            label="請輸入E-mail"
          ></v-text-field>
        </v-col>
        <!-- 手機-->
        <v-col cols="3" class="pr-0 pt-0 pb-0">
          <p class="title">手機</p>
        </v-col>
        <v-col cols="9" class="pl-0 pt-0 pb-0">
          <v-text-field
            v-model="form.phone"
            :rules="rules.phone"
            solo
            required
            label="請輸入手機"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="checkbox text-center pl-8 pt-0 pb-0">
          <v-checkbox
            v-model="checkbox"
            :rules="[(v) => !!v || '請勾選用戶協議和隱私條款']"
            required
          >
            <template v-slot:label>
              我已閱讀並同意
              <spna @click="seePopUp()">用戶協議和隱私條款</spna>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>
      <br />
      <div class="submin" @click="validate()">
        <img src="@/assets/img/qa/a/btn1.png" />
      </div>
    </v-form>
    <div class="share" v-else>
      <img @click="reFlash()" src="@/assets/img/qa/a/btn2.png" />
      <img src="@/assets/img/qa/a/btn3.png" />
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
// import axios from "axios";
// import swal from 'sweetalert2'
import popup from "../components/popup";
export default {
  name: "formBox",
  components: {
    popup,
  },
  data: () => ({
    dialog: false,
    popupType: "privacyType",
    popupItem: "",
    valid: true,
    finish: false,
    checkbox: "",
    form: {
      name: "", //姓名
      mail: "", //E-mail
      phone: "", //手機
    },
    rules: {
      name: [(v) => !!v || "請輸入姓名"],
      mail: [
        (v) => !!v || "請輸入電子信箱",
        (v) => /.+@.+\..+/.test(v) || "格式錯誤",
      ],
      phone: [
        (v) => !!v || "請輸入十位手機號碼",
        (v) => /^[0-9]{10}$/.test(v) || "格式錯誤",
      ],
    },
  }),
  mounted() {},
  methods: {
    // 顯示popup視窗
    seePopUp(val) {
      this.dialog = true;
      this.popupItem = val;
    },
    // 驗證表單
    validate() {
      if (this.$refs.form.validate()) {
        this.finish = true;
      }
    },
    ParentData() {},
    reFlash() {
      this.$router.go(0);
    },
  },
};
</script>
<style lang="scss">
#app {
  .day {
    .v-text-field {
      padding: 0;
      margin: 0;
    }
  }
}

.formBox {
  padding: 20px 0;

  h5 {
    font-size: 1.9rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 30px;
  }

  .v-form {
    .v-input__slot {
      border: 2px solid #83bcc8;
    }

    > img {
      margin: 0 auto;
    }

    .title {
      margin-top: 8px;
      color: #ffffff;
    }

    .v-input--selection-controls {
      margin: 0;
      padding: 0;
    }

    .checkbox .v-input__slot {
      border: none;
      justify-content: center;
      font-size: 12px;

      .mdi-checkbox-blank-outline::before {
        background-color: #ffffff;
        border: 1px solid #83bcc8;
        color: hsla(208deg 100% 97% / 0%);
        width: 18px;
        height: 18px;
      }
    }

    .primary--text,
    .theme--light.v-label,
    a {
      color: #ffffff !important;
      font-size: 15px;
    }

    .v-input__control {
      .v-messages {
        min-height: 0;

        &.error--text {
          margin-bottom: 12px;
          color: #fff995 !important;
          caret-color: #ffffff !important;
        }
      }
    }
  }

  .submin,
  .share {
    width: 70%;
    margin: 0 auto;
    img {
      width: 100%;
      & + img {
        margin-top: 20px;
      }
    }
  }

  .v-text-field.v-text-field--solo .v-label {
    top: 6px;
  }
  .v-input--checkbox.error--text:not(:last-child)
    .v-input__slot
    + .error--text {
    display: none;
  }
}
</style>