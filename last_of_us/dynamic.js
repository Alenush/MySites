$(document).ready(function() { 


//var backgrounds = ['./wall_black1.jpg','./wall_black2.jpg']; 
//var i = 0;
//var image = $('#carousel');
// set interval makes it move 
// change every 10 second

//setInterval(function (){
//		image.css('background','url('+backgrounds[i++]+') 100% 100% no-repeat');
//		image.css('width', '100%','height','100%');
//		if  (i==image.length) {
//			i=0;
//		};
//	}, 5000);

$('#joel').click(function(){
	$('#joel_block').css('display','block');
	$('#elli_block').css('display', 'none');
	$('#elli_block').css('box-shadow', 'none');

});

$('#elli').click(function(){
	$('#elli_block').css('display','block');
	$('#joel_block').css('display', 'none');
	$('#joel_block').css('box-shadow', 'none');

});

// You see the target? Click on it!
 $('#kill_zombie').click(function() { 
        $.blockUI({ 
            message: $('div.growlUI'), 
            fadeIn: 700, 
            fadeOut: 700, 
            timeout: 2000, 
            showOverlay: false, 
            centerY: false, 
            css: { 
                width: '350px', 
                top: '10px', 
                left: '', 
                right: '10px', 
                borderRadius: '10px', 
                border: '0 black solid',
                padding: '5px', 
                backgroundColor: '#68da23', 
                '-webkit-border-radius': '10px', 
                '-moz-border-radius': '10px', 
                opacity: .8, 
                color:'white',
                textShadow:'0 3px 5px rgba(0,0,0,.5)'
            } 
        }); 
    }); 


});