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
// import Careers from './Profile/Careers/Careers.vue';
// import ArtArea from './ArtArea/ArtArea.vue';
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
  // position: absolute;
  width:70vw;
  height:70vh;
  margin:15vh 15vw;
  display:flex;
  border-radius:var(--global-radius);
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
