export default class ActionCollection{
	constructor(){
		const collection =
			  [{"id":"1",
				"name":"stdout",
				"converter":"convert_sentence",
				"informant":"inform_stdout"},
			   {"id":"2",
				"name":"slack",
				"converter":"convert_sentence",
				"informant":"inform_slack"},
			   {"id":"3",
				"name":"calendar",
				"converter":"convert_google_event",
				"informant":"inform_calendar"},
			   {"id":"4",
				"name":"mail",
				"converter":"convert_sentence",
				"informant":"inform_mail"}
			  ];
		this.collection = collection
	}

	values(key){
		var values = [];
		this.collection.map(hash => {
			values.push(hash[key]);
		});
		return values;
	}

}
