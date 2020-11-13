(function () {
	
	var el1 = document.getElementById('baton');
	var el2 = document.getElementById('baton2');
	var el3 = document.getElementById('baton3')
	var	elem1 = document.getElementById('m2');
	var	elem2 = document.getElementById('hobby');
	var elem3 = document.getElementById('photo')
		
	

	var change = function () {
		
			elem1.style.visibility = 'hidden';
			elem2.style.visibility = 'visible';
			elem3.style.visibility = 'hidden';
	}

	var change2 = function () {

			elem1.style.visibility = 'visible';
			elem2.style.visibility = 'hidden';
			elem3.style.visibility = 'hidden';
	}

	var change3 = function () {
			
			elem1.style.visibility = 'hidden';
			elem2.style.visibility = 'hidden';
			elem3.style.visibility = 'visible';
	}

	var change4 = function () {

			elem1.style.visibility = 'visible';
			elem2.style.visibility = 'hidden';
			elem3.style.visibility = 'hidden';			
	}


	el1.addEventListener('click', change);

	el2.addEventListener('click', change2);

	el1.addEventListener('dblclick', change3);

	el3.addEventListener('dblclick', change4);

}) ();

 function textarea_resize(event, line_height, min_line_count) {
  
  var min_line_height = min_line_count * line_height;
  var obj = event.target;
  var div = document.getElementById(obj.id + '_div');
  div.innerHTML = obj.value;
  var obj_height = div.offsetHeight;
  if (event.keyCode == 13)
    obj_height += line_height;
  else if (obj_height < min_line_height)
    obj_height = min_line_height;
  obj.style.height = obj_height + 'px';
}