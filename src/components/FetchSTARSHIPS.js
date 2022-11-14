import React, {useState} from 'react'

const FetchSTARSHIPS= () => {
    const [ starwarsstarships, setStarwarsstarships] = useState ([])

    const fetchData = () => {
        fetch("https://swapi.dev/api/starships")
        .then((response) => {
            return response.json();
        })
        .then(response => {
            setStarwarsstarships(response.results)
            console.log("Starwars!", response.results);
        })
        .catch(err=>{
            console.log(err);
        });

    }
    return (
    <div>
        <h1>STARSHIPS API!</h1>
        <button onClick={fetchData}>Star Wars</button>

        {
            starwarsstarships.map((p, i) => {
                return(
                    <div key ={i}>
                    <h2>{p.name}</h2>
                    <h4>model: {p.model}</h4>
                    <h4>Manufacturer: {p.manufacturer}</h4>
                    <h4>Length: {p.length}</h4>
                    <h4>Crew: {p.crew}</h4>
                    </div>
                )})
        }
    </div>
    )
}


export default FetchSTARSHIPS