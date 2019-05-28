

	  var screen = $(window).width()
      var windows = $(window).width()


   /*  var fullWidth = 500;
		var fullHeight = 450;
		var margin = {top:90, right:60, bottom:50, left:60}; */
		
    if (windows > 800){
			    var fullWidth = screen*0.5
			    var fullHeight = screen*0.4
				var margin = {top:90, right:10, bottom:50, left:60};
		    }else{
			    var fullWidth = screen*1
				var fullHeight = screen*0.85
				var margin = {top:screen*0.2, right:screen*0.2, bottom:screen*0.1, left:screen*0.2};
				
		    }


		// var fullWidth = 900;
		// var fullHeight = 600;
		// var margin = {top:90, right:10, bottom:50, left:60};  //Top, right, bottom, left

		var width = fullWidth - margin.left - margin.right;
		var height = fullHeight - margin.top - margin.bottom;

		var svg = d3.select("#tu")
					.append("svg") 
					.attr("width", fullWidth)
					.attr("height", fullHeight)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
					.attr("width", width)
					.attr("height", height);
					
		
						
		var xScale = d3.scaleLinear().range([ 0, width]);//数据映射到的 范围是0到宽度
		var yScale = d3.scaleLinear().range([ height, 0 ]); //注意这个是反的，因为是从左上角是（0.0）原点
		//因为y轴的0在最下面，而(0,0)在左上角还记得吗？，因此要[height,0]


		//  轴 API https://github.com/d3/d3-axis
		//  axisBottom：axis with tick bottom-oriented，建立刻度线向下的轴，用xScale这个比例尺，保留15个tick(刻度线)   
		var xAxis = d3.axisBottom(xScale).ticks(10).tickFormat(function(d) {return d + "万￥";});
		var yAxis = d3.axisLeft(yScale)
	    var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");










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



