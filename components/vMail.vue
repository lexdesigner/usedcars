<template>
  <span class="email">
    <el-link
      type="info"
      :href="`mailto:${email}`"
      :title="`Написать на  ${email}`"
      >{{ email }}</el-link
    >
  </span>
</template>

<script>
export default {
  computed: {
    email() {
      return this.$store.getters["info/email"];
    }
  }
};
</script>

<style lang="scss" scoped></style>
