<template>
  <div class="about">
    <h1>「ねこやすみ」では、Twitter上のねこ情報を猫種ごとにお届けします</h1>
    <p>
      仕事やバイトで疲れているあなた。猫好きなあなた。
    </p>
    <p>
      ねこのツイートでも見て、ちょっと癒されていきませんか？？
    </p>

    <h2>↓さっそく癒される↓</h2>

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
</template>

<style scoped>
h1 {
  margin: 50px 50px 50px;
  font-size: 2.5rem;
}
p {
  margin: 10px 10px 10px;
  font-size: 2rem;
    text-decoration: none;
}
h2 {
  margin: 70px 50px 50px;
  font-size: 2.5rem;
}
img {
  width: 20rem;
  height: auto;
}
.cat_img {
    margin-top: 40px;
    margin-bottom: 40px;
}

</style>
