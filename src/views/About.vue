<template>
  <div class="about">
    <h2>準備中</h2>
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
