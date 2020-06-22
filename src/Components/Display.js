import React from 'react'
import {search} from '../OpenWeather'

export class Display extends React.Component {
    state = {
        location: null,
        temperature: null,
        humidity: null,
        cityName: null,
    }

    onClick = async (e) =>{
        e.preventDefault()
        let tet = e.target.value
        const apiKey = '3515eb54a10f2ef0d46d3777bab42cae'
        let units = 'metric'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=${units}&appid=${apiKey}`)
        const data = await response.json()
        this.setState({
            location: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
        })
    }


    render(){
        return (
            <div>
                <div className='infoBox' >
                    <form>
                        <input className='inputField' placeholder='City' type='text' onChange={e => this.setState({cityName: e.target.value})} ></input>
                        <button onClick={this.onClick} >Submit</button>
                    </form>
                    <p className='weather-info'>Location</p>
                    <p className='weather-info'>{this.state.location}</p>
                    <p className='weather-info'>Temperature</p>
                    <p className='weather-info'>{this.state.temperature}</p>
                    <p className='weather-info'>Humidity</p>
                    <p className='weather-info'>{this.state.humidity === null ? '' : `${this.state.humidity}%`}</p>
                </div>
            </div>
        )
    }
}