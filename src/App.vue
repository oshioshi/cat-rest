<template>
  <div id="app">
    <div id="top">
      <img id="topImg" alt="topImg" src="./assets/adorable-animal-baby-256632.jpg">
      <div class="nav">
      
      <router-link to="/">
        <img class="logoImg" alt="ねこやすみ" src="./assets/logo_catRest.png">
      </router-link>
      
      <span class="menuPc">
      <router-link class="menuitem" to="/ragdoll">　ラグドール　</router-link>
      <router-link class="menuitem" to="/munchkin">　マンチカン　</router-link>
      <router-link class="menuitem" to="/scottish">　スコティッシュフォールド　</router-link>
      </span>

      <div class="menu-trigger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    </div>
    
    <main>
      <router-view/>
    </main>
   

    <footer id="footer">
      <p>
      <small>© 2019 ねこやすみ</small>
      </p>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: 'mushin';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   background-color: #f4fffd;
}

.nav a {
  font-weight: bold;
}

.nav a.router-link-exact-active {
  color: #C77556;
}

body {
  margin:0px;
}

#top {
  height: 100vh;
  background-color: #55c7b3;
}

#topImg {
    width: 100vw;
    height: 90vh;
    object-fit: cover;
    object-position: 0% 75%;
}
.logoImg {
    width: 250px;
    height: auto;
    margin: 10px;
}
.nav {
  background-color: #56c7b2;
  width: 100vw;
  height: 10vh;
  padding: 0px;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menuitem {
  color: #ffffff;
  font-size: 32px;
  text-decoration: none;
}

#footer {
  background-color: #56c7b2;
  width: 100vw;
  height: 10vh;
  padding: 0px;
  display: table-cell;
  vertical-align: middle;
}

small {
  color: #ffffff;
  font-size: 18px;
}

.fixed{
    position: fixed;
    top: 0;
}


.menu-trigger,
.menu-trigger span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.menu-trigger {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 20px;
}
.menu-trigger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;
  border-radius: 4px;
}
.menu-trigger span:nth-of-type(1) {
  top: 3px;
}
.menu-trigger span:nth-of-type(2) {
  top: 15px;
}
.menu-trigger span:nth-of-type(3) {
  bottom: 0;
}

.menu-trigger.active span:nth-of-type(1) {
  transform: translateY(12px) rotate(-45deg);
}
.menu-trigger.active span:nth-of-type(2) {
  opacity: 0;
}
.menu-trigger.active span:nth-of-type(3) {
  transform: translateY(-12px) rotate(45deg);
}
@media screen and (min-width: 701px) { 
  .menu-trigger{
    display: none;
  }

}
@media screen and (max-width: 700px) { 
  #topImg {
      object-position: 15% 0%;
  }  
  .menuPc {
  display:none; 
  }

}
</style>
<script>
import $ from 'jquery' 
export default {
mounted() {
  $('.menu-trigger').click(function() {
      $(this).toggleClass('active');
      $('.nav').toggleClass('active'); 
    });
  $(window).on('scroll',function(){     
      if($(window).scrollTop() > $('#topImg').height()){
          $('.nav').addClass('fixed');   
      }
      else{
          $('.nav').removeClass('fixed');   
      }
  });
}
}    


</script>