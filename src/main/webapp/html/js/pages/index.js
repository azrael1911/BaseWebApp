$( function() {
	initSideMenu();
})

var flag = true;

function initSideMenu() {
	$("#side-menu").append("<li><a class='J_menuItem' href='../pages/sbzhxx.html'><i class='fa fa-search' aria-hidden='true'></i><span class='nav-label'>设备综合信息</span></a></li>");
}

function clickSideMenu() {
	
	if(flag) {
		$("#fa-outdent").removeClass("fa-outdent");
		$("#fa-outdent").addClass("fa-indent");
		flag = false;
	} else {
		$("#fa-outdent").removeClass("fa-indent");
		$("#fa-outdent").addClass("fa-outdent");
		flag = true;
	}
	
}
