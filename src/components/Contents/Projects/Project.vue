<template>
  <div class="Project">
    <div class="leftArea">
      <div class="heading">
        {{data.heading}}
      </div>
    </div>
    <div class="rightArea">
      <ProjectGroup v-for="(item, index) in data.projects" :key="index" :data="item"/>
    </div>
  </div>
</template>

<script>
import Project from "./Project.json";
import ProjectGroup from "./components/ProjectGroup.vue";
export default {
    name:"Project",
    components:{
      ProjectGroup
    },
    data(){
      return {
        data:Project
      }
    }
}
</script>

<style lang="scss">
.Project{
    @include ContentCard;
    height:auto;
    display:flex;
}
.leftArea{
  width:25%;
}
.heading{
  align-self: center;
  padding:32px;
  color:var(--invertable-text);
  font-size:28px;
  line-height:30px;
  font-weight: bold;
  text-align: start;
}
.rightArea{
  flex:1;
  padding:32px;
  text-align: start;
}
@media screen and (max-width: 800px) {
  .Project{
    flex-direction: column;
  }
  .heading{
    font-size:14px;
    line-height:16px;
    padding-bottom:0px;
  }
  .leftArea{
    width:50%;
  }
}
</style>