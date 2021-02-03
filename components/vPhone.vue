<template>
  <span class="phone">
    <el-link
      type="info"
      :href="`tel:${phone}`"
      :title="`Позвонить по ${phoneLocal(phone)}`"
      >{{ phoneLocal(phone) }}</el-link
    >
  </span>
</template>

<script>
export default {
  methods: {
    phoneLocal(phone) {
      return phone.replace(
        /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
        "$1 ($2) $3-$4-$5"
      );
    }
  },
  computed: {
    phone() {
      return this.$store.state.info.phone;
    }
  }
};
</script>

<style lang="scss" scoped></style>
