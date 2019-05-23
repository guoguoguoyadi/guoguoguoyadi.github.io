var w,h,ratio,ratio_h,totalFronts,front1,front2,front3,front4,front5,front6,front7,front8;
w = $(window).width();
h = $(window).height();
totalFronts = 8;

//set changing point
front1 = $("#front1").offset().top - h;//offset() 方法返回或设置匹配元素相对于文档的偏移,top 和 left两个值
front2 = $("#front2").offset().top - h;
front3 = $("#front3").offset().top - h; 
front4 = $("#front4").offset().top - h;
front5 = $("#front5").offset().top - h;
front6 = $("#front6").offset().top - h-50; 
front7 = $("#front7").offset().top - h;
front8 = $("#front8").offset().top - h;
console.log("ceshi",front1)
console.log("w",w)
console.log("h",h)

//建立一个都是0的array，多少个front多少个0
var section = [];
for(var i=0; i<=totalFronts-1; i++){
	section[i]=0
}
// console.log(section)

//保证当前front是1
function changeSection(n){
	for(var i=0; i<=totalFronts-1; i++){
		if(i==n) {
			section[i]=1;
		} else {
			section[i]=0
		}
	}
}



