//Trigger result output when a user makes his selection


$('#ingredients-list').on('change', function(e){
	//var array = ["Beef", "Chicken", "Lamb", "Fish", "Vegetable", "Salad", "Chocolate"];
	var selected = $('#ingredients-list').val();
	//var selectedArray = selected.split(',');
	//alert(selected);
	if (selected.val === '') {
		$('#wait').hide();
	}
	
	var query = $('#query4').val();
	var query = query.replace("xxxxxxxx", selected);	
	//endpoint used for Output WITHOUT Inferencing
	var endpoint = 'http://localhost:5820/myDB/query?reasoning=false&';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		
		try {
			
			var vars = json.head.vars;
			
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktarget4').html(ul);
		} catch(err) {
			$('#linktarget4').html('Something went wrong!' + err);
		} finally {
			$('#wait').hide();
		}
		

		
	});

	//endpoint used for Output WITH Inferencing
	var endpoint = 'http://localhost:5820/myDB/query?reasoning=true&';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		console.log(json);

		
		try {
			
			var vars = json.head.vars;
			
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(v_value);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktarget5').html(ul);
			
		} catch(err) {
			$('#linktarget5').html('Something went wrong!' + err);
		} finally {
			$('#wait').hide();
		}
		

		
	});
	
	
});

//Display answer to the user on click
$('#linktargetResult').on('click', function(e){
	//var array = ["Beef", "Chicken", "Lamb", "Fish", "Vegetable", "Salad", "Chocolate"];
	var reasonResult = "<h3>Answer</h3>Both results are different within the results on the left (without reasoning), the SPARQL query is just returning a set of results which matches the query. With reasoning, the results on the right matches a set of logical consequences from knowledge of previously asserted facts or axioms. Such assertions are crafted within an ontology, which can further be reused by others. </br> As such, the result set with reasoning provides us with more in-depth understanding of the relationships between the classes or types and could help us to link up with previously unknown facts or relations of our data. </br></br>Start your own Ontology and take part in the drive towards Web 2.0, --> Semantic Web!";


	$('#linktargetResult').html(reasonResult);
});


