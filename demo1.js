//这个方法让段落元素可以显示出来
$(document).ready(
	function () {
	  $("#show").click(
	  	function () {
			$("p").show("fast");
		  }
	  );
	}
);

//这个方法让段落元素可以隐藏起来
$(document).ready(
	function () {
	  $("#hide").click(
	  	function () {
			$("p").hide("fast");
		  }
	  );
	}
);

//这个方法集成了上面两个方法的功能
$(document).ready(
	function () {
	  $("#toggle").click(
	  	function () {
			$("p").toggle("fast");
		  }
	  );
	}
);

//这个方法用来实现淡入
$(document).ready(
	function () {
	  $("#fadeIn").click(
	  	function () {
			$("#d1").fadeIn();
			$("#d2").fadeIn(3000);
		  }
	  );
	}
);

//这个方法实现淡出
$(document).ready(
	function () {
	  $("#fadeOut").click(
	  	function () {
			$("#d1").fadeOut();
			$("#d2").fadeOut(3000);
		  }
	  );
	}
);

//这个方法集成了淡入淡出两个方法的功能
$(document).ready(
	function () {
	  $("#fadeToggle").click(
	  	function () {
			$("#d1").fadeToggle();
			$("#d2").fadeToggle(3000);
		  }
	  );
	}
);

//这个方法实现了淡入或者淡出到一定透明度的功能
$(document).ready(
	function () {
	  $("#fadeTo").click(
	  	function () {
			$("#d1").fadeTo(1000,0.5);
			$("#d2").fadeTo(3000,0.1);
		  }
	  );
	}
);

//这个方法实现下拉效果
$(document).ready(
	function () {
	  $("#slideDown").click(
	  	function () {
			$("#pannel").slideDown(1000);
		  }
	  );
	}
);

//这个方法集成了下拉和上拉功能
$(document).ready(
	function () {
	  $("#slideToggle").click(
	  	function () {
			$("#pannel").slideToggle(1000);
		  }
	  );
	}
);

//这个方法实现了动画效果
$(document).ready(
	function () {
	  $("#ani").click(
	  	function () {
			$("#animate").animate({
				left:"500px",
				width:"300px",
				height:"300px",
				opacity:"0.8"
			});
		  }
	  );
	}
);

//这个方法在animate内部调用了toggle方法
$(document).ready(
	function () {
	  $("#aniToggle").click(
	  	function () {
			$("#animate").animate({
				//height:"toggle"
				width:"toggle"	
			});
		  }
	  );
	}
);

//这个方法利用animate队列来是实现一个动画效果
$(document).ready(
	function () {
	  $("#aniQueue").click(
	  	function () {
			$("#animate").animate({
				width:"300px",
				opacity:"0.5"
			},1000);
			$("#animate").animate({
				height:"300px",
				opacity:"1"
			},3000);
			$("#animate").animate({
				width:"100px",
				opacity:"0.5"
			},1000);
			$("#animate").animate({
				height:"100px",
				opacity:"1"
			},3000);
		 });
	}
);

//这个方法集成了字体和div的的动画
$(document).ready(
	function () {
	  $("#aniFont").click(
	  	function() {
	  		$("#animateFont").animate({
	  			height:"60px",
	  			width:"220px",
	  			fontSize:"3em"
	  		},1000);
	  	}
	  );
	}
);

//这个方法使当前动画停止	PS:若继续触发该动画事件则继续完成动画
$(document).ready(
	function () {
	  $("#stop").click(
	  	function () {
			$("#animateFont").stop();
		  }
	  );
	}
);

//这个方法是用chaining,可以简化代码并且优化性能
$(document).ready(
	function () {
	  $("#chainingBtn").click(
	  	function () {
			$("#chaining").css("color","red").slideUp(2000).slideDown(2000);
		  }
	  );
	}
);

//这个方法可以显示也年终字符
$(document).ready(
	function () {
	  $("#textBtn").click(
	  	function () {
			alert("段落中写的是:"+$("#text").text());
		  }
	  );
	}
);

//这个方法可以获取用户输入的字符并显示出来
$(document).ready(
	function () {
	  $("#textBtn1").click(
	  	function () {
			alert("你刚输入的是:"+$("#text1").val());
		  }
	  );
	}
);

//这个方法可以显示链接的href属性
$(document).ready(
	function () {
	  $("#attrBtn").click(
	  	function () {
			alert("百度的网址是:"+$("#attrHref").attr("href"));
		  }
	  );
	}
);

//这个方法可以在被选元素结尾追加元素
$(document).ready(
	function () {
	  $("#addBtn").click(
	  	function () {
			$("#t1").append("Love is much more vicious motivator.");
		  }
	  );
	}
);

//这个方法可以在被选元素结尾追加元素(可以识别HTML代码)
$(document).ready(
	function () {
	  $("#addBtn1").click(
	  	function () {
			$("#u").append("<li>You heard me perfectly. I'm not saying it again.</li>");
		  }
	  );
	}
);
	
//这个方法利用toggleClass可以反复切换风格
$(document).ready(
	function () {
	  $("#remove").click(
	  	function () {
			$("#para").toggleClass("para1");
		  }
	  );
	}
);

//这个方法可以求出当前浏览器的高度和宽度	PS:是文档显示的高度和宽度,再添加元素的时候,高度会增加的
$(document).ready(
	function () {
	  $("#wh").click(
	  	function () {
	  		alert("文档的高度是:"+$(document).height());
			alert("文档的宽度是:"+$(document).width());
			alert("当前窗口的高度是:"+$(document).height());
			alert("当前窗口的宽度是:"+$(document).width());
		  }
	  );
	}
);

//这个方法可以指定div的高度和宽度
$(document).ready(
	function () {
	  $("#changeSize").click(
	  	function () {
			$("#change").width(300).height(300).css("background-color","blue");
		  }
	  );
	}
);
