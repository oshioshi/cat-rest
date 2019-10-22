<template>
  <div id="app">
    <div id="top">
      <img id="topImg" alt="topImg" src="./assets/adorable-animal-baby-256632.jpg">
    </div>
    <div id="nav">
      
      <router-link to="/">
        <img alt="Vue logo" src="./assets/logo_catRest.png">
      </router-link>
      
      <span>
      <router-link to="/topCat">ラグドール</router-link> |
      <router-link to="/about">マンチカン</router-link> |
      <router-link to="/about">スコティッシュフォールド</router-link> |
      <router-link to="/about">ノルウェージャンフォレストキャット</router-link> |
      <router-link to="/about">メインクーン</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  margin:0px;
}

#top {
  height: 80vh;
}

#topImg {
    width: 100vw;
    height: 80vh;
    object-fit: cover;
    object-position: 0% 75%;
}
#nav {
  background-color: #bbe0d9;
  width: 100vw;
  height: 20vh;
  padding: 0px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
