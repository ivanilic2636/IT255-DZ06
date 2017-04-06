$(document).ready(function (){
	
	$.ajax({
		type: 'GET',
		url: 'https://jsonplaceholder.typicode.com/photos/2596',
		success: function(html){
				var obj = html;
				
				$("#id").append("id: " + obj.id);
				$("#title").append("title: " + obj.title);
				$("#url").append("url: " + obj.url);
				$("#tUrltUrl").append("tUrl: " + obj.tUrltUrl);
		}
	});
	
	
	
});