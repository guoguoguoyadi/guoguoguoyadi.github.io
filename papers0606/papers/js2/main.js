






function main1(){
	 // console.log("1")
	
	   
						
		d3.csv("juzhen.csv", function(data) {
                // console.log(data)
			
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));
				
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("class","juzhen");

			var circles1 =d3.selectAll(".juzhen")
			    .data(data)
			  circles
				.enter()
			    .append("circle")
			    .merge(circles1)
				.attr("cx", function(d) { 
					return xScale(+d.x); 
				})
				.attr("cy", function(d) {
					return yScale(+d.y);
				})
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
				.transition()
		        .duration(400) 
				.attr("fill","#b2b2b2") 
				.attr("r","7") 
				 
        

					svg.append("text")
					.attr("class", "title1")

				svg.select(".title1")			
					.attr("transform", "translate("+ (0.32*fullWidth) + " ," +
								(1.15*height) + ")")
					.style("text-anchor", "middle")
					.attr("fill","grey")
					.text("1个点表示约109万篇论文");	
			
			

			
		});
		
		function mouseoverFunc(d) {
          
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div></div>" 
				)}

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
};




function main2(){

	  
									
		d3.csv("juzhen.csv", function(data) {
                // console.log(data)
			
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));
				
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("class","juzhen");
			
			var circles2 = d3.selectAll(".juzhen")
					         .data(data); 
					
			 circles2.enter()
					 .append("circle")
					 .merge(circles2)		
				     .attr("cx", function(d) { 
					return xScale(+d.x); 
				})
					.attr("cy", function(d) {
						return yScale(+d.y);
					})
					.attr("r","7") 
					.on("mouseover", mouseoverFunc) 
					.on("mousemove", mousemoveFunc)
					.on("mouseout", mouseoutFunc)
					.transition()
					.duration(400) 
					.attr("fill",function(d) {
							if(d.yinyong == "1"){return "#b8904f"}
							else {return "#b2b2b2"}})
				
               circles2
					.exit()
					.transition()
					.duration(1000)
					.style("opacity", 0)
					.remove();

					svg.append("text")
					.attr("class", "title1")	
				svg.select(".title1")			
					.attr("transform", "translate("+ (0.32*fullWidth) + " ," +
								(1.15*height) + ")")
					.style("text-anchor", "middle")
					.attr("fill","grey")
					.text("1个点表示约109万篇论文");	
			
			

		});
		
   
		function mouseoverFunc(d) {
          // console.log(d);
            return tooltip
                .style("display", null) 
                .html("<div></div>" )
				}

        function mousemoveFunc(d) {
          // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
}



function main4(){
	
	 // console.log("4")
						
		d3.csv("juzhen.csv", function(data) {
                // console.log(data)
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));

			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("class","juzhen");

				var circles4 = d3.selectAll(".juzhen")
				                 .data(data); 
					
				 circles4.enter()
					.append("circle")
					.merge(circles4)		
				    .attr("cx", function(d) { 
					return xScale(+d.x); 
				})
				    .attr("cy", function(d) {
					return yScale(+d.y);
				})
			     
					.attr("r","7") 
					.on("mouseover", mouseoverFunc) 
					.on("mousemove", mousemoveFunc)
					.on("mouseout", mouseoutFunc)
					.transition()
					.duration(500) 
					.attr("fill",function(d) {
							if(d.biye == "1" && d.yinyong == "0"){return "rgba(178,178,178,1)"}
						else if(d.yinyongbiye == "1" && d.yinyong == "1"){return "#b8904f"}
						else if (d.yinyong == "1" && d.yinyongbiye == "0" ){return "rgba(184,144,79,0.2)"}
						else {return "rgba(178,178,178,0.2)"}
							})  
				
               circles4
					.exit()
					.transition()
					.duration(400)
					.style("opacity", 0)
					.remove();


					svg.append("text")
					.attr("class", "title1")
					svg.select(".title1")			
					.attr("transform", "translate("+ (0.32*fullWidth) + " ," +
								(1.15*height) + ")")
					.style("text-anchor", "middle")
					.attr("fill","grey")
					.text("1个点表示约109万篇论文");

			
			
		
		});


   
		function mouseoverFunc(d) {
          // console.log(d);
            return tooltip
                .style("display", null)
                .html("<div></div>" )
				}

        function mousemoveFunc(d) {
          // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
}

function main5(){
	  // console.log("5")
	   
						
		d3.csv("juzhen.csv", function(data) {
                // console.log(data)
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.x;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.y;
				}));

			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("class","juzhen");

				var circles5 = d3.selectAll(".juzhen")
				                 .data(data); 
								 
				//只剩4个有颜色
				 circles5.enter()
					.append("circle")
					.merge(circles5)		
				    .attr("cx", function(d) { 
					return xScale(+d.x); 
				  })
				    .attr("cy", function(d) {
					return yScale(+d.y);
				   })
					.attr("r","7") //这三段有用的，不然在此处刷新的话就不能得到预期效果
					.on("mouseover", mouseoverFunc) 
					.on("mousemove", mousemoveFunc)
					.on("mouseout", mouseoutFunc)
					.transition()
					.duration(400) 
					.attr("fill",function(d) {
							if(d.biye == "1" && d.yinyong == "0"){return "#b2b2b2"}
						else if(d.yinyongbiye == "1" && d.yinyong == "1"){return "#b8904f"}
						else if (d.yinyong == "1" && d.yinyongbiye == "0" ){return "rgba(184,144,79,0)"}
						else {return "rgba(178,178,178,0)"}
							})  
				
               circles5
					.exit()
					.transition()
					.duration(400)
					.style("opacity", 0)
					.remove();
					
		//	放大	
			circles5
				.transition()
				.delay(500)
		        .duration(400) 
				.attr("r","20") 
				.attr("cx", function(d) { 
					return xScale(+d.fangdax); 
				  })
			    .attr("cy", function(d) {
					return yScale(+d.fangday);
				   })
			
				
			//都归到同一个位置	
            circles5.transition()
					.delay(900)
					.duration(1)
					.attr("cx",function(d){
						return xScale(d.fangdax2)})
		            .attr("cy",function(d){
						return yScale(d.fangday2)
						})
					.attr("fill",function(d) {
							if(d.fangdax2 == "6.6" && d.fangday2 == "3.3"){return "#b2b2b2"}
						else if(d.fangdax == "0" ){return "rgba(184,144,79,1)"}
						else {return "rgba(184,144,79,1)"}
							})
			
			
			//颜色消失		   			
				 circles5  
					.transition()
					.delay(1000)
					.duration(500) 	
				    .attr("fill",function(d) {
							if(d.fangdax2 == "6.6" && d.fangday2 == "3.3"){return "#b2b2b2"}
						else if(d.fangdax == "0" ){return "rgba(184,144,79,1)"}
						else {return "rgba(184,144,79,1)"}
							})
							
					
		 circles5  
					.transition()
					.delay(function(d) { 
					return d.f * 40+900})
					.duration(700) 		
				    .attr("cx", function(d) { 
					return xScale(+d.x); 
				  })
				    .attr("cy", function(d) {
					return yScale(+d.y);
				   })
					.attr("r","7") 
					.attr("fill",function(d) {
							if(d.last == "1"){return "rgba(184,144,79,1)"}
						else {return "#b2b2b2"}
							})  
			svg.append("text")
					.attr("class", "title1")		
			
			svg.select(".title1")			
					.attr("transform", "translate("+ (0.32*fullWidth) + " ," +
								(1.15*height) + ")")
					.style("text-anchor", "middle")
					.attr("fill","grey")
					.text("1个点表示约4万篇论文");

		});
		
   
		function mouseoverFunc(d) {
          // console.log(d);
            return tooltip
                .style("display", null)
                .html("<div></div>" )
				}

        function mousemoveFunc(d) {
          // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        } 
	  
	
		
	  
	
}


function main6(){
	 // console.log("1")
	   

			
d3.csv("zhexian.csv", function(error, data) {
            if (error) throw error; 
       
            data.forEach(function(d){
				        return d.year = parseTime(d.year);
						return d.one1 = +d.one1;
						return d.one2 = +d.one2;
						}
			);

				xScale2.domain(d3.extent(data,function(d){
				                    return d.year}
				));
			var mymax1 = d3.max(data,function(d){
				return d.one2})

            yScale.domain([0,mymax1+15]);
								
			 var line1 = d3.line()
			                    .curve(d3.curveCardinal)
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.one1)});
			 var line2 = d3.line()
			                    .curve(d3.curveCardinal) 
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.one2)});
									
		
            

            // Line:
			  svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line1")
				
			svg2.select(".line1")
				.transition()
				.delay(function(d, i) { //delay: just...delay,延迟
					return i * 100;
				})
				.duration(1000)	
                .attr("d", line1)  // line is a function that will operate on the data array, with x and y.
                .attr("fill", "none")
                .attr("stroke", "rgb(184,144,79)")
                .attr("stroke-width", 2);
				
				 svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line2")
				
			svg2.select(".line2")
				.transition()
				.duration(1000)	
                .attr("d", line2)  // line is a function that will operate on the data array, with x and y.
                .attr("fill", "none")
                .attr("stroke", "rgb(184,144,79)")
                .attr("stroke-width", 2);

			
			
			
		
			  
			  
            svg2.append("g")
			   .attr("class","x axis")
			   .attr("transform","translate(0," + height + ")" )
			  

            // draw yAxis
          svg2.append("g")
			   .attr("class","y axis")
			 yAxis.ticks(5);  
		 svg2.select(".x.axis")
					.transition()
					.duration(1000)
					.call(xAxis2);

	     svg2.select(".y.axis")
	                .transition()
	                .duration(1000)
	                .call(yAxis); 
	    
			   
           var theight = height + 40 ;
		   
           svg2.append("text")
                .attr("class", "xTitle")
            svg2.select(".xTitle")
               .attr("transform", "translate(" + (0.74*fullWidth) + " ," +
								(1.05*height) + ")")
                .style("text-anchor", "middle")
                .text("年份");
				
			
			svg2.append("text")
                .attr("class", "yTitle")
            svg2.select(".yTitle")
                .style("text-anchor", "middle")
				.attr("transform", "translate(0,-5)")
	            .attr("dy", "-10")
                .text("贡献率*");
				
			svg2.append("text")	
            	.attr("class","yTitle")
            	.attr("id","yTitle2")
            svg2.select("#yTitle2")	
					.attr("transform", "translate("+ (0.32*fullWidth) + " ," +
								(1.15*height) + ")")
					.style("text-anchor", "middle")
					.attr("fill","grey")					
					.text("贡献率*=核心期刊引用的论文总数中该类论文的占比");	
			
		   	svg2.append("text") 
		             .attr("class","little")
		             
		            svg2.select(".little") 
		     .attr("transform", "translate("+ (0.34*fullWidth) + " ," +
								(-0.15*height) + ")")
		     .style("text-anchor", "middle")    
		     .text("研究生毕业论文与期刊论文的贡献率差距巨大"); 
        });
		
		function mouseoverFunc(d) {
          
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<p>"+d.year +"年被引用概率为"+d.one+"%</p>")}

        function mousemoveFunc(d) {
            // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
		
		
		
d3.csv("zhexianyuan.csv", function(error, data) {
	
	
	xScale2.domain(d3.extent(data,function(d){
				                    return d.year}
				));
			var mymax1 = d3.max(data,function(d){
				return d.one})

            yScale.domain([0,mymax1+15]);
	
	var circles = svg2.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("class","zhexianyuan");

			var circles1 =d3.selectAll(".zhexianyuan")
			    .data(data)
				
		    circles
				.enter()
			    .append("circle")
			    .merge(circles1)
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
				.transition()
		        .duration(1000) 
				.attr("cx", function(d) { 
					return xScale2(+d.year); 
				})
				.attr("cy", function(d) {
					return yScale(+d.one)
				})
				.attr("stroke","rgb(184,144,79)") 
				.attr("stroke-width","2")
				.attr("fill","#fff9f0") 
				.attr("r","4") 

		var labels = svg2.selectAll(".linename")
						 .data(data)

			 labels.enter()
			 	   .append("text")
			 	   .attr("class","linename")
			 	   .merge(labels)
			 	   .transition()
		           .duration(1000)
			 	   .attr("transform", function(d){ return "translate(" + xScale2(d.year) + " ," +
								yScale(d.one) + ")"})
			 	   .attr("dx",7)
			 	   .attr("dy",7)
			 	   .text(function(d){if(d.one > 30 && d.year == "2018"){return "期刊论文"}
			 	   	else if (d.one < 30 && d.year == "2018")  {return "毕业论文"}})
	})		

		
		
		}

function main7(){
	// console.log("7")
	
	 d3.csv("zhexian.csv", function(error, data) {
            if (error) throw error; 
       
            data.forEach(function(d){
				        return d.year = parseTime(d.year);
						return d.two1 = +d.two1;
						return d.two2 = +d.two2;
						}
			);
          


									
			 var line3= d3.line()
			                    .curve(d3.curveCardinal)
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.two1)});
			var line4 = d3.line()
			                    .curve(d3.curveCardinal) 
								.x(function(d){
									return xScale2(d.year);})
								.y(function(d){
									return yScale(d.two2)});
									
		
            xScale2.domain(d3.extent(data,function(d){
				                    return d.year }
				));
			var mymax1 = d3.max(data,function(d){
				return d.two1})

            yScale.domain([0,25]);

            // Line:
			 svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line1")
				
		     svg2.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line2")
				
				
				
			var selectedline1 = d3.select(".line1")
		    var selectedline2 = d3.select(".line2")
			
           selectedline1
						   .transition()
						   
						    .duration(1000)
						   // .ease(d3.easeLinear)
						   .attr("d",line3)
						  //  .attr("class", "line1")
						   .attr("stroke","rgb(184,144,79)")
						   .attr("fill","none")
						   .attr("stroke-width",2)
						  

			  
			selectedline2
						   .transition()
							.duration(1000)
							//.ease(d3.easeLinear)
						   .attr("d",line4)
						   //.attr("class", "line2")
						   .attr("stroke","rgb(184,144,79)")
						   .attr("fill","none")
						   .attr("stroke-width",2)
           
		  
			
			   
           var theight = height + 40 ;
		  
			
			 svg2.append("g")
			   .attr("class","x axis")
			   .attr("transform","translate(0," + height + ")" )
			  

            // draw yAxis
        svg2.append("g")
			   .attr("class","y axis")
				
		svg2.select(".x.axis")
					.transition()
					.duration(1000)
					.call(xAxis2);

	     svg2.select(".y.axis")
	                .transition()
	                .duration(1000)
	                .call(yAxis);

	    yAxis.ticks(5);	
			
		svg2.append("text")
                .attr("class", "yTitle")

        svg2.select(".yTitle")
                .style("text-anchor", "middle")
				.attr("transform", "translate(0,-5)")
	            .style("text-anchor", "middle")
	            .attr("dy", "-10")
                .text("被引用概率*");

        svg2.append("text")
                .attr("class", "xTitle")
            svg2.select(".xTitle")
               .attr("transform", "translate(" + (0.74*fullWidth) + " ," +
								(1.05*height) + ")")
                .style("text-anchor", "middle")
                .text("年份");
				
				
			svg2.append("text")	
            	.attr("class","yTitle")
            	.attr("id","yTitle2")
            svg2.select("#yTitle2")	
					.attr("transform", "translate("+ (0.34*fullWidth) + " ," +
								(1.15*height) + ")")
					.style("text-anchor", "middle")
					.attr("fill","grey")					
					.text(function(d){
  					  if (windows > 800){
  					  	return "被引用概率*=每年被核心期刊引用的论文篇数/该年及之前四年内的发表论文总数"
					} else { return "被引用概率*=被核心期刊引用篇数/该年及之前四年论文总数"}}
						);	
					

			svg2.append("text") 
			             .attr("class","little")
			             
			            svg2.select(".little") 
			     .attr("transform", "translate("+ (0.32*fullWidth) + " ," +
								(-0.15*height) + ")")
			     .style("text-anchor", "middle")    
			     .text("研究生毕业论文更容易被核心期刊引用"); 
        });
   
		function mouseoverFunc(d) {
          // console.log(d);
            return tooltip
                .style("display", null) 
                .html("<p>"+d.year +"年被引用概率为"+d.two+"%</p>" )
				}

        function mousemoveFunc(d) {
          // console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        }
		
d3.csv("zhexianyuan.csv", function(error, data) {
	
	
	xScale2.domain(d3.extent(data,function(d){
				                    return d.year}
				));
			yScale.domain([0,25]);
			
	var circles = svg2.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("class","zhexianyuan");

			var circles1 =d3.selectAll(".zhexianyuan")
			    .data(data)
				
		    circles
				.enter()
			    .append("circle")
			    .merge(circles1)
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
				.transition()
		        .duration(1000) 
				.attr("cx", function(d) { 
					return xScale2(+d.year); 
				})
				.attr("cy", function(d) {
					return yScale(+d.two)
				})
				.attr("stroke","rgb(184,144,79)") 
				.attr("stroke-width","2")
				.attr("fill","#fff9f0") 
				.attr("r","4")  


			var labels = svg2.selectAll(".linename")
						 .data(data)

			 labels.enter()
			 	   .append("text")
			 	   .attr("class","linename")
			 	   .merge(labels)
			 	   .transition()
		           .duration(1000)
			 	   .attr("transform", function(d){ return "translate(" + xScale2(d.year) + " ," +
								yScale(d.two) + ")"})
			 	   .attr("dx",7)
			 	   .attr("dy",7)
			 	   .text(function(d){if(d.two < 15 && d.year == "2018"){return "期刊论文"}
			 	   	else if (d.two > 15 && d.year == "2018")  {return "毕业论文"}})
	})				
		

}



function main8(){
	
	   // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('tu2'));

var sourceData = [{
        name: '期刊论文',
        
    },
    {
        name: '会议论文',
       
    },
    {
        name: '毕业论文',
       
    },
    {
        name: '核心期刊',
       
    },
    {
        name: 'EI和SCI期刊',
      
    },
    {
        name: '其他期刊',
       
    },
    {
        name: '会议论文 ',
       
    },
    {
        name: '毕业论文 ',
        
    }
];
var sangjiColor = ['#f4ce92', '#f2b87e', '#C8B083', '#f4ce92', '#f4ce92', '#f4ce92', '#f2b87e', '#C8B083'];
var itemStyleSource = [];
for (let d = 0; d < sourceData.length; d++) {
    sourceData[d].itemStyle = {
        normal: {
            color: sangjiColor[d]
        }
    }
    itemStyleSource.push(sourceData[d]);
}

option = {
    tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            backgroundColor:'white',
            borderColor:'grey',
            borderWidth:1,
            padding:2,
            textStyle:{
        color:'grey',
        fontSize:12
    }

        },
    series: {
        type: 'sankey',
        layout:'none',
         focusNodeAdjacency: 'allEdges',
         width:"70%",
         data: itemStyleSource,
          itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: 'transparent'
                    }
                },
                
        sourceData: [{
            name: '期刊论文'
        }, {
            name: '会议论文'
        }, {
            name: '毕业论文'
        }, {
            name: '核心期刊'
        }, {
            name: 'EI和SCI期刊'
        }, {
            name: '其他期刊'
        },{
             name:'会议论文 '
        },{
            name: '毕业论文 '
        }],
         links: [{
            source: '期刊论文',
            target: '核心期刊',
            value: 9502106
        }, {
            source: '期刊论文',
            target: 'EI和SCI期刊',
            value: 2175095
        }, {
            source: '期刊论文',
            target: '其他期刊',
            value: 10631748
        }, {
            source: '期刊论文',
                target: '会议论文 ',
                value: 2081742
        }, {
             source: '期刊论文',
                target: '毕业论文 ',
                value: 16587442
        }, {
             source: '会议论文',
                target: '核心期刊',
                value: 531506
        }, {
             source: '会议论文',
                target: 'EI和SCI期刊',
                value: 106706
        }, {
             source: '会议论文',
                target: '其他期刊',
                value: 795454
        },
        {
                source: '会议论文',
                target: '会议论文 ',
                value: 94917
            },
            {
                source: '会议论文',
                target: '毕业论文 ',
                value: 2386199
            },
            {
                source: '毕业论文',
                target: '核心期刊',
                value: 34961
            },
            {
                source: '毕业论文',
                target: 'EI和SCI期刊',
                value: 6062
            },
            {
                source: '毕业论文',
                target: '其他期刊',
                value: 106648
            },
            {
                source: '毕业论文',
                target: '会议论文 ',
                value: 15769
            },
            {
                source: '毕业论文',
                target: '毕业论文 ',
                value: 172241
            }],
           
            lineStyle: {
                    normal: {
                        curveness: 0.5,
                        color:'rgb(245,206,147)'
                    }
                },
    }
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	
}


function main9(){
var myChart = echarts.init(document.getElementById('tu2'));

var sourceData = [{
        name: '毕业论文',
        
    },
    {
        name: '核心期刊',
       
    },
    {
        name: 'EI和SCI期刊',
      
    },
    {
        name: '其他期刊',
       
    },
    {
        name: '会议论文 ',
       
    },
    {
        name: '毕业论文 ',
        
    }
];
var sangjiColor = [ '#C8B083', '#f4ce92', '#f4ce92', '#f4ce92', '#f2b87e', '#C8B083'];
var itemStyleSource = [];
for (let d = 0; d < sourceData.length; d++) {
    sourceData[d].itemStyle = {
        normal: {
            color: sangjiColor[d]
        }
    }
    itemStyleSource.push(sourceData[d]);
}

option = {
    tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            backgroundColor:'white',
            borderColor:'grey',
            borderWidth:1,
            padding:2,
            textStyle:{
        color:'grey',
        fontSize:12
    }

        },
    series: {
        type: 'sankey',
        layout:'none',
         focusNodeAdjacency: 'allEdges',
         width:"70%",
         data: itemStyleSource,
          itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: 'transparent'
                    }
                },
                
        sourceData: [{
            name: '毕业论文'
        }, {
            name: '核心期刊'
        }, {
            name: 'EI和SCI期刊'
        }, {
            name: '其他期刊'
        },{
             name:'会议论文 '
        },{
            name: '毕业论文 '
        }],
        links: [
            {
                source: '毕业论文',
                target: '核心期刊',
                value: 34961
            },
            {
                source: '毕业论文',
                target: 'EI和SCI期刊',
                value: 6062
            },
            {
                source: '毕业论文',
                target: '其他期刊',
                value: 106648
            },
            {
                source: '毕业论文',
                target: '会议论文 ',
                value: 15769
            },
            {
                source: '毕业论文',
                target: '毕业论文 ',
                value: 172241
            }],
         
            lineStyle: {
                    normal: {
                        curveness: 0.5,
                        color:'rgb(245,206,147)'
                    }
                },
    }
};	
	

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);};
function main10(){
	 var myChart = echarts.init(document.getElementById('tu2'));

        // 指定图表的配置项和数据

var sourceData = [{
        name: '毕业论文',
        
    },
    {
        name: '核心期刊',
       
    },
    {
        name: 'EI和SCI期刊',
      
    },
    {
        name: '其他期刊',
       
    },
    {
        name: '会议论文 ',
       
    },
    {
        name: '毕业论文 ',
        
    }
];
var sangjiColor = [ '#C8B083','#d24a4a', '#f4ce92', '#f4ce92', '#f2b87e', '#C8B083'];
var itemStyleSource = [];
for (let d = 0; d < sourceData.length; d++) {
    sourceData[d].itemStyle = {
        normal: {
            color: sangjiColor[d]
        }
    }
    itemStyleSource.push(sourceData[d]);
}

option = {
   tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
            backgroundColor:'white',
            borderColor:'grey',
            borderWidth:1,
            padding:2,
            textStyle:{
        color:'grey',
        fontSize:12
    }

        },
    series: {
        type: 'sankey',
        layout:'none',
         focusNodeAdjacency: 'allEdges',
         width:"70%",
         data: itemStyleSource,
          itemStyle: {
                    normal: {
                        borderWidth: 1,
                        borderColor: 'transparent'
                    }
                },
                
        sourceData: [{
            name: '毕业论文'
        }, {
            name: '核心期刊'
        }, {
            name: 'EI和SCI期刊'
        }, {
            name: '其他期刊'
        },{
             name:'会议论文 '
        },{
            name: '毕业论文 '
        }],
        links: [
            {
                source: '毕业论文',
                target: '核心期刊',
                value: 34961
            },
            {
                source: '毕业论文',
                target: 'EI和SCI期刊',
                value: 6062
            },
            {
                source: '毕业论文',
                target: '其他期刊',
                value: 106648
            },
            {
                source: '毕业论文',
                target: '会议论文 ',
                value: 15769
            },
            {
                source: '毕业论文',
                target: '毕业论文 ',
                value: 172241
            }],
            lineStyle: {
                    normal: {
                        curveness: 0.5,
                        color:'rgb(245,206,147)'
                    }
                },
    }
};
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	};