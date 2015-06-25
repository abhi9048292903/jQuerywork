var editor;
$(function(){
		$('#permission-tree').jstree({ "plugins" : [ "checkbox","json_data", "types","contextmenu" ],
			'checkbox':{'keep_selected_style':false},
			'types':{
				"all":{
					"icon": "img/all.png"
				},
				"system":{
					"icon": "img/system.png"
				},
				"folder":{
					"icon": "img/folder.png"
				},
				"device":{
					"icon": "img/device.png"
				},
				"alarm":{
					"icon": "img/alarm.png"
				},
				"read":{
					"icon": "img/read.png"
				},
				"write":{
					"icon": "img/write.png"
				},
				"delete":{
					"icon": "img/delete.gif"
				},
				"view":{
					"icon": "img/view.gif"
				},
				"ack":{
					"icon": "img/ack.png"
				},
				"history":{
					"icon": "img/history.png"
				}

			},
			'contextmenu':{
				'items': function(node){
					return{
						"openAll":{
							"label": "Open all",
							"action": function(obj){
								$("#permission-tree").jstree().open_all(obj.reference);
							}
						},
						"closeAll":{
							"label": "Close all",
							"action": function(obj){
								$("#permission-tree").jstree().close_all(obj.reference);
							}
						}
					}
				}
			},
			'core':{

				'data':[{"id":"all","parent":"#", "text":"All", "type":"all"},
										    	{"id":"system","parent":"all", "text":"System", "type":"system",  "state":{"opened":true}},
										    	{"id":"folder","parent":"system", "text":"Folder", "type":"folder" ,  "state":{"opened":true}},
										    	{"id":"folder-read","parent":"folder", "text":"Read", "type":"read"},
										    	{"id":"folder-write","parent":"folder", "text":"Write", "type":"write"},
										    	{"id":"folder-delete","parent":"folder", "text":"Delete", "type":"delete"},
										    	{"id":"device","parent":"system", "text":"Device" , "type":"device",  "state":{"opened":true}},
										    	{"id":"device-read","parent":"device", "text":"Read", "type":"read"},
										    	{"id":"device-write","parent":"device", "text":"Write", "type":"write"},
										    	{"id":"device-delete","parent":"device", "text":"Delete", "type":"delete"},
										    	{"id":"alarm","parent":"system", "text":"Alarm" , "type":"alarm",  "state":{"opened":true}},
										    	{"id":"alarm-view","parent":"alarm", "text":"View", "type":"view"},
										    	{"id":"alarm-ack","parent":"alarm", "text":"Acknowledgement", "type":"ack"},
										    	{"id":"alarm-history","parent":"alarm", "text":"History", "type":"history"},
										    	]}
										    });

		$('#permission-tree').on('changed.jstree', function(e,data){
			console.log(data.selected);
			//alert("clicked on"+data.selected);
		});

		$('#b').on('click', function(){
			$('#permission-tree').jstree(true).select_node('system');
		});
		
	})