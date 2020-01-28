<template>
  <div class="Profile">
    <div class="ProfileContainer">
      <div class="ProfileContainerUpper">
        
        <div class="Slogan">
          FAMILIAR<br/>WITH<br/>NOVELTY
        </div>
        <br />
        <div class="intro">Hello, I'm</div>
        <div class="Name">김민상 / Kim Min Sang</div>  
        <div class="description">
          {{description}}
        </div>
      </div>
      
      <div class="CareerList">
        <Career
          v-for="(item, index) in CareerData"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CareerData from "./Career.json";
import Career from "./Career.vue";
export default {
  name: "Profile",
  components: {
    Career
  },
  data() {
    return {
      CareerData: Object,
      description: String
    };
  },
  created() {
    this.CareerData = CareerData.CareerData;
    this.description = CareerData.description;
    console.log(this.CareerData);
  }
};
</script>

<style lang="scss">
.Profile {
  @include initializer;
  
  display: flex;
  
  height: 45vh;
  width:100%;
  text-align: left;

}
.description{
  font-size: 12px;
  color:white;
}
.ProfileContainer {
  flex: 1;
  display: flex;
}
.ProfileContainerUpper{
  padding:48px;
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
.CareerList {
  padding:48px;
  border-radius:var(--global-radius);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}

</style>