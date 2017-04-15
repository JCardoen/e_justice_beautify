
	  		var frame = window.frames["Body"];
	      	var linkElem = document.createElement('link');
			linkElem.setAttribute('rel', 'stylesheet');
			linkElem.setAttribute('href', "http://diffdigital.be/beautified.css");
			var head = frame.document.getElementsByTagName("head")[0];
			head.appendChild(linkElem);


