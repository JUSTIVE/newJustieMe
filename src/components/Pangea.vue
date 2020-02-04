<template>
  <div class="Pangea">
    
      <Profile/>
      <!-- <Careers/> -->
      <!-- <ArtArea/> -->
      <Contents/>
      <ContentPanel/>
  </div>
</template>

<script>
import Profile from './Profile/Profile.vue';
import Contents from './Contents/Contents.vue';
import ContentPanel from './Contents/ContentPanel.vue';
export default {
  name: 'Pangea',
  components:{
    Profile,
    // Careers,
    // ArtArea,
    Contents,
    ContentPanel
  },
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.Pangea{
  @include initializer;
  @include Card;
  width:70vw;
  height:70vh;
  margin:15vh 15vw;
  display:flex;
  border-radius:var(--global-radius);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
@media screen and (max-width: 800px) {
  .Pangea{
    flex-direction:column;
    padding:0px;
    width:100%;
    height: 100%;
    margin:0px;
    border-radius:0px;
  }
}
</style>
