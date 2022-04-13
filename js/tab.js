// window.onload = function(){
//     var myTab = document.getElementById("tab");    //整个div
//     var myUl = myTab.getElementsByTagName("ul")[0];//一个节点
//     var myLi = myUl.getElementsByTagName("li");    //数组
//     var myDiv = myTab.getElementsByTagName("div"); //数组

//     for(var i = 0; i<myLi.length;i++){
//         myLi[i].index = i;
//         myLi[i].onclick = function(){
//             for(var j = 0; j < myLi.length; j++){
//                 myLi[j].className="off";
//                 myDiv[j].className = "hide";
//             }
//             this.className = "on";
//             myDiv[this.index].className = "show";
//         }
//       }
//     }

window.onload = function(){
    var myTab = document.getElementById("tab");    //整个div
    var myCard = myTab.getElementsByClassName("input-card")[0];//一个节点
    var myButton = myCard.getElementsByTagName("button");    //数组
    
    for(var i = 0; i<myButton.length;i++){
        myButton[i].onclick = function(){
            for(var j = 0; j < myButton.length; j++) myButton[j].className="off";
            this.className = "on";
            switch(this.getAttribute('id')){
                case"handan": 
                    map.setZoomAndCenter(17,[121.503523,31.296425],true);//邯郸
                    map.setLimitBounds(new AMap.Bounds([121.494355,31.303068],[121.510017,31.289292]));
                    break;
                case"jiangwan":
                    map.setZoomAndCenter(18,[121.506224,31.336541],true);//江湾
                    map.setLimitBounds(new AMap.Bounds([121.49958,31.343064],[121.51357,31.328805]));
                    break;
                case"fenglin":
                    map.setZoomAndCenter(18,[121.451065,31.196498],true);//枫林
                    map.setLimitBounds(new AMap.Bounds([121.447106,31.19857],[121.454198,31.19455]));
                    break;
                case"zhangjiang":
                    map.setZoomAndCenter(17,[121.598484,31.189332],true);//张江
                    map.setLimitBounds(new AMap.Bounds([121.594589,31.192058],[121.60108,31.185762]));
                    break;
            }
        }
    }
}

function logMapInfo() {
    var limitBounds = map.getLimitBounds();
    if (limitBounds) {
      document.querySelector("#ne").innerText = limitBounds.northeast.toString();
      document.querySelector("#sw").innerText = limitBounds.southwest.toString();
    } else {
      document.querySelector("#ne").innerText = document.querySelector("#sw").innerText = "未限定";
    }
  }

  //限制地图显示范围
  function lockMapBounds() {
    var bounds = map.getBounds();
    map.setLimitBounds(bounds);
    logMapInfo();
  }
