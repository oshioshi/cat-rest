<template>
  <div id="app">
    <div id="top">
      <img id="topImg" alt="topImg" src="./assets/adorable-animal-baby-256632.jpg">
      <p id="topMsg1">
      仕事やバイトで疲れているあなた。猫が好きなあなた。
      </p>
      <p id="topMsg2">
      ねこのツイートでも見て、ちょっと癒されていきませんか？？
      </p>
      <div class="nav">
      
      <router-link to="/">
        <img class="logoImg" alt="ねこやすみ" src="./assets/logo_catRest.png">
      </router-link>
      
      <span class="menuPc">
      <router-link class="menuitem" to="/ragdoll">
        <img class="menu_cat" alt="cat_ragdoll" src="./assets/cat_ragdoll.png">
      </router-link>
      <router-link class="menuitem" to="/munchkin">
        <img class="menu_cat" alt="cat_munchkin" src="./assets/cat_munchkin.png">
      </router-link>
      <router-link class="menuitem" to="/scottish">
        <img class="menu_cat" alt="cat_scottish_fold" src="./assets/cat_scottish_fold.png">
      </router-link>
      <router-link class="menuitem" to="/american">
        <img class="menu_cat" alt="cat_american_shorthair" src="./assets/cat_american_shorthair.png">
      </router-link>
      <router-link class="menuitem" to="/exotic">
        <img class="menu_cat" alt="cat_exotic_shorthair" src="./assets/cat_exotic_shorthair.png">
      </router-link>
      <router-link class="menuitem" to="/russian">
        <img class="menu_cat" alt="cat_russian_blue" src="./assets/cat_russian_blue.png">
      </router-link>
      <router-link class="menuitem" to="/norwegian">
        <img class="menu_cat" alt="cat_norwegian_forest_cat" src="./assets/cat_norwegian_forest_cat.png">
      </router-link>
      <router-link class="menuitem" to="/bengal">
        <img class="menu_cat" alt="cat_bengal" src="./assets/cat_bengal.png">
      </router-link>
      <router-link class="menuitem" to="/maine">
        <img class="menu_cat" alt="cat_maine_coon" src="./assets/cat_maine_coon.png">
      </router-link>
      <router-link class="menuitem" to="/kitten">
        <img class="menu_cat" alt="cat_kitten" src="./assets/neko_osuwari.png">
      </router-link>
      </span>

      <div class="menu-trigger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

      <div class="menuSp hiddenMenu">
        <ul class="menuUl">
          <li class="menuli"><router-link class="menuitem" to="/ragdoll">ラグドール</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/munchkin">マンチカン</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/scottish">スコティッシュフォールド</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/american">アメリカンショートヘア</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/exotic">エキゾチックショートヘア</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/russian">ロシアンブルー</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/norwegian">ノルウェージャンフォレストキャット</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/bengal">ベンガル</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/maine">メインクーン</router-link></li>
          <li class="menuli"><router-link class="menuitem" to="/kitten">里親募集</router-link></li>
        </ul>
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
  color: #2c3e50;
}

body {
  margin:0px;
}

.menu_cat {
  max-height: 10vh;
  width: auto;
}

.menuUl {
  padding: 0px;
  margin: 0px;
  list-style: none;
}

.menuli {
  padding: 10px;
  
}

#top {
  height: 100vh;
  background-color: #55c7b3;
  position: relative;
}

#topMsg1 {
  position: absolute;
  top: 1vh;
  left: 3vw;
  font-size: 2.5rem;
  max-width: 70vw;
  text-align: left;
  /* transform: rotate(-2deg); */
}

#topMsg2 {
  position: absolute;
  top: 70vh;
  left: 20vw;
  font-size: 2.5rem;
  text-align: left;
  /* transform: rotate(2deg); */
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
  font-size: 28px;
  text-decoration: none;
}

.menuSp {
  width: 100%;
  background-color: #56c7b2;
  opacity: 0.95;
  transition:0.3s all ease 0s;
  z-index: 100;
  height: 100vh;
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
.contact div{
  margin-bottom: 10px;
}

.fixed{
    position: fixed;
    top: 0;
    z-index: 100;
}

.fixedMenu {
    position: fixed;
    top: 10vh;
}

.hiddenMenu {
  opacity: 0;
  visibility: hidden;
  transition:0.3s all ease 0s;
  z-index: -10;
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

p.bodyMsg{
  margin: 10px 10px 10px;
  font-size: 1.3rem;  
  line-height: 1.8;
}

@media screen and (min-width: 1031px) { 
  .menu-trigger{
    display: none;
  }

}
@media screen and (max-width: 1030px) { 
  .menuPc {
  display:none; 
  }

}

@media screen and (max-width: 700px) { 
  #topImg {
      object-position: 15% 0%;
  }  
  #topMsg1 {
  top: 1vh;
  left: 3vw;
  font-size: 2rem;
  max-width: 70vw;
  text-align: left;
  /* transform: rotate(-2deg); */
}
#topMsg2 {
  top: 60vh;
  left: 20vw;
  font-size: 2rem;
  text-align: left;
  /* transform: rotate(2deg); */
}

}
</style>
<script>
import $ from 'jquery' 
export default {
mounted() {
  $('.menu-trigger').click(function() {
    $(this).toggleClass('active');
    $('.menuSp').toggleClass('hiddenMenu'); 
    });
  $('.menuSp .menuitem').click(function() {
    $('.menu-trigger').toggleClass('active');
    $('.menuSp').toggleClass('hiddenMenu'); 
  });
  $(window).on('scroll',function(){     
      if($(window).scrollTop() > $('#topImg').height()){
          $('.nav').addClass('fixed');   
          $('.menuSp').addClass('fixedMenu');   
      }
      else{
          $('.nav').removeClass('fixed');   
          $('.menuSp').removeClass('fixedMenu');   
      }
  });
  $(document).ready( function(){
    $('.logoImg').trigger('click');
  });
}
}    
</script>