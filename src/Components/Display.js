import React from 'react'
import {search} from '../OpenWeather'

export class Display extends React.Component {
    state = {
        location: null,
        temperature: null,
        humidity: null,
        cityName: null,
        unitValue: 'metric'
    }

    onClick = async (e) =>{
        e.preventDefault()
        let tet = e.target.value
        const apiKey = '3515eb54a10f2ef0d46d3777bab42cae'
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=${this.state.unitValue}&appid=${apiKey}`)
        const data = await response.json()
        this.setState({
            location: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
        })
    }

    changeUnit = () => {
        this.state.unitValue === 'metric' ? 
        this.setState({
            unitValue: 'imperial' 
        })
        : this.setState({
            unitValue: 'metric'
        })
    }

    metricOrFaren = () => {
        if (this.state.unitValue === 'metric') 
            return 'C'
        else 
            return 'F'
    }


    render(){
        return (
            <div>
                <div className='infoBox' >
                    <form>
                        <div className='weather-header' >
                            <input className='inputField' placeholder='City' type='text' onChange={e => this.setState({cityName: e.target.value})} ></input>
                            <button onClick={this.onClick}><i class="material-icons">search</i></button>
                        </div>    
                        <label className='switch'>
                            <input onChange={this.changeUnit} type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </form>
                    <h1 className='weather-info'>Location</h1>
                    <p className='weather-info'>{this.state.location}</p>
                    <h1 className='weather-info'>Temperature ({this.metricOrFaren()}) </h1>
                    <p className='weather-info'>{this.state.temperature === null ? '' : `${this.state.temperature}°${this.metricOrFaren()}`} </p>
                    <h1 className='weather-info'>Humidity</h1>
                    <p className='weather-info'>{this.state.humidity === null ? '' : `${this.state.humidity}%`}</p>
                </div>
            </div>
        )
    }
}