export default class ActionCollection{
	constructor(){
		const collection =
			  [{"id":"1",
				"name":"stdout",
                "opponent":"stdout",
				"converter":"convert_sentence",
				"informant":"inform_stdout"},
			   {"id":"2",
				"name":"slack",
                "opponent":"slack",
				"converter":"convert_sentence",
				"informant":"inform_slack"},
			   {"id":"3",
				"name":"calendar",
                "opponent":"calendar",
				"converter":"convert_google_event",
				"informant":"inform_calendar"},
			   {"id":"4",
				"name":"mail",
                "opponent":"mail",
				"converter":"convert_sentence",
				"informant":"inform_mail"}
			  ];
		this.collection = collection;
	}

	values(key){
		var values = [];
		this.collection.map(hash => {
			values.push(hash[key]);
		});
		return values;
	}

    // add(hash){
    //     this.collection.push(hash);
    // }

    // get_converter(name){
    //     var converter;
    //     this.collection.map(hash =>{
    //         if(hash["name"] == name){
    //             converter = hash["converter"];
    //         }
    //     });
    //     return converter;
    // }

    // get_informant(name){
    //     var informant;
    //     this.collection.map(hash =>{
    //         if(hash["name"] == name){
    //             informant = hash["informant"];
    //         }
    //     });
    //     return informant;
    // }

}
