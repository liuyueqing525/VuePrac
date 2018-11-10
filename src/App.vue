<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg='<span style="color:#6cf">Hello,World</span>'/>
      <ev :age="goose" @msg="msg">
        <h3 slot='1'>我要❤加入一个东西</h3>
      </ev> 


  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ev from './components/events.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
  },
  data (){
    return {
      goose:123, 
    }
  },
  methods:{
    msg:function(){
      this.goose++;
      window.console.log(this.Vuex);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
