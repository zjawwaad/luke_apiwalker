import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [type, setType] = useState("")
    const [id, setId] = useState(1)

    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault()
        navigate(`/${type}/${id}`)
    }

    return (
        <div>
        <form onSubmit={search}>
            <label>Search for:</label>
            <select onChange={e => setType(e.target.value)} value={type}>
                <option>people</option>
                <option>planets</option>
                <option>starships</option>
            </select>
            <label>ID:</label>
            <input type="number" min={1} onChange={(e) => setId(e.target.value)} value={id}/>
            <button type='submit' value="Search">Search</button>
        </form>
        </div>
    )
}

export default Form