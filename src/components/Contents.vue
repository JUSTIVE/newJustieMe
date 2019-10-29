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
    margin-left:450px;
    height:100vh;
    width: 50vw;
    margin-top:-10vh;
    overflow-y: scroll;
    padding:0px 32px;
    padding-bottom:32px;
    &::-webkit-scrollbar{
        display: none;
    }
    
}
</style>