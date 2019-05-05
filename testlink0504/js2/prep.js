
      var screen = $(window).width()


   /*  var fullWidth = 500;
		var fullHeight = 450;
		var margin = {top:90, right:60, bottom:50, left:60}; */
		
		var fullWidth = screen*0.40
		var fullHeight = screen*0.35
		var margin = {top:screen*0.06, right:screen*0.05, bottom:screen*0.05, left:screen*0.05};
		

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
	
	    var xScale = d3.scaleLinear().range([ 0, width]);
		var yScale = d3.scaleLinear().range([ height, 0 ]); 
		var xAxis = d3.axisBottom(xScale).ticks(10);
		var yAxis = d3.axisLeft(yScale)
	    var tooltip = d3.select("body")
                        .append("div")
                        .attr("class", "tooltip");
						
		
		var svg2 = d3.select("#tu3")
					.append("svg") 
					.attr("width", fullWidth)
					.attr("height", fullHeight)
					.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
					.attr("width", width)
					.attr("height", height);
		
	    var xScale2 = d3.scaleTime().range([ 0, width]);
		var xAxis2 = d3.axisBottom(xScale2)
					  .tickFormat(function(d) {
							return  formatTime(d);
						})
					  .ticks(10);

		 var parseTime = d3.timeParse("%Y"),
            formatTime = d3.timeFormat("%Y年");
		



var w,h,ratio,ratio_h,totalFronts,front1,front2,front4,front5,front6,front7,front8,front9,front10;
w = $(window).width();
h = $(window).height();
totalFronts = 10;

//set changing point
front1 = $("#front1").offset().top+40 - h;//offset() 方法返回或设置匹配元素相对于文档的偏移,top 和 left两个值
front2 = $("#front2").offset().top+40 - h;
front4 = $("#front4").offset().top+40 - h;
front5 = $("#front5").offset().top+40 - h;
front6 = $("#front6").offset().top+40 - h;
front7 = $("#front7").offset().top+90 - h;
front8 = $("#front8").offset().top+40 - h;
front9 = $("#front9").offset().top+40 - h;
front10 = $("#front10").offset().top+40 - h;


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


//八条折线

