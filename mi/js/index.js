var tabs = document.getElementById("tabs").getElementsByTagName("li");
var lists = document.getElementById("lists").getElementsByTagName("ul");
console.log(lists);
for( var i=0;i<tabs.length;i++){
    tabs[i].onclick = onshows;
}

function onshows(){
    for(var i=0;i<tabs.length;i++){
        if(tabs[i] === this){
            tabs[i].className = "active";
            lists[i].className = "clearfix active";
        }
        else {
            tabs[i].className= "" ;
            lists[i].className = "clearfix";
        }
    }
}
var seckillNav = document.getElementById(seckillNav);

window.onscoll = function() {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;/*解决不同浏览器兼容问题*/
    console.log(scrollTop);
    if(scrollTop >=260)
        seckillNav.className = "seckill-nav seckill-navfixed";
    else {
        seckillNav.className = "seckill-nav";
    }
}