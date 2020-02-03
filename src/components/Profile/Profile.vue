<template>
  <div class="Profile">
    <ArcTail/>
    <div class="ProfileContainer">
      <div class="ProfileContainerUpper">
        
        <div class="Slogan">
          FAMILIAR<br/>WITH<br/>NOVELTY
        </div>
        <br />
        <div class="intro">Hello, I'm</div>
        <div class="Name">김민상 / Kim Min Sang</div>  
        <div class="description">
          His research interests are in computer graphics, <br>physically-based modeling and simulation, android applications, and deep learning
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import ArcTail from "./Arctail.vue"
export default {
  name: "Profile",
  components:{
    ArcTail
  },
  data() {
    return {
      description: String
    };
  },
  
};
</script>

<style lang="scss">
.Profile {
  @include initializer;
  display: flex;
  height: 100%;
  width:50%;
  text-align: left;
}
.description{
  font-size: 12px;
  color:white;
}
.ProfileContainer {
  position:absolute;
  padding:48px;
  flex: 1;
  display: flex;
}
.ProfileContainerUpper{
  background: var(--invert-text);
  z-index: 999;
  flex:1;
}
.intro{
  color: var(--subtle-white);
  font-weight:bold;
}
.Slogan {
  word-break: keep-all;
  font-weight: 800;
  font-size: 64px;
  color: var(--subtle-white);
  line-height:64px;
}
.Name {
  margin-bottom: 8px;
  font-weight: bold;
  color: var(--subtle-white);
  opacity: 0.9;
  font-size: 14px; 
}
@media screen and (max-width: 800px){
  .Profile {
    height: 100%;
    width:100%;
  }
  .Slogan {
    font-size: 48px;
    line-height:48px;
  }
}

</style>