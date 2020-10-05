var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
   

    $scope.tasks=[];

$scope.removeItem = function(x){
	var a= $scope.tasks.indexOf(x);
	$scope.tasks.splice(a,1);
}

$scope.removeDesc = function()
{
	$(".descpanel").css("display","none");
	$("#mainbody").fadeTo("slow",1);
}

$scope.openDesc= function(x){
	var a= $scope.tasks.indexOf(x);
	$(".descpanel").css("display","block");
	$("#desc_heading").text($scope.tasks[a].task);
	$("#desc_date").text($scope.tasks[a].date);
	$("#desc_priority").text($scope.tasks[a].priority);
	$("#desc_desc").text($scope.tasks[a].desc);
	$("#mainbody").fadeTo("slow",0.2);
	if(typeof $scope.tasks[a].desc==='undefined')
	{
		$("#desc_desc").html("<i>no description has been provided for this task</i>");
	}
	if($scope.tasks[a].priority.localeCompare('High')==0)
	{
		red();
	}
	else if($scope.tasks[a].priority.localeCompare('Moderate')==0)
	{
		yellow();
	}
	else
	{
		green();
	}
}

function red()
{
	$(".descpanel").css("border","red solid 2px");
	$("#desc_heading").css("color","red");
}

function yellow()
{
	$(".descpanel").css("border","yellow solid 2px");
	$("#desc_heading").css("color","yellow");
}

function green()
{
	$(".descpanel").css("border","green solid 2px");
	$("#desc_heading").css("color","green");
}

$scope.addItem = function()
{  
	var d= new Date();
	if($scope.newx.date<d)
	{
		$scope.newx.date="";
		alert("the due date cant be before today's date");
		return
	}
	$scope.tasks.push({
		slno: $scope.newx.slno,
		task : $scope.newx.task,
		date: $scope.newx.date.toDateString(),
		priority: $scope.newx.priority,
		desc: $scope.newx.desc
	});
	$scope.newx.slno="";
	$scope.newx.task="";
	$scope.newx.priority="";
	$scope.newx.date="";
	$scope.newx.desc-"";

}
});

