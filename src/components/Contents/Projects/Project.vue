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
    background:#FFD166;
    height:auto;
    display:flex;
    flex-direction: column;
    height:45%;
  -ms-overflow-style: none; 
  ::-webkit-scrollbar{
  display: none;
}
}

.heading{
  align-self: center;
  padding:32px;
  padding-bottom: 16px;
  color:var(--invertable-text);
  font-size:28px;
  line-height:30px;
  font-weight: bold;
  text-align: start;
}
.rightArea{
  flex:1;
  padding:0px 16px;
  text-align: start;
  overflow: hidden;
  // overflow-y: scroll;
  position: absolute;
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