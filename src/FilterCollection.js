export default class FilterCollection{
	constructor(){
		const filter_collection = [
			{"id":"1",
			 "name":"summary_delete",
			 "condition":"match:summary:.",
			 "modifier":"replace:summary:"},
			{"id":"2",
			 "name":"created_delete",
			 "condition":"match:summary:.",
			 "modifier":"replace:created:"},
			{"id":"3",
			 "name":"location_delete",
			 "condition":"match:summary:.",
			 "modifier":"replace:location:"}
		];
		this.filter_collection = filter_collection
	}
}
