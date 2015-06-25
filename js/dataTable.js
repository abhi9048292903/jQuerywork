$(function(){
	$('#table').DataTable({
			dom: 'Tfrtip',
			serarch: false,
			ajax: {
				url:'./data/table-data.txt'
			},
			columns:[
					 {data:"users.firstname"},
					 {data:"users.lastname"}],
			fields: [{
					label: 'FirstName',
					name: 'users.firstname'},
					{
						label: 'LastName',
						name: 'users.lsastname'
					}]
		});
})