!function(t){function e(n){if(i[n])return i[n].exports;var h=i[n]={i:n,l:!1,exports:{}};return t[n].call(h.exports,h,h.exports,e),h.l=!0,h.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var h in t)e.d(n,h,function(e){return t[e]}.bind(null,h));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(t,e,i){function n(){r.clearRect(0,0,h.width,h.height),f>d.length-1?(s.render(),alert("終了です"),location.reload()):(s.render(),a.render(),o.render(),g.render(text=d[f]),f++)}i(1);var h=document.getElementById("myCanvas"),r=h.getContext("2d"),s=new function(){this.x=0,this.y=0,this.width=h.width,this.height=h.height,this.loadImage=function(){this.image=new Image,this.image.src="images/platform_b.jpg",this.image.onload=u},this.render=function(){r.drawImage(this.image,this.x,this.y,this.width,this.height)}},a=new function(){this.y=0,this.loadImage=function(){this.image=new Image,this.image.src="images/seinen.png",this.image.onload=u},this.render=function(){this.aspect=this.image.width/this.image.height,this.width=h.height*this.aspect,this.height=h.height,this.x=h.width/2-this.width/2,r.drawImage(this.image,this.x,this.y,this.width,this.height)}},o=new function(){this.x=0,this.loadImage=function(){this.image=new Image,this.image.src="images/message_box.png",this.image.onload=u},this.render=function(){this.aspect=this.image.width/this.image.height,this.width=h.width,this.height=h.height/this.aspect,this.marginBottom=20,this.y=h.height-this.height-this.marginBottom,r.drawImage(this.image,this.x,this.y,this.width,this.height)}},g=new function(){this.render=function(){for(var t=o.width-40,e="",i=text.split(""),n=0,h=0;h<i.length;h++){e+=i[h],r.measureText(e).width>t&&(r.fillText(e,10,o.y+n+33),n+=20,e="")}r.fillStyle="#fff",r.font="20px serif",r.textAlign="left",r.fillText(e,10,o.y+n+33)}},d=["私の先輩が外国に行った。","言葉が出来ないので、「朝の6時に起こしてください」","という簡単なことが言えない。","そこでまず、腕をパタパタさせて飛ぶまねをし、コケコッコーと鳴いた。","それから指を使って、「６」を何度も見せた。","そうしたらボーイが「分かった、分かった」というふうにニコニコと大きくうなずいて、向こうに行った。","しばらくしたら、ゆで卵を6個持ってきた。"],u=function(t,e){var i=0;return function(){3==++i&&n()}}();s.loadImage(),a.loadImage(),o.loadImage();var f=0;h.addEventListener("click",(function(){n()}))},function(){}]);
//# sourceMappingURL=app.js.map