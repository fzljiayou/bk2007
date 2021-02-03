// const { logError } = require("gulp-sass");

var input_name=$("#username");
var user_name = false;
input_name.blur (function(){
      user_name =false;
      var phone_num=/^1\d{10}/;
      var user_value=input_name.val();
    var tip=$("#tip1");
    if(phone_num.test(user_value)){
          user_name = true;
      validate_result[0].pass = true;
          tip.css({
                display : "block",
                color :"orange"
          });
          tip.html("恭喜验证成功，您可以根据此手机号登录或找回密码");
    }else{
      validate_result[0].pass = false;
      tip.html("格式不正确");
      tip.css({
            display : "block",
            color :"orange"
      });
    }
})


//密码
var input_pass_ele=document.querySelector("#password");

input_pass_ele.oninput= input_pass_ele.onblur=function(evt){
      validate_result[1].pass = true;
     var e=evt||event;
     var pass_value=this.value;
     var tip = this.nextElementSibling;
     if(pass_value.length<=5){
      
            tip.innerHTML="密码强度低，请将密码设置位8-20位，并且有字母，数字和符号两种以上组合";
            tip.style.color="red";
            tip.style.display="block"
            return false;
     }

  var strength = 0;
      if( /\d/.test(pass_value) ){
            strength ++;
      }
      if( /[a-z]/i.test(pass_value) ){
            strength ++;
      }
      if( /[\!\@\#\$\^\&\*\(\)\-\_]/.test( pass_value ) ){
            strength ++;
      }

      switch(strength){
            case 1 : 
                 
                  tip.innerHTML = "密码强度过低，请使用数字，字母和特殊符号组合的密码";
                  tip.style.color = "red";
                  break;
            case 2 : 
                  
                  tip.innerHTML = "密码有被盗风险，建议增加密码强度";
                  tip.style.color = "orange";
                  break;
            case 3 : 
                
                  tip.innerHTML = "密码强度优秀";
                  tip.style.color = "green";
                  break;
      }
    if(e.type === "blur" && strength >= 2 && pass_value.length >=5 && pass_value.length <= 20){
            tip.innerHTML = "建议使用字母、数字和符号两种及以上的组合，8-20个字符";
            tip.style.display = "none";
            validate_result[1].pass = false;
      }
}
// 确认密码
var cfpassword = false;
 var  input_cfpass_ele=$("#password2");
 input_cfpass_ele.blur (function(){
      validate_result[2].pass = false;
     var tip=$("#tip2");
     if($(this).val() === $(input_pass_ele).val()){
           cfpassword = true;
           tip.html("密码验证成功");
         validate_result[2].pass = true;
      tip.css({
            color : "green",
            display : "block"
      })
     }else{
           cfpassword = false;
           tip.html("两次输入的密码不一致");
           tip.css({
                 color : "red"
           })
     }
 })


 var register_btn=document.querySelector(".register-btn");
 var validate_result = [
      {
        ele : input_name,
        pass : false
      },
      {
            ele : input_pass_ele,
            pass : false
          },
          {
            ele : input_cfpass_ele,
            pass : false
          }   
    ]

    register_btn.onclick = function(){

      // 遍历表单验证列表;
      for(var i = 0 ; i < validate_result.length ; i ++){
        // 查看是不是有没有通过验证的元素，如果有就终止程序执行; 
        if( !validate_result[i].pass ){

          validate_result[i].ele.focus();
          return false;
          // 应该终止程序执行; 
        }
      }
}



var register_btn=$(".register-btn");
  var username_ipt=$("#username");
  var password_ipt = $("#password");
  register_btn.click(function(){
    //点击注册的收获取用户名数据和密码数据
    var username_value =username_ipt.val();
    var password_value=password_ipt.val();
    if(user_name && cfpassword){
      $.ajax({
                        url: "http://localhost/server/sign.php",
                        dataType: "json",
                        data: {
                            username: username_value,
                            password: password_value,
                            type: "register"
                        }
                    })
                    .then(function (res) {
                  console.log(res.type);
                        if (res.type === "success") {
                            alert("恭喜注册成功!");
                            // cookie("username", username_value);
                            // cookie("password", password_value);
                            setTimeout(function () {
                                location.href = "./dl.html";
                              }, 10)
                        } else {
                            alert("用户名重复!");
                        }
                
                    })
                  }
            
             });
      
   


// var register_btn = document.querySelector(".regBtn");
// var username_ipt = document.querySelector(".nickName");
// var password_ipt = document.querySelector(".password_r");
// register_btn.onclick = function () {
//     var username_value = username_ipt.value;
//     var password_value = password_ipt.value;
//     console.log(username_value,password_value);
//     $.ajax({
//             url: "http://127.0.0.1/server/zhuce.php",
//             dataType: "json",
//             data: {
//                 username: username_value,
//                 password: password_value,
//                 type: "register"
//             }, 
//         })
//         .then(function (res) {
//             console.log(res);
//             if (res.type === "success") {
//                 alert("恭喜注册成功!");
//                 // cookie("username", username_value);
//                 // cookie("password", password_value);
//                 setTimeout(function () {
//                     location.href = "../index.html";
//                   }, 10)
//             } else {
//                 alert("用户名重复!");
//             }
//     
//         })
// };


  