




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
					return i * 1;
				})
		        .duration(600) 
				.attr("r","5") 
				.attr("fill",function(d) { if(d.country =="China") 
					{return "#9d2c29"} else{ return "#e38781"}} )
			
               
            svg.append("text")
					.attr("class", "xlabel")
			d3.select(".xlabel")
					.attr("transform", "translate(" + (width / 2) + " ," +
								(height + 20) + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("人均可支配收入变化");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -25)
				.text("寿命变化(年)");
				
				svg.append("text")
					.attr("id", "title1")

				d3.select("#title1")
					.attr("transform", "translate(" + (width / 2) + " ," +
								-30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("如果不是在中国，你的寿命和收入变化");
					
				svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width  / 3) + " ," +
								30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("右上角区域：寿命变长同时收入变多");
					
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
					.text("（鼠标悬浮查看详细信息）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*1.4  / 6) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("左下角区域：寿命变短同时收入变少");
				

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
					.text("中国");
	
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
                .html("<div>在"+ d.country  +"你的寿命会增加"+ d.life +"岁 </div>"+"<div>你的可支配收入会增加" + d.GDP +"人民币</div>" 
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
					.text("如果不是在中国，失业风险将增加");

			svg.append("text")
					.attr("id", "title5")

				d3.select("#title5")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("红色：增加")
					.style("fill","rgba(228,58,63,1)")
					
					
					svg.append("text")
					.attr("id", "title6")

				d3.select("#title6")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("蓝色：减少")
					.style("fill","rgba(62,124,121,1)")
					
					
					svg.append("text")
					.attr("id", "title7")

				d3.select("#title7")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								340 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("圆面积越大表示变化越大")


			svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width  / 3) + " ," +
								30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("右上角区域：寿命变长同时收入变多");
					
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
					.text("（鼠标悬浮查看详细信息）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*1.4  / 6) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("左下角区域：寿命变短同时收入变少");
				

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
					.attr("dy", "12")
					.text("人均可支配收入变化");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -25)
				.text("寿命变化(年)");
	})
	function mouseoverFunc(d) {
            // console.log(d);
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>在"+ d.country  +"你的寿命会增加"+ d.life +"岁 </div>"+"<div>你的可支配收入会增加" + d.GDP +"人民币</div>"+"<div>你的失业率会变化" + d.shiye*100 +"%的可能性</div>" 
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
					.text("能上网的可能性与金钱、寿命同向变化");
			svg.append("text")
					.attr("id", "title5")

				d3.select("#title5")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("红色：增加")
					.style("fill","rgba(228,58,63,1)")
					
					
					svg.append("text")
					.attr("id", "title6")

				d3.select("#title6")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("蓝色：减少")
					.style("fill","rgba(62,124,121,1)")
					
					
					svg.append("text")
					.attr("id", "title7")

				d3.select("#title7")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								340 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("圆面积越大表示变化越大")
				svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width  / 3) + " ," +
								30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("右上角区域：寿命变长同时收入变多");
					
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
					.text("（鼠标悬浮查看详细信息）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*1.4  / 6) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("左下角区域：寿命变短同时收入变少");
				

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
					.attr("dy", "12")
					.text("人均可支配收入变化");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -25)
				.text("寿命变化(年)");
	})
	
	function mouseoverFunc(d) {
            // console.log(d);
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>在"+ d.country  +"你的寿命会增加"+ d.life +"岁 </div>"+"<div>你的可支配收入会增加" + d.GDP +"人民币</div>"+"<div>你上网几率会变化" + d.wangmin*100 +"%的可能性</div>" 
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
					.text("如果不在中国，肥胖风险将大幅增加");
			svg.append("text")
					.attr("id", "title5")

				d3.select("#title5")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								300 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("红色：增加")
					.style("fill","rgba(228,58,63,1)")
					
					
					svg.append("text")
					.attr("id", "title6")

				d3.select("#title6")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("蓝色：减少")
					.style("fill","rgba(62,124,121,1)")
					
					
					svg.append("text")
					.attr("id", "title7")

				d3.select("#title7")
					.attr("transform", "translate(" + (width*6 / 7) + " ," +
								340 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("圆面积越大表示变化越大")
				svg.append("text")
					.attr("id", "tipp1")

				d3.select("#tipp1")
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width  / 3) + " ," +
								30 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("右上角区域：寿命变长同时收入变多");
					
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
					.text("（鼠标悬浮查看详细信息）");
					
					
				svg.append("text")
					.attr("id", "tipp2")
			d3.select("#tipp2")		
					.transition()
				    .delay(1000)
  					.duration(700)
					.attr("transform", "translate(" + (width*1.4  / 6) + " ," +
								320 + ")")
					.style("text-anchor", "middle")
					.attr("dy", "12")
					.text("左下角区域：寿命变短同时收入变少");
				

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
					.attr("dy", "12")
					.text("人均可支配收入变化");

			svg.append("text")
				.attr("class", "ylabel")
			d3.select(".ylabel")
				.attr("transform","rotate(-90) translate(" + (-height/2) + ",0)")
				.style("text-anchor", "middle")
				.attr("dy", -25)
				.text("寿命变化(年)");
	})
	
	function mouseoverFunc(d) {
            // console.log(d);
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>在"+ d.country  +"你的寿命会增加"+ d.life +"岁 </div>"+"<div>你的可支配收入会增加" + d.GDP +"人民币</div>"+"<div>你肥胖率率会变化" + d.fat*100 +"%的可能性</div>" 
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
 d3.selectAll("svg").style("display","none");
	
	
	  
	  
	
		
	  
	
}
function main6(){
	console.log("6")
	
}
function main7(){
	console.log("7")
}




