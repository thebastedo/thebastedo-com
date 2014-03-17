		var demo = document.getElementById('myCanvas');
		var context = demo.getContext('2d');
		context.fillStyle = 'red';
		context.fillRect(10,10,200,50);

		var test = "test string";
		var context2 = demo.getContext('2d');
		context2.fillStyle = 'blue';
		context2.font = 'bold 20px Arial';
		context2.textBaseline = 'top';
		context2.fillText(test,10,5);

	alert('test');
