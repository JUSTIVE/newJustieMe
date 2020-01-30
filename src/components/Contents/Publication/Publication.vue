<template>
  <div class="Publication">
      <div class="leftArea">
      <div class="heading">
        {{data.heading}}
      </div>
    </div>
    <div class="rightArea">
      <ProjectGroup v-for="(item, index) in data.publications" :key="index" :data="item"/>
    </div>
  </div>
</template>

<script>
// import Project from "./Project.json";
export default {
    name:"Publication"
}
</script>

<style lang="scss">
.Publication{
    @include ContentCard;
}
</style>