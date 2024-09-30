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
			
			urlBase: "https://swapi.dev/api",
			characters: null,       //Le digo dónde queremos guardar los personajes
			planets: null,
			favoritos: [],
			vehicles: null,
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
				if(response.ok) {
					setStore({characters: charactersData.results})
				} else {
					setStore({favoritos: false})
				}
			},

			loadPlanets: async() => {
				const response = await fetch(`${getStore().urlBase}/planets`)
				const planetsData = await response.json()
				if(response.ok) {
					setStore({planets: planetsData.results})
				} else {
					setStore({favoritos: false})
				}
			},

			loadVehicles: async() => {
				const response = await fetch(`${getStore().urlBase}/vehicles/`)
				const vehiclesData = await response.json()
				if(response.ok) {
					setStore({vehicles: vehiclesData.results})
				} else {
					setStore({favoritos: false})
				}
			},

			addFavoritos: (favorite) => {
				const store = getStore();
				const actions = getActions();
				const result = actions.isFavorite(favorite)
				if(result) {
					actions.deleteFavorite(favorite)
				} else {
					setStore({
						favoritos: [...store.favoritos, favorite]
					});
				}
					console.log(favorite);
			},

			deleteFavorite: (favorite) => {
				const store = getStore();
				const updateFavorites = store.favoritos.filter(item => favorite.name !== item.name);
				setStore({favoritos: updateFavorites});
			},

			isFavorite: (favorite)  => {
				const store = getStore();
				const result = store.favoritos.some(item => favorite.uid == item.uid && favorite.type == item.type)
				return result
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
