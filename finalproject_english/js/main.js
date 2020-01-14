




function main0(){
	console.log("0")
	d3.selectAll("svg")
	  .style("display","none")
	



}


function main1(){
	
	console.log("1")
	// d3.select("#title1")
	//   .style("display",null)
	  
	//  d3.select("#title2")
	//   .style("display","none")
	  
	//    d3.select("#title3")
	//   .style("display","none")
	  
	//    d3.select("#title4")
	//   .style("display","none")
	 d3.selectAll("svg")
	  .style("display",null)
	  
		
						
		d3.csv("data/one.csv", function(data) {
                console.log(data)
			// 完善比例尺的domain: 输入值域
			// d3.extent: 我在给你一个范围
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.GDP;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.life;
				}));
				
			var line1 = d3.line()
                     .x(function(d){
                        return xScale(0);
                     })
                     .y(function(d){
                        return yScale(d.life);
                     }); 
			var line2 = d3.line()
                     .x(function(d){
                        return xScale(d.GDP);
                     })
                     .y(function(d){
                        return yScale(0);
                     }); 
				 
			   svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(800)
					   .delay(1500)
		               .attr("d",line1)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9);
					   
			  svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(800)
					   .delay(1500)
		               .attr("d",line2)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9)
					   
			// 在svg的g里建一堆circle，用上堂课学过的给数据的方式：select...data...enter...append...
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle")
							.attr("r","0") 
							.attr("fill","rgba(0,0,0,0)") ;

			// 设置circle们的属性
			var circles1 = d3.selectAll("circle")
					.data(data, function(d) {return d.country;}); 
					
				
							
		circles1.enter()
				.append("circle")
				.merge(circles1)
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
				.attr("cx", function(d) { //圆心的X轴的位置
					return xScale(+d.GDP); //把横轴数据，通过横轴比例尺xScale，得出每个circle应该对应的横轴位置
				})
				.attr("cy", function(d) {
					return yScale(+d.life);
				})
				.transition()
				.delay(function(d, i) {
					return i * 1+1000;
				})
		        .duration(1500) 
				.attr("r","5") 
				.attr("fill",function(d) { if(d.country =="China") 
					{return "#9d2c29"} else{ return "#e38781"}} )
			
               
            svg.append("text")
					.attr("class", "xlabel")
			d3.select(".xlabel")
					.attr("transform", "translate(" + (width / 2) + " ," +
								(height + 20) + ")")
					.style("text-anchor", "middle")
					.attr("dy", "15")
					.text("Changes in per capita disposable income");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -30)
				.transition()
				.duration(0)
				.delay(1000)
				.text(" changes in life expectancy (year)");
				
				svg.append("text")
					.attr("id", "title1")

				d3.select("#title1")
					.attr("transform", "translate(" + (width / 2) + " ," +
								-30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.transition()
					.duration(0)
					.delay(1000)
					.text("Changes in your life expectancy and income");
					
				svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(3000)
  					.duration(1000)
					.attr("transform", "translate(" + (width*2  / 3) + " ," +
								40 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Upper-Right Corner: longer life and more income");
					
					svg.append("text")
					.attr("id", "tippp")
				d3.select("#tippp")
					
					.attr("transform", "translate(" + (width*3  / 4) + " ," +
								8 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "10")
					.transition()
					.duration(0)
					.delay(1000)
					.text("（Hover over for details）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(3000)
  					.duration(1000)
					.attr("transform", "translate(" + (width*1.8  / 6) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Lower-left corner:shorter life and less income");
				

					svg.append("text")
					.attr("id", "tip")
				d3.select("#tip")	
					.attr("transform", "translate(" + (width  / 7) + " ," +
								150 + ")")
					.style("text-anchor", "middle")
					.transition()
				    .delay(2000)
  					.duration(1500)
					.attr("dy", "12")
					.text("China");
	
				svg.append("text")
					.attr("id", "title5")

				d3.select("#title5")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("")
					.style("fill","rgba(228,58,63,1)")
					
					
					svg.append("text")
					.attr("id", "title6")

				d3.select("#title6")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("")
					.style("fill","rgba(62,124,121,1)")
					
					
					svg.append("text")
					.attr("id", "title7")

				d3.select("#title7")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								340 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("")	
				
					
				
					
					
					
						
			// 在svg上建立x、y轴
			svg.append("g")
				.attr("class", "x axis")//加一个属性，方便在css里面控制
				.attr("transform", "translate(0," + height + ")")
			    .transition()
				.duration(1000)
				.call(xAxis);//把前面定义的xAxis放下来
				
					
			svg.append("g")
			    .transition()
				.duration(1000)
				.attr("class", "y axis")  
				.call(yAxis);
		});
		
		function mouseoverFunc(d) {
            // console.log(d);
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>In "+ d.country  +" : Live "+ d.life +" years more.</div>"
                	+"<div> Make " + d.GDP +"* 10 thousand more money(CNY)</div>" 
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
	console.log("2")
	// d3.selectAll("#title1")
	//   .style("display","none")
	 // d3.selectAll("#tip")
	 //  .style("display","none")
	  
	 //   d3.selectAll("#title5")
	 //   .transition() .duration(400) 
	 //  .style("display",null)
	  
	 //   d3.selectAll("#title6")
	 //  .style("display",null)
	  
	// d3.selectAll("#title2")
	// .transition() .duration(400) 
	//   .style("display",null)
	  
	//    d3.selectAll("#title3")
	//   .style("display","none")
	  
	//   d3.selectAll("#title4")
	//   .style("display","none") 
d3.selectAll("svg")
	  .style("display",null)
	  
	
   d3.csv("data/one.csv", function(data) {
                console.log(data)
			// 完善比例尺的domain: 输入值域
			// d3.extent: 我在给你一个范围
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.GDP;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.life;
				}));
				
			var line1 = d3.line()
                     .x(function(d){
                        return xScale(0);
                     })
                     .y(function(d){
                        return yScale(d.life);
                     }); 
			var line2 = d3.line()
                     .x(function(d){
                        return xScale(d.GDP);
                     })
                     .y(function(d){
                        return yScale(0);
                     }); 
				 
			   svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(800)
					   .delay(1200)
		               .attr("d",line1)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9);
					   
			  svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(500)
					   .delay(1200)
		               .attr("d",line2)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9)
					   
			// 在svg的g里建一堆circle，用上堂课学过的给数据的方式：select...data...enter...append...
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");
	   
					
	  var circles2 = d3.selectAll("circle")
					.data(data, function(d) {return d.country;}); 
					
				 circles2.enter()
					.append("circle")
					.merge(circles2)
					.attr("cx", function(d) { //圆心的X轴的位置
					return xScale(+d.GDP); //把横轴数据，通过横轴比例尺xScale，得出每个circle应该对应的横轴位置
				})
				.attr("cy", function(d) {
					return yScale(+d.life);
				})
			    .attr("fill","#e38781") 
				.on("mouseover", mouseoverFunc) 
                .on("mousemove", mousemoveFunc)
                .on("mouseout", mouseoutFunc)
					.transition()
					.duration(1000)
					.attr("r",function(d) {return d.shiye*6;})
					.attr("fill",function(d) {
						if(d.shiyefl == "g"){return "rgba(228,58,63,0.7)"}//失业率g代表着高于中国
						else {return "rgba(62,124,121,0.8)"}})

				circles2
					.exit()
					.transition()
					.duration(1000)
					.style("opacity", 0)
					.remove();

			svg.append("g")
				.attr("class", "x axis")//加一个属性，方便在css里面控制
				.attr("transform", "translate(0," + height + ")")
			    .transition()
				.duration(1000)
				.call(xAxis);//把前面定义的xAxis放下来
				
					
			svg.append("g")
			    .transition()
				.duration(1000)
				.attr("class", "y axis")  
				.call(yAxis);

			svg.append("text")
					.attr("id", "title1")
					
				d3.select("#title1")
					.attr("transform", "translate(" + (width / 2) + " ," +
								-30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("If not in China,What about the risk of unemployment?");

			svg.append("text")
					.attr("id", "title5")

				d3.select("#title5")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "20")
					.text("red：more")
					.style("fill","rgba(228,58,63,1)")
					
					
					svg.append("text")
					.attr("id", "title6")

				d3.select("#title6")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "20")
					.text("blue：less")
					.style("fill","rgba(62,124,121,1)")
					
					
					svg.append("text")
					.attr("id", "title7")

				d3.select("#title7")
					.attr("transform", "translate(" + (width*5.4 / 7) + " ," +
								355 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "10")
					.text("Bigger bubble means greater change")


			svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*2  / 3) + " ," +
								40 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Upper-Right Corner: longer life and more income");
					
					svg.append("text")
					.attr("id", "tippp")
				d3.select("#tippp")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*3  / 4) + " ," +
								8 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "10")
					.text("（Hover over for details）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*1.8  / 6) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Lower-left corner:shorter life and less income");
				
				

					svg.append("text")
					.attr("id", "tip")
				d3.select("#tip")	
					.attr("transform", "translate(" + (width  / 7) + " ," +
								150 + ")")
					.style("text-anchor", "middle")
					.transition()
				    .delay(500)
  					.duration(1000)
					.attr("dy", "12")
					.text("");

			svg.append("text")
					.attr("class", "xlabel")
			d3.select(".xlabel")
					.attr("transform", "translate(" + (width / 2) + " ," +
								(height + 20) + ")")
					.style("text-anchor", "middle")
					.attr("dy", "15")
					.text("Changes in per capita disposable income");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -30)
				.text(" changes in life expectancy (year)");
	})
	function mouseoverFunc(d) {
            // console.log(d);
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("In "+ d.country  +" : Live "+ d.life +" years more.</div>"
                	+"<div> Make " + d.GDP +"* 10 thousand more money(CNY)"
                	+"<div>Possibility of Unemployment change by ：" + d.shiye*100 +"%</div>" 
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
}

function main3(){
	console.log("3")
	
	  //  d3.selectAll("#title2")
	  // .style("display","none");
	  //  d3.selectAll("#title4")
	  // .style("display","none");
	  //  d3.selectAll("#title3")
	  // .style("display",null)
	  d3.selectAll("svg")
	  .style("display",null)
	  
	  
	d3.csv("data/one.csv", function(data) {
                console.log(data)
			// 完善比例尺的domain: 输入值域
			// d3.extent: 我在给你一个范围
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.GDP;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.life;
				}));
				
			var line1 = d3.line()
                     .x(function(d){
                        return xScale(0);
                     })
                     .y(function(d){
                        return yScale(d.life);
                     }); 
			var line2 = d3.line()
                     .x(function(d){
                        return xScale(d.GDP);
                     })
                     .y(function(d){
                        return yScale(0);
                     }); 
				 
			   svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(800)
					   .delay(1200)
		               .attr("d",line1)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9);
					   
			  svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(500)
					   .delay(1200)
		               .attr("d",line2)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9)
					   
			// 在svg的g里建一堆circle，用上堂课学过的给数据的方式：select...data...enter...append...
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");
	  
	  var circles3 = d3.selectAll("circle")
					.data(data, function(d) {return d.country;}); 
					
				 circles3.enter()
					.append("circle")
					.merge(circles3)
					.attr("cx", function(d) { //圆心的X轴的位置
					return xScale(+d.GDP); //把横轴数据，通过横轴比例尺xScale，得出每个circle应该对应的横轴位置
				})
					.attr("cy", function(d) {
						return yScale(+d.life);
					})
					.on("mouseover", mouseoverFunc) 
	                .on("mousemove", mousemoveFunc)
	                .on("mouseout", mouseoutFunc)
					.transition()
					.duration(1000)
					.attr("r",function(d) {return +d.wangmin*5;})
					.attr("fill",function(d) {
						if(d.wangminfl == "g"){return "rgba(228,58,63,0.7)"}//率g代表着高于中国
						else if (d.wangminfl == "d") {return "rgba(62,124,121,0.8)"}
						else {return "rgba(228,58,63,0.7)"}
						})

				circles3
					.exit()
					.transition()
					.duration(1000)
					.style("opacity", 0)
					.remove();
			svg.append("g")
				.attr("class", "x axis")//加一个属性，方便在css里面控制
				.attr("transform", "translate(0," + height + ")")
			    .transition()
				.duration(1000)
				.call(xAxis);//把前面定义的xAxis放下来
				
					
			svg.append("g")
			    .transition()
				.duration(1000)
				.attr("class", "y axis")  
				.call(yAxis);

			svg.append("text")
					.attr("id", "title1")
					
				d3.select("#title1")
					.attr("transform", "translate(" + (width / 2) + " ," +
								-30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("What about the possibility of Internet access?");
			svg.append("text")
					.attr("id", "title5")

				d3.select("#title5")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "20")
					.text("red：more")
					.style("fill","rgba(228,58,63,1)")
					
					
					svg.append("text")
					.attr("id", "title6")

				d3.select("#title6")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "20")
					.text("blue：less")
					.style("fill","rgba(62,124,121,1)")
					
					
					svg.append("text")
					.attr("id", "title7")

				d3.select("#title7")
					.attr("transform", "translate(" + (width*5.4 / 7) + " ," +
								355 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "10")
					.text("Bigger bubble means greater change")

				svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*2  / 3) + " ," +
								40 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Upper-Right Corner: longer life and more income");
					
					svg.append("text")
					.attr("id", "tippp")
				d3.select("#tippp")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*3  / 4) + " ," +
								8 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "10")
					.text("（Hover over for details）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*1.8  / 6) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Lower-left corner:shorter life and less income");
				

					svg.append("text")
					.attr("id", "tip")
				d3.select("#tip")	
					.attr("transform", "translate(" + (width  / 7) + " ," +
								150 + ")")
					.style("text-anchor", "middle")
					.transition()
				    .delay(500)
  					.duration(1000)
					.attr("dy", "12")
					.text("");
				svg.append("text")
					.attr("class", "xlabel")
			d3.select(".xlabel")
					.attr("transform", "translate(" + (width / 2) + " ," +
								(height + 20) + ")")
					.style("text-anchor", "middle")
					.attr("dy", "15")
					.text("Changes in per capita disposable income");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -30)
				.text(" changes in life expectancy (year)");
	})
	
	function mouseoverFunc(d) {
            // console.log(d);
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("In "+ d.country  +" : Live "+ d.life +" years more.</div>"
                	+"<div> Make " + d.GDP +"* 10 thousand more money(CNY)"
                	+"<div> Possiblity of Internet access  change by  " + d.wangmin*100 +"%" 

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
}

function main4(){
	console.log("4")

d3.selectAll("#front5")
	.transition()
	.duration(50)
	.style("color","rgba(0,0,0,1)");	
 // d3.selectAll("#title3")
	//   .style("display","none");
	//    d3.selectAll("#title4")
	//   .style("display",null)
	d3.selectAll("svg")
	  .style("display",null)

	  
	d3.csv("data/one.csv", function(data) {
                console.log(data)
			// 完善比例尺的domain: 输入值域
			// d3.extent: 我在给你一个范围
			xScale.domain(
				d3.extent(data, function(d) {
					return +d.GDP;
				}));

			yScale.domain(
				d3.extent(data, function(d) {
					return +d.life;
				}));
				
			var line1 = d3.line()
                     .x(function(d){
                        return xScale(0);
                     })
                     .y(function(d){
                        return yScale(d.life);
                     }); 
			var line2 = d3.line()
                     .x(function(d){
                        return xScale(d.GDP);
                     })
                     .y(function(d){
                        return yScale(0);
                     }); 
				 
			   svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(800)
					   .delay(1200)
		               .attr("d",line1)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9);
					   
			  svg.datum(data)
		               .append("path")
		               .transition()
					   .duration(500)
					   .delay(1200)
		               .attr("d",line2)
		               .attr("fill","none")
		               .attr("stroke","rgba(153,153,153,0.8)")
		               .attr("stroke-width",0.9)
					   
			// 在svg的g里建一堆circle，用上堂课学过的给数据的方式：select...data...enter...append...
			var circles = svg.selectAll("circle")
							.data(data)
							.enter()
							.append("circle");
	  
	  var circles4 = d3.selectAll("circle")
					.data(data, function(d) {return d.country;}); 
					
				 circles4.enter()
					.append("circle")
					.merge(circles4)
					.attr("cx", function(d) { //圆心的X轴的位置
					return xScale(+d.GDP); //把横轴数据，通过横轴比例尺xScale，得出每个circle应该对应的横轴位置
					})
					.attr("cy", function(d) {
						return yScale(+d.life);
					})
					.on("mouseover", mouseoverFunc) 
	                .on("mousemove", mousemoveFunc)
	                .on("mouseout", mouseoutFunc)
					.transition()
					.duration(1000)
					.attr("r",function(d) {return + d.fat*5;})
					.attr("fill",function(d) {
						if(d.fatfl == "d"){return "rgba(62,124,151,1)"}//率g代表着高于中国
						else{return "rgba(228,58,63,0.2)"}
						})

				circles4
					.exit()
					.transition()
					.duration(1000)
					.style("opacity", 0)
					.remove();
			svg.append("g")
				.attr("class", "x axis")//加一个属性，方便在css里面控制
				.attr("transform", "translate(0," + height + ")")
			    .transition()
				.duration(1000)
				.call(xAxis);//把前面定义的xAxis放下来
				
					
			svg.append("g")
			    .transition()
				.duration(1000)
				.attr("class", "y axis")  
				.call(yAxis);

			svg.append("text")
					.attr("id", "title1")
					
			d3.select("#title1")
					.attr("transform", "translate(" + (width / 2) + " ," +
								-30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("The risk of obesity would increase dramatically");
			svg.append("text")
					.attr("id", "title5")

				d3.select("#title5")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "20")
					.text("red：more")
					.style("fill","rgba(228,58,63,1)")
					
					
					svg.append("text")
					.attr("id", "title6")

				d3.select("#title6")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "20")
					.text("blue：less")
					.style("fill","rgba(62,124,121,1)")
					
					
					svg.append("text")
					.attr("id", "title7")

				d3.select("#title7")
					.attr("transform", "translate(" + (width*5.4 / 7) + " ," +
								355 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "10")
					.text("Bigger bubble means greater change")

				svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*2  / 3) + " ," +
								40 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Upper-Right Corner: longer life and more income");
					
					svg.append("text")
					.attr("id", "tippp")
				d3.select("#tippp")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*3  / 4) + " ," +
								8 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "10")
					.text("（Hover over for details）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*1.8  / 6) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("Lower-left corner:shorter life and less income");
				

				

					svg.append("text")
					.attr("id", "tip")
				d3.select("#tip")	
					.attr("transform", "translate(" + (width  / 7) + " ," +
								150 + ")")
					.style("text-anchor", "middle")
					.transition()
				    .delay(500)
  					.duration(1000)
					.attr("dy", "12")
					.text("");

				svg.append("text")
					.attr("class", "xlabel")
			d3.select(".xlabel")
					.attr("transform", "translate(" + (width / 2) + " ," +
								(height + 20) + ")")
					.style("text-anchor", "middle")
					.attr("dy", "15")
					.text("Changes in per capita disposable income");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -30)
				.text(" changes in life expectancy (year)");
	})
	
	function mouseoverFunc(d) {
            // console.log(d);
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("In "+ d.country  +" : Live "+ d.life +" years more.</div>"
                	+"<div> Make " + d.GDP +"* 10 thousand more money(CNY)"
                	+"<div> Possiblity of being obese  change by " + d.fat*100 +"%"

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
}

function main5(){
	console.log("5")

d3.selectAll("svg")
	.style("display","none");

d3.selectAll("#front5")
	.transition()
	.duration(50)
	.style("color","rgba(0,0,0,0)");
	
	
	  
	  
	
		
	  
	
}
function main6(){
	console.log("6")
	d3.selectAll("svg").style("display","none");
	
}
function main7(){
	console.log("7")
	d3.selectAll("svg").style("display","none");
}




