<template>
  <div class="Pangea">
    <Profile/>
    <Contents/>
  </div>
</template>

<script>
import Profile from './Profile/Profile.vue';
import Contents from './Contents.vue';
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
  width:80vw;
  height:80vh;
  display:flex;
  border-radius:var(--global-radius);
  margin:10vh 10vw;
}
</style>
