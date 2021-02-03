var username=document.querySelector("#username");
var password =document.querySelector("#password");
var btn =document.querySelector("#btn");
btn.onclick=function(){
     var username_value=username.value;
     var password_value=password.value;
     var url="http://localhost/server/sign.php"
      url +="?username="+username_value+"&password="+password_value;
      var xhr=new XMLHttpRequest();
      xhr. open("GET",url);
      xhr.send(null);
      xhr.onload=function(){
          var data=JSON.parse(xhr.responseText);
          console.log(data);
          if(data.type === "success"){
              alert("登录成功,即将为您跳转到首页")
              location.href="./lx.html"
          }else{
              alert("账号密码不正确")
          }
      }
}


// var username=$("#username");
// var password =$("#password");
// var btn =$("#btn");

// btn.on("click" , function(){
//      var username_value=username.val();
//      var password_value=password.val();
//      console.log(username_value , password_value);
//      $.ajax({
//          url : "http://localhost/server/sign.php",
//          datatype : "json",
//          data:{
//              username : username_value,
//              password : password_value,
//              type : "login"
//          }
//      })
//      .then(function(data){
//         if(data.type === "success"){
//             alert("登录成功,即将为您跳转到首页")
//             location.href="./lx.html"
//         }else{
//             alert("账号密码不正确")
//         }
//      })
// })