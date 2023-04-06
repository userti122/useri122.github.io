if (callhunterON != undefined && ctd24ON != undefined && ctd60ON != undefined && ctdtestON != undefined && ctdspanON != undefined && anchor != undefined) {
	var callhunterON;
	var ctd24ON;
	var ctdtestON;
	var ctd60ON;
	var ctdspanON;
	var anchor; 
}

/* ========== Плавный якорь ===================================== */

if (anchor == true) {
	$(document).ready(function() { 
		$('a[href^="#"]').on('click', function() {
			var target = $(this).attr('href');
			if (target.search('#modal') == -1) {
				$('html, body').animate({scrollTop: $(target).offset().top}, 800);
				return false;
			}
		});  
	});
}

/* ========== Плавный якорь ===================================== */



/* ========== TimeShift ===================================== */

$(document).ready(function() {
	var offset = new Date().getTimezoneOffset();
	var timeShift = -(offset / 60);
	$('input[name="timeShift"]').attr("value", timeShift);
	console.log(timeShift);
});

/* ========== /TimeShift ===================================== */


function postRequest(){
	
}



$('.sucsessModal__okBtn').click(()=>{
	$(".sucsessModal").addClass("displayModal");
});


$('.x_order_form').submit(function(e) {
	e.preventDefault();
	fetch('https://jsonplaceholder.typicode.com/posts', {
	method: 'POST',
	body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
	}),
	headers: {
		'Content-type': 'application/json; charset=UTF-8',
	},
	})
	.then((response) => response.status)
	.then((status) => {
		console.log(status)
		if(status === 201 || status === 204 || status === 200){
			$(".sucsessModal").removeClass("displayModal")
		} else {
			$(".sucsessModal").addClass("displayModal")
		}
	});	
});



