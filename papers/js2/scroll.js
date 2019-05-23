$(window).scroll(function sss(){
	// All functions triggered by scroll written here:

	var windowTop = $(window).scrollTop()//scrollTop()方法返回或设置匹配元素的滚动条的垂直位置
   // console.log(windowTop)
	if(windowTop >= front1 && windowTop < front2 && section[0]==0){//section这个函数在prep.js里面，这个的作用是使滚动到这个区间，相应的function只执行一次的作用
		main1();
		changeSection(0)
	}

	if(windowTop >= front2 && windowTop < front4 && section[1]==0){
		main2();
		changeSection(1);
		
	}


	if(windowTop >= front4 && windowTop < front5 && section[3]==0){
		main4();
		changeSection(3)
	}
	
	if(windowTop >= front5 && windowTop < front8 && section[4]==0){
		main5();
		changeSection(4);

	}

if(windowTop >= front8 && windowTop < front9 && section[7]==0){
		main8();
		changeSection(7);
		
	}


	if(windowTop >= front9 && windowTop < front10 && section[8]==0){
		main9();
		changeSection(8)
	}
	
	if(windowTop >= front10 && windowTop < front6 && section[9]==0){
		main10();
		changeSection(9);

	}


	if(windowTop >= front6 && windowTop < front7 && section[5]==0){
		main6();
		changeSection(5)
	}
	
	if(windowTop >= front7 && section[6]==0){
		main7();
		changeSection(6);
		
		
	}

	
})

