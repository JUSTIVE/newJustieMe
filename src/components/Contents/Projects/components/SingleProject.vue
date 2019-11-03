<template>
    <a :href="Project.url" style="text-decoration:none;">
    <div class="SingleProject" >
        <div class="ProjectIcon"></div>
        <div class="ProjectText">
            <div class="ProjectName">{{Project.name}}</div>
            <div class="ProjectDescription">{{Project.description}}</div>
        </div>
    </div>
    </a>
</template>

<script>
export default {
    name:"SingleProject",
    props:{
        Project:Object
    }
}
</script>

<style lang="scss">
.SingleProject{
    display:inline-flex;
    flex:1;
    border-radius: 16px;
    padding:8px;
    transition:all .3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.12);
    }
    
}

.ProjectText{
    display:flex;
    flex-direction:column;
    font-size:14px;
    justify-content:space-around;
    padding-left:8px;
    color:var(--invertable-text);
    .ProjectName{
        font-weight:bold;
    }
}
.ProjectIcon{
    box-shadow: 0 2px 4px var(--accent-alpha), 0 1px 3px var(--accent-alpha);
    width:48px;
    height:48px;
    border-radius: 16px;
    background:var(--accent);
    transition:all .3s cubic-bezier(.25,.8,.25,1);
    &:hover{
        box-shadow: 0 8px 19px var(--accent-alpha), 0 7px 6px var(--accent-alpha);
    }
}
</style>