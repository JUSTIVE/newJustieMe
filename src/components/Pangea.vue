<template>
  <div class="Pangea">
    
      <Profile/>
      <ArtArea/>
      <Contents/>
  </div>
</template>

<script>
import Profile from './Profile/Profile.vue';
import ArtArea from './ArtArea/ArtArea.vue';
import Contents from './Contents/Contents.vue';
export default {
  name: 'Pangea',
  components:{
    Profile,
    ArtArea,
    Contents
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
  width:90vw;
  height:100vh;
  display:flex;
  margin:5vw;
  flex-direction:column;
  border-radius:var(--global-radius);
  overflow: hidden;
}
@media screen and (max-width: 800px) {
  .Pangea{
    flex-direction:column;
    padding:0px;
    width:100%;
    height:100%;
    margin:0px;
    border-radius:0px;
  }
}
</style>
