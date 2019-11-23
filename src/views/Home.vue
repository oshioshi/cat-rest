<template>
  <div class="home">
    <h2>「ねこやすみ」では、Twitter上のねこ情報を猫種ごとにお届けします</h2>
    
    <h3>さっそく癒される↓</h3>

    <div class="catList">
      <router-link to="/ragdoll">
      <div class="cat_img">
        <img alt="cat_ragdoll" src="../assets/cat_ragdoll.png">
        <p>ラグドール</p>
      </div>
      </router-link>

      <router-link to="/munchkin">
      <div class="cat_img">
      <img alt="cat_munchkin" src="../assets/cat_munchkin.png">
      <p>マンチカン</p>
      </div>
      </router-link>

      <router-link to="/scottish">
      <div class="cat_img">
      <img alt="cat_scottish_fold" src="../assets/cat_scottish_fold.png">
      <p>スコティッシュフォールド</p>
      </div>
      </router-link>

    </div>
    <div class="catList">

      <router-link to="/american">
      <div class="cat_img">
      <img alt="cat_american_shorthair" src="../assets/cat_american_shorthair.png">
      <p>アメリカンショートヘア</p>
      </div>
      </router-link>
  
      <router-link to="/exotic">
      <div class="cat_img">
      <img alt="cat_exotic_shorthair" src="../assets/cat_exotic_shorthair.png">
      <p>エキゾチックショートヘア</p>
      </div>
      </router-link>
   
      <router-link to="/russian">
      <div class="cat_img">
      <img alt="cat_russian_blue" src="../assets/cat_russian_blue.png">
      <p>ロシアンブルー</p>
      </div>
      </router-link>

    </div>
    <div class="catList">

      <router-link to="/norwegian">
      <div class="cat_img">
      <img alt="cat_norwegian_forest_cat" src="../assets/cat_norwegian_forest_cat.png">
      <p>ノルウェージャンフォレストキャット</p>
      </div>
      </router-link>

      <router-link to="/bengal">
      <div class="cat_img">
      <img alt="cat_bengal" src="../assets/cat_bengal.png">
      <p>ベンガル</p>
      </div>
      </router-link>

      <router-link to="/maine">
      <div class="cat_img">
      <img alt="cat_maine_coon" src="../assets/cat_maine_coon.png">
      <p>メインクーン</p>
      </div>
      </router-link>

    </div>
    <div class="catList">
      
      <router-link to="/kitten">
      <div class="cat_img">
      <img alt="cat_kitten" src="../assets/neko_osuwari.png">
      <p>里親募集</p>
      </div>
      </router-link>

    </div>
    
  
  </div>
</template>

<style scoped>
h2 {
  margin: 70px 50px 50px;
  font-size: 2.5rem;
}
p {
  margin: 10px 10px 10px;
  font-size: 2rem;
  
}
a {
  text-decoration: none;
}
h3 {
  margin: 70px 10px 50px;
  font-size: 3rem;
}
.catList {
  display: flex;
  justify-content:center;
}
img {
  max-height: 15rem;
  width: auto;
}
.cat_img {
    margin-top: 40px;
    margin-bottom: 40px;
    text-decoration: none;
    width: 300px;
}

@media screen and (max-width: 700px) { 
  h2 {
  margin: 50px 30px 50px;
  line-height: 1.8;
  font-size: 2rem;
}
h3 {
  margin: 70px 2px 50px;
  font-size: 2rem;
}
.catList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

</style>
