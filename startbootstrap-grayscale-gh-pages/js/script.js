// JavaScript Document

var n = 0;
window.onload = function() {
	document.getElementById("FoodSubmit").addEventListener("click", async function(event) {
		event.preventDefault();
		
		const value = document.getElementById("FoodInput").value;
		if (value === "")
		return;
		
		const picture = "";
		/*for (let i=0; i <value.length; i++) {
			if (value.charAt[i] === " ") {
				picture += "+";
			}
			else {
				picture += value.charAt[i];
			}
		}*/
		console.log(value);
			
		// setting the title
		document.getElementById("title2").innerHTML = "<h4 class='text-white'> " + value + "</h4>";
		
		const url =  "https://pixabay.com/api/?key=12500344-e6a9439c491dad4ae19d5aed6&q=" + value +
			  "&image_type=photo"
		
			try {
			// getting current weather by sending the API and getting response
			const response = await fetch(url);
			const json = await response.json();
			console.log("json: ",json);
			
			
			// the images using pixabay
			let results = "";
			results += '<img class="img-fluid resultImg" src="' + json.hits[0].largeImageURL + '" alt ="' + value + '" ">';
			
			document.getElementById("firstImage").innerHTML = results;
				
			let results2 = "";
			results2 += '<img class="img-fluid resultImg" src="' + json.hits[1].largeImageURL + '" alt ="' + value + '"">';
			
			document.getElementById("secondImage").innerHTML = results2;
		
			// the recipe	
			let pic3 ="";
				pic3 += '<img class="img-fluid resultImg" src="' + json.hits[2].largeImageURL + '" alt ="' + value + '"">';
			
			
			document.getElementById("bottomPicture").innerHTML = pic3;
				
		}catch(err) {
			console.log(err);
		}
		
		try {
		var type = $(this).attr("data-type");
		var queryURL = "https://api.edamam.com/search?q=" + value + "&app_id=e01c42d8&app_key=19a34826099c7e0c9666127afe12981b";
		console.log(queryURL);

		// Grabbing our API results
		$.ajax({
			url: queryURL,
			method: "GET",
		  })
			.then (function(response) {
			  $(".title").text("Recipe: " + response.hits[n].recipe.label);
			  $(".img").attr("src", response.hits[n].recipe.image);
			  
			  var info = "";
			  info += "From: " + '<a target="_blank"  href="' + response.hits[n].recipe.url + '">' + response.hits[n].recipe.source + '</a><br/>';
			  info += "Calories: " + response.hits[n].recipe.calories + "<br/>";
			  info += "Diet Labels: ";
			  for (let i=0; i < response.hits[n].recipe.dietLabels.length; i++) {
					info += response.hits[n].recipe.dietLabels[i];
				  if (i < (response.hits[n].recipe.dietLabels.length - 1) ) {
					info += ", ";
				  }
				  else {
					  info += " ";
				  }
			  }
			  info += "<br/>Health Labels: ";
			  for (let i=0; i < response.hits[n].recipe.healthLabels.length; i++) {
					info += response.hits[n].recipe.healthLabels[i];
				  if (i < (response.hits[n].recipe.healthLabels.length - 1) ) {
					info += ",  ";
				  }
			  }
			  document.getElementById("foodInfo").innerHTML = '<p class="theFoodInfo"> ' + info + '</p>';
			  
			  var rec = "";
			  for (let i=0; i < response.hits[n].recipe.ingredients.length; i++) {
					rec += "- " + response.hits[n].recipe.ingredients[i].text + "<br/>";
			  }
			  document.getElementById("ingredientList").innerHTML = "<p> " + rec + "</p>";
		  });
			
			}catch(err) {
			console.log(err);
		}
		
	});
	
}

function goUp() {
  alert("Hello world!");
  n++;
	
}