function jia() {
        var input = document.querySelector(".input-a");
        var jia = document.querySelector(".jia");
        var jian = document.querySelector(".jian");
    
    
        if (input.value == "" || isNaN(input.value))
            return false;
        input.value++;
    }
    
    function jian() {
        var input = document.querySelector(".input-a");
        if (input.value == "" || isNaN(input.value))
            return false;
        input.value--;
    }


//放大镜
function Magnifier(){
    this.small_ele=document.querySelector(".cct");
    this.mask_ele=document.querySelector(".moveBox");
    this.big_ele=document.querySelector(".big");
    this.container_ele=document.querySelector(".nr-l");
    this.prev_ele = document.querySelector(".prev_btn");
    this.next_ele = document.querySelector(".next_btn");
    this.big_img_ele =this.big_ele.children[0];
    this.small_img_ele = this.small_ele.children[1];
    this.list_img_ele = document.querySelectorAll(".tplb li img");				 
    this.bindEvent();
    this.init();
    this.index=0

}
Magnifier.prototype.bindEvent = function(){
    //保留外面的this ，放进事件处理函数中
    var _this =this;
    //给small绑定事件
    this.small_ele.onmouseover = function(){
        _this.toggle("block");
    }
    this.small_ele.onmouseout=function(){
          _this.toggle("none");
    }
    //给small添加onmousemove
    this.small_ele.onmousemove = function( evt ){
        //获取位置信息
      
        var e = evt || event;
       
            var x = e.clientX ; 
            var y = e.clientY ;  
           
        //DOM操作
        _this.maskMove( x , y );
       
    }
    for(var i = 0; i < this.list_img_ele.length; i ++){
        this.list_img_ele[i].onclick = function(){
            _this.changeImg( "" , "" , this);
        }
    }
    this.prev_ele.onclick=function(evt){
        var e = evt || event;
        e.stopPropagation();
         //点击的时候递减
         _this.index--;
         if( _this.index <0){
             //如果小于0的花  那么就让他跳到第二张图片
            _this.index = _this.list_img_ele.length-1;
         }
      
        //dom 操作
        var big_src=_this.list_img_ele[_this.index].getAttribute("data-big");
        var small_src=_this.list_img_ele[_this.index].getAttribute("data-small");
       // console.log(_this.list_img_ele[_this.index])

        _this.changeImg(big_src,small_src,_this.list_img_ele[_this.index]);

       }
   this.next_ele.onclick=function(){
    _this.index++;
   
     if( _this.index >4){
       _this.index=0;
     }
  
    //dom 操作
    var big_src=_this.list_img_ele[_this.index].getAttribute("data-big");
  //  console.log(_this.list_img_ele[_this.index])
    var small_src=_this.list_img_ele[_this.index].getAttribute("data-small");
    _this.changeImg(big_src,small_src,_this.list_img_ele[_this.index]);

}

    }
   
   

    //显示隐藏功能
    Magnifier.prototype.toggle =function(type){
        this.mask_ele.style.display =type;
        this.big_ele.style.display=type;

    }
    //获取small的宽高
    Magnifier.prototype.init  = function(){
        this.small_size = parseInt(getComputedStyle(this.small_ele).width)
         this.big_img_size =parseInt(getComputedStyle(this.big_img_ele).width);
         this.big_size =parseInt(getComputedStyle(this.big_ele).width);
         this.mask_size = this.small_size / this.big_img_size * this.big_size;
        //给mask赋值
        this.mask_ele.style.width=this.mask_size+"px";
        this.mask_ele.style.height=this.mask_size+"px";
        //根据浏览器可视窗口的偏移
        this.offset_left = this.container_ele.offsetLeft;
        this.offset_top = this.container_ele.offsetTop;

    }
    Magnifier.prototype.maskMove = function( x , y ){
        var _x = this.offset_top - document.documentElement.scrollTop;
          //处理 x,y
          var _left =x-this.mask_size/2-this.offset_left;
          var _top =y - _x - this.mask_size/2;
        //   console.log(_left,x,this.mask_size,this.offset_left)
         //边界检测
         //最小值
         _left = _left<0? 0:_left;
         _top =_top<0? 0:_top;
         //最大值
         var max =this.small_size-this.mask_size;
         _left =_left>max? max:_left ;
         _top =_top>max? max:_top ;

         this.mask_ele.style.left = _left + "px";
         this.mask_ele.style.top  = _top + "px";

         //计算百分比
         //_left_prop  遮罩层移动百分比
         var _left_prop =_left/(this.small_size-this.mask_size);
         var _top_prop =_top/(this.small_size-this.mask_size);
         this.bigImageMove(_left_prop,_top_prop);  
    }
    Magnifier.prototype.bigImageMove = function( _left_prop , _top_prop){
        this.big_img_ele.style.left = _left_prop * ( this.big_size - this.big_img_size) + "px";
        this.big_img_ele.style.top  = _top_prop * ( this.big_size - this.big_img_size) + "px";
        
  }
  Magnifier.prototype.changeImg=function( big ,small, ele){
      this.big_img_ele.src=big;
      console.log( this.big_img_ele.src)
      this.small_img_ele.src=small;
      console.log(this.small_img_ele.src)
      for(  var i=0; i<this.list_img_ele.length; i++){
            this.list_img_ele[i].className="";
      }
      ele.className="active";
  }


   
    new Magnifier();

