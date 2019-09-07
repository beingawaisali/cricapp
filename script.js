function showHome() {
	document.getElementById("home").style.display = "block";
	document.getElementById("matches-section").style.display = "none";
}
document.getElementById("matches-section").style.display = "none";

function showScore() {
	document.getElementById("home").style.display = "none";
	document.getElementById("matches-section").style.display = "flex";
}



// Make a request for a user with a given ID

axios.get('https://cricapi.com/api/cricket?apikey=qM4nJ31Wu9fmjHfNo0ki9OUVStI3')
	.then(function (response) {
		// handle success
		console.log(response);
		console.log(response.data.data[0].description);

		for (let i = 0; i < response.data.data.length; i++) {
			let uniqueId = response.data.data[i].unique_id;
			document.querySelector("#test").innerHTML +=
				`
			<p>${response.data.data[i].description}</p>
			<p>Unique ID: ${uniqueId}</p>
			`
		}

		console.log(response.data.data[0].unique_id);

		// let uniqueId = response.data.data[3].unique_id;

		console.log(response.data["team-1"]);

		for (let i = 0; i < response.data.data.length; i++) {
			// document.querySelector(".list a").innerHTML = response.data.data[i].description;
			let matchesLoop = document.querySelector(".matches-list").innerHTML += `
			<div class="list">
				<a href="#">${response.data.data[i].description}</a>
			</div>
		`;
			matchesLoop;

		}
		for (let i = 0; i < response.data.data.length; i++) {
			let uniqueId = response.data.data[i].unique_id;


			// Make a request for a user with a given ID
			axios.get("https://cricapi.com/api/cricketScore?apikey=qM4nJ31Wu9fmjHfNo0ki9OUVStI3&unique_id=" + uniqueId)
				.then(function (response) {
					// handle success
					console.log(response);
					// if (response.data.matchStarted == true) {
					// 	console.log(response.data.score);
					// }
					// console.log(response.data.matchStarted);
					document.querySelector("#test").innerHTML += `
			<p>${response.data["team-1"]} vs ${response.data["team-2"]}</p>
			`;
					for (let i = 0; i < 1; i++) {
						if (response.data[i].matchStarted = false) {
							console.log(response.data[i].score);
							let isMatchStarted = document.querySelector(".list").style.display = "none";
							const started = response.data.filter(match => match.isMatchStarted === true);
							console.log(started);
							const notLive = response.data.filter(match => match.isMatchStarted !== true);
							console.log(notLive);
							isMatchStarted[i];
							console.log(response.data[i].description);
						}
					}
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
				.finally(function () {
					// always executed
				});

		}






	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})
	.finally(function () {
		// always executed
	});

