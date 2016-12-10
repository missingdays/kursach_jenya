
var input = document.getElementById("input");

input.addEventListener('input', function(){
	filterContent(input.value);
});

function filterContent(text){
	var elements = document.querySelectorAll(".main .element");

	for(var i = 0; i < elements.length; i++){
		var element = elements[i];

		if(text == ''){
			element.style.display = 'block'
			continue;
		}

		var head = element.getElementsByClassName("head")[0];

		if(head.innerHTML.toLowerCase().indexOf(text.toLowerCase()) == -1){
			element.style.display = "none";
		} else {
			element.style.display = "block";
		}
	}
}