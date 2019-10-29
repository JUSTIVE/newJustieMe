<template>
  <div class="Contents">
    <Project/>
  </div>
</template>

<script>
import Project from './Projects/Project.vue';
export default {
    name:"Contents",
    components:{
        Project
    }
}
</script>

<style lang="scss">
.Contents{
    flex:1;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
}
</style>