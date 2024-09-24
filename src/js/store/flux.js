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
				
				// fetch("https://www.swapi.tech/api/planets")
				// 	.then(res => res.json())
				// 	.then(data => setStore({planets: data.results}))
				// 	.catch(err => console.error(err))
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},

			addFavoritos: (oneMoreFavorite) => {
				const store = getStore();
					setStore({
						favoritos: [...store.favoritos, oneMoreFavorite]
					});
			},

			sumarFavoritos: () => {
				const [counter, setCounter] = useState(0);

				const sumar = () => {
				setCounter(counter + 1);
				}
				const restar = () => {
				setCounter(counter - 1);
				}
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
