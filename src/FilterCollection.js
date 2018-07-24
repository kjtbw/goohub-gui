export default class FilterCollection{
	constructor(){
		const collection = [
			{"id":"1",
			 "name":"summary_delete",
			 "condition":"include:summary:.",
			 "modifier":"replace:summary:"},
			{"id":"2",
			 "name":"created_delete",
			 "condition":"include:summary:.",
			 "modifier":"replace:created:"},
			{"id":"3",
			 "name":"location_delete",
			 "condition":"include:summary:.",
			 "modifier":"replace:location:"},
            {"id":"4",
			 "name":"after_17PM__delete",
			 "condition":"after:dtstart:17",
			 "modifier":"replace:*:nil"}
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

	methods(){
		var methods = [];
		this.collection.map(hash => {
			var condition_method = hash["condition"].split(":")[0];
			var modifier_method = hash["modifier"].split(":")[0];
			methods.push(condition_method);
			methods.push(modifier_method);
		});
		methods = methods.filter(function(x,i,self){
			return self.indexOf(x) === i;
		});
		return methods;
	}
}
