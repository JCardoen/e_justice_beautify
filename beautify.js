document.addEventListenener('DOMContentLoaded', function() {
	
	var button = document.getElementById("beautify");

	button.addEventListener('click', function() {
	var head = document.head;
    var link = document.createElement('link');

	  link.type = 'text/css';
	  link.rel = 'stylesheet';
	  link.href = "beautified.css";

	  head.appendChild(link);

	});
});