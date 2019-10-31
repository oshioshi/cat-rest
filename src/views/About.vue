<template>
  <div class="about">
    <h2>「ねこやすみ」では、Twitter上のねこ情報を猫種ごとにお届けします</h2>
    
    <h3>↓さっそく癒される↓</h3>

    <div id="catList">
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
#catList {
  display: flex;
  justify-content:space-around;
}
img {
  max-height: 20rem;
  width: auto;
}
.cat_img {
    margin-top: 40px;
    margin-bottom: 40px;
    text-decoration: none;
}

@media screen and (max-width: 700px) { 
  h2 {
  margin: 50px 30px 50px;
  line-height: 1.8;
  font-size: 2rem;
}
h3 {
  margin: 70px 10px 50px;
  font-size: 2.4rem;
}
#catList {
  display: flex;
  flex-direction: column;
  align-items: center;
}
}

</style>
