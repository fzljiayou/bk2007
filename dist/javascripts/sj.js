


var container=document.querySelector("#cp1 .cp-r")
//map遍历渲染数据
var html =data.map(function(item){
    return ` 
      <a href="${item.dizhi}">   
    <div class="cp-r1">
    <img src="${ item.image}" alt="">
    <h4>${ item.name}</h4>
     <a href="">${ item.configure}</a>
     <p>${ item.Price}</p>
</div>
    <a>
    `;
}).join("");
//如果想要想container之中放入字符串，那么我们需要使用属性innHTML进行赋值
container.innerHTML = html;

//台式机
var container=document.querySelector("#cp2 .cp-r")
//map遍历渲染数据
var html =date.map(function(item){
    return `    
    <div class="cp-r1">
    <img src="${ item.image}" alt="">
    <h4>${ item.name}</h4>
     <a href="">${ item.configure}</a>
     <p>${ item.Price}</p>
</div>

    `;
}).join("");
//如果想要想container之中放入字符串，那么我们需要使用属性innHTML进行赋值
container.innerHTML = html;

//ThinkPad电脑
var container=document.querySelector("#cp3 .cp-r")
//map遍历渲染数据
var html =datc.map(function(item){
    return `    
    <div class="cp-r1">
    <img src="${ item.image}" alt="">
    <h4>${ item.name}</h4>
     <a href="">${ item.configure}</a>
     <p>${ item.Price}</p>
</div>

    `;
}).join("");
//如果想要想container之中放入字符串，那么我们需要使用属性innHTML进行赋值
container.innerHTML = html;

//手机配件
var container=document.querySelector("#cp4 .cp-r")
//map遍历渲染数据
var html =datd.map(function(item){
    return `    
    <div class="cp-r1">
    <img src="${ item.image}" alt="">
    <h4>${ item.name}</h4>
     <a href="">${ item.configure}</a>
     <p>${ item.Price}</p>
</div>

    `;
}).join("");
//如果想要想container之中放入字符串，那么我们需要使用属性innHTML进行赋值
container.innerHTML = html;

//平板电脑
var container=document.querySelector("#cp5 .cp-r")
//map遍历渲染数据
var html =datf.map(function(item){
    return `    
    <div class="cp-r1">
    <img src="${ item.image}" alt="">
    <h4>${ item.name}</h4>
     <a href="">${ item.configure}</a>
     <p>${ item.Price}</p>
</div>

    `;
}).join("");

//如果想要想container之中放入字符串，那么我们需要使用属性innHTML进行赋值
container.innerHTML = html;

// 回到顶部
hui.onclick=function(){
    document.body.scrollTop=document.documentElement.scrollTop = 0;
//     scrollTo({
//         top: 0, 
//         behavior: "smooth" 
//   })
} 
// //侧边栏消失
onscroll=function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
       if(scrollTop>250){
           you.style.display="block";
       }else{
             you.style.display="none";
       }
       
 }


//  document.onscroll=function(){
//       var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
//          if(scrollTop>100){
//              xs.style.display="block";
//          }else{
//             xs.style.display="none";
//          }
//    }
  
//楼梯特效


class Stairs{
      constructor(){
            this.lis = document.querySelectorAll("#stairs li");
            this.cps = document.querySelectorAll(".cp");
            this.wz1=document.querySelector("#stairs li .a1");
            this.wz2=document.querySelector("#stairs li .a2")
            this.init();
            this.bindEvent();
      }
      init(){
            for(let i = 0 ; i < this.cps.length ; i ++){
                  console.log(this.cps[i].offsetTop , i);
                  // 最小值是 this.contents[i].offsetTop 
                  // 最大值是 this.contents[i + 1].offsetTop
                  if(i === this.cps.length - 1){
                        this.lis[i].setAttribute("max" , "max");
                  } else{
                        this.lis[i].setAttribute("max" , this.cps[i + 1].offsetTop);
                  }
                  this.lis[i].setAttribute("min" , this.cps[i].offsetTop);
            }
      }
      bindEvent(){
          let _this = this;
          window.addEventListener("scroll" , function(){
                // 获取scrollTop ; 
                let st = document.body.scrollTop || document.documentElement.scrollTop;
                // 
                _this.changeStairs( st );
          })
          for(let i = 0 ; i < this.lis.length ; i ++){
                this.lis[i].onclick = function(){
                      // this  => 找到this的min值即可; 
                      scrollTo(0,this.getAttribute("min"));
                }
          }
  
    }
    changeStairs( st ){
      // st 的范围都在li之中， 所以我们使用 st 和li里面的数据进行对; 
      // 判定最后一层楼; 
      for(let i = 0 ; i < this.lis.length ; i ++){
            //清空类名
            this.lis[i].className = "";
      }
      if(st < this.lis[0].getAttribute("min")){
            this.lis[0].className = "active";
            return false;
      }
      
      if( st > this.lis[this.lis.length - 1].getAttribute("min")){
            // DOM操作 :
            this.lis[this.lis.length - 1].className = "active";
            return false;
      }

      let k;
      //判定楼层
      for( k = 0 ; k < this.lis.length - 1 ; k ++){
            if( st >= this.lis[k].getAttribute("min") && st < this.lis[k].getAttribute("max")){
                  break;
            }
      }
      // k 就是我们当前楼层下标; 
      this.lis[k].className = "active";
     
     onscroll=function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
       if(scrollTop>400){
           xs.style.display="block";
       }else{
           xs.style.display="none";
       }
 } 
  }
  
  }
  new Stairs();

