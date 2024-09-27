const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				},
				{
					title: "THIRD",
					background: "white",
					initial: "white"
				}
			], 
			urlBase: "https://www.swapi.tech/api",
			characters: [],       //Le digo dónde queremos guardar los personajes
			planets: [],
			favoritos: [],
			vehicles: [],
			charactersDetails: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadCharacters: async() => {
				const response = await fetch(`${getStore().urlBase}/people`)
				const charactersData = await response.json()
				const fullCharacters = []	

					for(let item of charactersData.results) {
						const reponseCharacter = await fetch(item.url)
						const dataCharacter = await reponseCharacter.json()
						fullCharacters.push(dataCharacter.result)
					}
					setStore({characters: fullCharacters})
			},

			loadPlanets: async() => {
				const response = await fetch(`${getStore().urlBase}/planets`)
				const planetsData = await response.json()
				const fullPlanets = []	

					for(let item of planetsData.results) {
						const reponsePlanets = await fetch(item.url)
						const dataPlanets = await reponsePlanets.json()
						fullPlanets.push(dataPlanets.result)
					}
					setStore({planets: fullPlanets})
			},

			loadVehicles: async() => {
				const response = await fetch(`${getStore().urlBase}/vehicles/`)
				const vehiclesData = await response.json()
				const fullVehicles = []

					for(let item of vehiclesData.results) {
						const responseVehicles = await fetch(item.url)
						const dataVehicles = await responseVehicles.json()
						fullVehicles.push(dataVehicles.result)
					}
					setStore({vehicles: fullVehicles})
			},

			addFavoritos: (favorite) => {
				const store = getStore();
					setStore({
						favoritos: [...store.favoritos, favorite]
					});
					console.log(favorite)
			},

			deleteFavorite: (index) => {
				const store = getStore();
				const updateFavorites = store.favoritos.filter((_, i) => i !== index);
				setStore({favoritos: updateFavorites});
			},

			loadCharactersDetails: async() => {
				const response = await fetch()
			},


			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};


export default getState;
