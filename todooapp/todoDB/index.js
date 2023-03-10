const http = require("http");
let url;

http.createServer(function(req,res){
	 
	 res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
	 res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	 res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

	if(req.method == "POST"){
		let json_post = "";

		req.on("data", function(data){
			json_post += data;
		});
	
		req.on("end",function(){
			console.log(jons_post);
		
			res.end();
		});
		
		return;
	}

let items = [
	{id_item:1, item: "coprar patatas"},
	{id_item:2, item: "hacer deberes"},
	{id_item:3, item: "ser comunista"}

];

//reperesntacion de un objeto java script en formato texto
let items_json = JSON.stringify(items);

res.write(items_json);
res.end();

}).listen(3001);

