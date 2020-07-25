import React, { useState } from 'react'
import axios from 'axios'

const Detail = (props) => {
    let [data, setData] = useState(null)
    let [getCapital, setCapital] = useState(null)
    let [getError, setError] = useState(null)

    const handleWeather = (e) => {
        let capital = e.target.id
        setCapital(capital)
        axios.get('http://api.weatherstack.com/current?access_key=b17998b4a249fa42631a5e87bc74c0fa&query=' + capital).then((res) => {
           if(res.data.success === false) {
            setError(res.data.error.info)
            setData(null)
            }
            else{
                setData(res.data.current)
            }
        })
    }
    return (<div className="container">
        <h2 >Welcome to Country Page</h2>
        <div className="row mt-5">

            {props.location.state && props.location.state.map((data, index) => {
                return <div className="col-md-6 mt-4" key={index}>
                    <div className="card" style={{ width: "18rem",margin: "auto" }}>
                        <img className="card-img-top" src={data.flag} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{data.name}</h5>
                            <p className="card-text">Population: {data.population} </p>
                            <p className="card-text">LatLong: {data.latlng.toString()}</p>
                            <button className="btn btn-primary" id={data.capital} onClick={handleWeather}> Capital weather</button>
                        </div>
                    </div>

                </div>
            })}

        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                <h4>{getCapital && "Capital Weather of " + getCapital}</h4>
           { data ? <div className="card" style={{ width: "18rem", margin: "auto" }}>
                <img className="card-img-top" src={data.weather_icons[0]} alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">{getCapital}</h5>
                    <p className="card-text">Temperature: {data.temperature}</p>
                    <p className="card-text">Speed: {data.wind_speed}</p>
                    <p className="card-text">Precip: {data.precip}</p>
                </div>
            </div>: getError && <div className="alert alert-danger mt-5" role="alert">
                {getError}
            </div>}
        
            </div>

            </div>
        </div>
    </div>
    )

}

export default Detail