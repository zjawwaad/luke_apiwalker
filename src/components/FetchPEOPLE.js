import React, {useState} from 'react'
// import { useParams } from 'react-router-dom';




const FetchPEOPLE = () => {
    const [ starwars, setStarwars] = useState ([])

    // const {id} = useParams();

    const fetchData = () => {
        fetch(`https://swapi.dev/api/people`)
        .then((response) => {
            return response.json();
        })
        .then(response => {
            setStarwars(response.results)
            console.log("Starwars!", response.results);
        })
        .catch(err=>{
            console.log(err);
        });
    }
    return (
    <div>


        <h1>Luke API!</h1>
        <button onClick={fetchData}>Star Wars</button>

        {
            starwars.map((p, i) => {
                return(
                    <div key ={i}>
                    <h2>{p.name}</h2>
                    <h4>Height: {p.height}</h4>
                    <h4>Mass: {p.mass}</h4>
                    <h4>Hair Color: {p.hair_color}</h4>
                    <h4>Skin Color: {p.skin_color}</h4>
                    </div>
                )})
            }
    </div>
    )
}

export default FetchPEOPLE