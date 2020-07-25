import React, { useState } from 'react'
import axios from 'axios'

const Search = (props) => {

    let [inputState, setInputState] = useState(0)
    let [text, setText] = useState('')
    let [getError, setError] = useState(null)
    const textHandle = (e) => {
        let len = e.target.value.length
        if(len === 0) {
            setError(null)
        }
        setInputState(len)
        let text = e.target.value
        setText(text)
    }

    const handleSubmit = () => {
        axios.get('https://restcountries.eu/rest/v2/name/' + text).then((res) => {
            props.history.push('country/' + text, res.data)
        }).catch((e) => {
            setError(e.message)
        })
    }

    return (<div className="container">
        <div className="col-md-12">
            <h3>Welcome to Assesment</h3>
            <input type="text" className="form-control" placeholder="Enter Country" onChange={textHandle} />
            <button className="btn btn-primary mt-1" onClick={handleSubmit} disabled={inputState > 0 ? false : true}>Submit</button>
            {(getError && inputState > 0 )&& <div className="alert alert-danger mt-5" role="alert">
                {getError}
            </div>}
        </div>
    </div>
    )

}

export default Search