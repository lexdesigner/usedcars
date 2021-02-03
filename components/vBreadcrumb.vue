<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item to="/">Главная </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="(link, i) in path"
      :key="link + i"
      :to="i + 1 != path.length ? link.link : false"
      >{{ link.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    path: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
