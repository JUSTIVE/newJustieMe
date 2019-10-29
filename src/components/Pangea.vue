<template>
  <div class="Pangea">
    <Profile/>
  </div>
</template>

<script>
import Profile from './Profile/Profile.vue';
export default {
  name: 'Pangea',
  components:{
    Profile
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Pangea{
  width:80vw;
  height:80vh;
  border-radius:var(--global-radius);
  margin:10vh 10vw;
}
</style>
