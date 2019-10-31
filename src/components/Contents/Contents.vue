<template>
  <div class="Contents">
    <Project/>
    <Publication/>
  </div>
</template>

<script>
import Project from './Projects/Project.vue';
import Publication from './Publication/Publication.vue';
export default {
    name:"Contents",
    components:{
        Project,
        Publication
    }
}
</script>

<style lang="scss">
.Contents{
  @include initializer;
  margin-left:400px;
  width: 100%;
  margin-top:-10px;
  padding:16px 16px;
  padding-bottom:32px;
  overflow: scroll;
  &::-webkit-scrollbar{
      display: none;
  }
}
@media screen and (max-width: 800px) {
  .Contents{
    margin-left:0px;
    padding-top:90vh;
    padding-left:0px;
    padding-right:0px;
  }
}
</style>