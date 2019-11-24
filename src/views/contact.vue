<template>
  <div class="contact">
    <h2>お問い合わせ</h2>

<form id="contact">
    <label for="name">お名前（必須）</label>
    <input id="name" type="text" name="entry.1178854972" placeholder="" required>
    <label for="email">メールアドレス</label>
    <input id="email" type="text" name="entry.1184809125" placeholder="example@mail.co.jp">
    <label for="msg">内容（必須）</label>
    <textarea id="msg" name="entry.197610114" placeholder="質問や要望などありましたら、気軽にお問い合わせください。" required></textarea>
  <input type="submit" name="button" value="送信"/>
</form>

 <div id="submitted">
    <p>
      内容を送信しました<br>
      ご協力ありがとうございます！
    </p>
  </div>
  <div id="error">
    <p>
      送信に失敗しました<br>
      お手数ですがもう一度入力をお願いします。
    </p>
  </div>

  </div>
    
</template>

<style scoped>
h2 {
  margin: 70px 50px 50px;
  font-size: 2.5rem;
}
p {
  margin: 100px 10px 100px;
  font-size: 2rem;
  line-height: 1.8;
}
label {
  margin: 10px 10px 10px;
  font-size: 2rem;
  line-height: 1.8;
  display: block;
}
input[type='text']{
  font-family: 'mushin';
  font-size: 1.5rem;
  width:80%;
  max-width: 400px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
textarea{
  font-family: 'mushin';
  font-size: 1.5rem;
  width: 80%;
  /* max-width: 400px; */
  height: 300px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
input[type='submit']{
  font-family: 'mushin';
  font-size: 2rem;
  border: none;
  display: block;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  background-color: #2c3e50;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin: 30px auto;
}

</style>
<script>
import $ from 'jquery' 
export default {
mounted() {
  $(document).ready( function(){
     $("#submitted").hide();
     $("#error").hide();
     $("#contact").submit(function (event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var msg = $("#msg").val();
 
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-Epo4oTZlq6IjJQo6UYf6UwN4RotlhpZDC-t7Qd7TQdixJA/formResponse",
            data: {
                "entry.1178854972": name,
                "entry.1184809125": email,
                "entry.197610114": msg
            },
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    //送信に成功したときの処理
                    $("#contact").hide();
                    $("#submitted").show();
                },
                200: function () {
                    //送信に失敗したときの処理
                    $("#error").hide();
                }
            }
        });
        event.preventDefault();
    });
  });
}
}    
</script>