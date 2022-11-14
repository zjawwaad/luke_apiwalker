import React, {useState} from 'react'

const FetchPLANETS = () => {
    const [ starwarsplanets, setStarwarsplanets] = useState ([])

    const fetchData = () => {
        fetch("https://swapi.dev/api/planets")
        .then((response) => {
            return response.json();
        })
        .then(response => {
            setStarwarsplanets(response.results)
            console.log("Starwars!", response.results);
        })
        .catch(err=>{
            console.log(err);
        });

    }
    return (
    <div>
        <h1>Planets API!</h1>
        <button onClick={fetchData}>Star Wars</button>

        {
            starwarsplanets.map((p, i) => {
                return(
                    <div key ={i}>
                    <h2>{p.name}</h2>
                    <h4>Diameter: {p.diameter}</h4>
                    <h4>Climate: {p.climate}</h4>
                    <h4>Gravity: {p.gravity}</h4>
                    <h4>Terrain: {p.terrain}</h4>
                    </div>
                )})
        }
    </div>
    )
}






export default FetchPLANETS