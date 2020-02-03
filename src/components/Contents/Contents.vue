<template>
  <div class="Contents" @click="expandedOpen">
    <!-- <Project/> -->
    <!-- <Publication/> -->
  </div>
</template>

<script>
import {EventBus} from '../../eventbus.js'
// import Project from './Projects/Project.vue';
// import Publication from './Publication/Publication.vue';
export default {
    name:"Contents",
    components:{
        // Project,
        // Publication
    },
    methods:{
      expandedOpen(){
        EventBus.$emit("expand")
      }
    }
}
</script>

<style lang="scss">
.Contents{
  @include initializer;
  background:hsl(227, 28%, 13%);//hsl(209, 30%, 46%);
  width:50%;
  height:100%;
  overflow: scroll;
  
  &::-webkit-scrollbar{
    display: none;
  }
}
.ContentPanel{
  position: absolute;
  background:hsl(227, 28%, 13%);
  
  width:100%;
  height:100%;right:0;
}
.expand{
  width:calc(100% * 2);
}
@media screen and (max-width: 800px) {
  .Contents{
    width:100%;
    height:100%;
  }
}
</style>