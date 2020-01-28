<template>
  <div class="ProjectGroup">
      <div class="categoryTitle">{{data.category}}</div>
      <div class="ProjectList">
        <SingleProject v-for="(project, index) in data.project" :key="index" :Project="project"/>
      </div>
  </div>
</template>

<script>
import SingleProject from "./SingleProject.vue";
export default {
    name:"ProjectGroup",
    components:{
        SingleProject
    },
    props:{
        data:Object
    }
}
</script>

<style lang="scss">
.ProjectGroup{
    // padding:16px;
    display:flex;
    flex-direction: column;
}
.ProjectList{
    padding:16px 8px;
}
.categoryTitle{
    font-weight: bold;
    padding-left:16px;
    color:var(--subtle-white);
}
@media screen and (max-width: 800px) {
    .ProjectGroup{
        padding:16px 0px;
    }
}
</style>