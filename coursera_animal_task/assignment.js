// put your javascript code here

var nav_templ, animals_temp, category_temp, one_anim_temp;

var current_animal = animals_data.category[0];
var current_category = current_animal.animals[0];

function showTemplate(template, data, content){
	var html = template(data);
	$(content).html(html);
}

$(document).ready(function(){

	// navigation block!
	var source = $("#nav-template").html();
	var nav_content = '#nav_content';
	var body_content = '#content'

	nav_templ = Handlebars.compile(source);
	showTemplate(nav_templ, animals_data, nav_content);

	// photos on home page
	source = $("#animals-template").html();
	animals_temp = Handlebars.compile(source);
	showTemplate(animals_temp, animals_data, body_content);	
	
	source = $("#category-template").html();
	category_temp = Handlebars.compile(source);
	
	source = $("#one-category-template").html();
	one_anim_temp = Handlebars.compile(source);

	$(".category_menu").click(function () {
			var index = $(this).data("id");
			current_animal = animals_data.category[index];
			showTemplate(category_temp, current_animal, body_content);

			$(".home_images").click(function () {
				var index = $(this).data("id");
				current_category = current_animal.animals[index];
				showTemplate(one_anim_temp, current_category, body_content);
		});
	});

	$(".anim_menu").click(function () {
			var index = $(this).data("id");
			current_category = current_animal.animals[index];
			showTemplate(one_anim_temp, current_category, body_content);
	});

	// click on home-photos
	$(".main_block").click(function () {
			var index = $(this).data("id");
			current_animal = animals_data.category[index];
			showTemplate(category_temp, current_animal, body_content);

		// click on category-photos
		$(".home_images").click(function () {
				var index = $(this).data("id");
				current_category = current_animal.animals[index];
				showTemplate(one_anim_temp, current_category, body_content);
		});

	});

});