<template>
  <el-footer>
    <span>© Genser, 2002-{{ year }}</span>
    <div class="footer-contacts">
      <span
        >Телефон: <b><v-phone></v-phone></b
      ></span>
      <v-mail></v-mail>
    </div>
  </el-footer>
</template>

<script>
import vPhone from "~/components/vPhone.vue";
import vMail from "~/components/vMail.vue";
export default {
  components: {
    vPhone,
    vMail
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="sass">
.el-footer
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0
  border-top: solid 1px #e6e6e6
  margin-top: 35px
.footer-contacts
  display: flex
  align-items: center
  justify-content: flex-end
  .email
    margin-left: 20px
    a
      color: #333333
      text-decoration: none
</style>
