var data = [{id:0, text:"Device"},{id:1, text:"5GS700"},{id:2, text:"Server"},{id:4, text:"DVR"},{id:5, text:"Powersupply"}];
$(function(){

	$("#select").select2({
		data:data
	});
})