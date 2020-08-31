// question 2

const container = document.querySelector(".container");

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function fetchGames() {
	try {
		const response = await fetch(url);

		const json = await response.json();

		const results = json.results;

		container.innerHTML = "";

		for (let i = 0; i < results.length; i++) {
			if (i === 8) {
				break;
			}

			const numberOfTags = results[i].tags.length;

			container.innerHTML += `<div>
									<p>${results[i].name}</p>
									<p>${results[i].rating}</p>
									<p>Amount of tags: ${numberOfTags}</p>
									</div>`;
		}
	} catch (error) {
		console.log(error);
		container.innerHTML = error;
	}
}

fetchGames();
