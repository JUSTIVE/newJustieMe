<template>
  <div class="Pangea">
    <Profile/>
      <Contents/>
  </div>
</template>

<script>
import Profile from './Profile/Profile.vue';
import Contents from './Contents/Contents.vue';
export default {
  name: 'Pangea',
  components:{
    Profile,
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
  width:80vw;
  height:80vh;
  display:flex;
  border-radius:var(--global-radius);
  margin:10vh 10vw;
  padding:10px 0px 0px 10px;
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
