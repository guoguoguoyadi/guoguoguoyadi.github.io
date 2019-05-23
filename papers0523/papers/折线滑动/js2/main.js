





function main0(){
	
}


function main1(){
	 console.log("1")
	   

			
			  											
		 d3.csv("zhexian.csv", function(error, data) {
            if (error) throw error; 
       
            data.forEach(function(d){
				        return d.year = parseTime(d.year);
						return d.one1 = +d.one1;
						return d.one2 = +d.one2;
						}
			);

									
			 var line1 = d3.line()
			                    .curve(d3.curveCardinal)
								.x(function(d){
									return xScale(d.year);})
								.y(function(d){
									return yScale(d.one1)});
			var line2 = d3.line()
			                    .curve(d3.curveCardinal) 
								.x(function(d){
									return xScale(d.year);})
								.y(function(d){
									return yScale(d.one2)});
									
		
            xScale.domain(d3.extent(data,function(d){
				                    return d.year}
				));
			var mymax1 = d3.max(data,function(d){
				return d.one2})

            yScale.domain([0,mymax1+15]);

            // Line:
			  svg.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line1")
				
			svg.select(".line1")
				.transition()
				.delay(function(d, i) { //delay: just...delay,延迟
					return i * 100;
				})
				.duration(1000)	
                .attr("d", line1)  // line is a function that will operate on the data array, with x and y.
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2);
				
				 svg.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line2")
				
			svg.select(".line2")
				.transition()
				.duration(1000)	
                .attr("d", line2)  // line is a function that will operate on the data array, with x and y.
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 2);

			
			  
			  
            svg.append("g")
			   .attr("class","x axis")
			   .attr("transform","translate(0," + height + ")" )
			  

            // draw yAxis
          svg.append("g")
			   .attr("class","y axis")
			  
		 svg.select(".x.axis")
					.transition()
					.duration(1000)
					.call(xAxis);

	     svg.select(".y.axis")
	                .transition()
	                .duration(1000)
	                .call(yAxis); 
			   
           var theight = height + 40 ;
		   
           svg.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
                .attr("y", theight)
				.attr("x", "300")
                .text("年份");
				
			svg.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
				.attr("transform","rotate(-90)")
                .attr("x",-theight/2)
				.attr("y", "-30")
                .text("百分比")
				
			
        });
		
		function mouseoverFunc(d) {
          
            return tooltip
                .style("display", null) // 区别"none": 不呈现；"null": 取消之前所有给display的属性。
                .html("<div>人民币</div>" 
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
									return xScale(d.year);})
								.y(function(d){
									return yScale(d.two1)});
			var line4 = d3.line()
			                    .curve(d3.curveCardinal) 
								.x(function(d){
									return xScale(d.year);})
								.y(function(d){
									return yScale(d.two2)});
									
		
            xScale.domain(d3.extent(data,function(d){
				                    return d.year }
				));
			var mymax1 = d3.max(data,function(d){
				return d.two1})

            yScale.domain([0,25]);

            // Line:
			 svg.datum(data)
                // .data([data])  //.datum(data),.data([data]),二选一
                .append("path")
                .attr("class", "line1")
				
		     svg.datum(data)
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
						   .attr("stroke","steelblue")
						   .attr("fill","none")
						   .attr("stroke-width",2)
						  

			  
			selectedline2
						   .transition()
							.duration(1000)
							//.ease(d3.easeLinear)
						   .attr("d",line4)
						   //.attr("class", "line2")
						   .attr("stroke","steelblue")
						   .attr("fill","none")
						   .attr("stroke-width",2)
           
		  
			
			   
           var theight = height + 40 ;
		   
           svg.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
                .attr("y", theight)
				.attr("x", "300")
                .text("年份");
				
			svg.append("text")
                .attr("class", "xTitle")
                .style("text-anchor", "middle")
				.attr("transform","rotate(-90)")
                .attr("x",-theight/2)
				.attr("y", "-30")
                .text("百分比")
			
			 svg.append("g")
			   .attr("class","x axis")
			   .attr("transform","translate(0," + height + ")" )
			  

            // draw yAxis
        svg.append("g")
			   .attr("class","y axis")
				
		svg.select(".x.axis")
					.transition()
					.duration(1000)
					.call(xAxis);

	     svg.select(".y.axis")
	                .transition()
	                .duration(1000)
	                .call(yAxis);	
			
        });
   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null) 
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
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
	  


   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null)
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
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
	    


   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null)
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
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
	   
		
   
		function mouseoverFunc(d) {
          console.log(d);
            return tooltip
                .style("display", null)
                .html("<div>11111</div>" )
				}

        function mousemoveFunc(d) {
          console.log("events", window.event, d3.event);
            return tooltip
                .style("top", (d3.event.pageY - 10) + "px" )
                .style("left", (d3.event.pageX + 10) + "px");
        }

        function mouseoutFunc(d) {
            return tooltip.style("display", "none"); 
        } 
	  
	
		
	  
	
}
function main6(){
	console.log("6")
	
}
function main7(){
	console.log("7")
}

