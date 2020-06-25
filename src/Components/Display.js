import React from 'react'
import {search} from '../OpenWeather'

export class Display extends React.Component {
    state = {
        location: null,
        temperature: null,
        humidity: null,
        cityName: null,
        unitValue: 'metric',
        icon: null,
        description: null,

    }

    apiCall = async () => {
            const apiKey = '3515eb54a10f2ef0d46d3777bab42cae'
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=${this.state.unitValue}&appid=${apiKey}`)
            const data = await response.json()
                this.setState({
                    location: data.name,
                    temperature: data.main.temp,
                    humidity: data.main.humidity,
                    icon: data.weather[0].icon,
                    description: data.weather[0].description
                })
    }

    onClick = (e) => {
        e.preventDefault()
        this.apiCall()
        
    }

    changeUnit = () => {
        this.state.unitValue === 'metric' ? this.setState({unitValue: 'imperial'}) : this.setState({unitValue: 'metric'})
    }

    switchFlip = (e) => {
        if (this.state.temperature === null)
            this.changeUnit()
            
        let originalTemp = this.state.temperature

        if (this.state.unitValue === 'imperial' && this.state.temperature !== null) {
            this.changeUnit()
            this.setState({
                temperature: ((this.state.temperature - 32) * (5/9)).toFixed(2)
            })

        } else if (this.state.temperature !== null && this.state.unitValue !== 'imperial'){
            this.changeUnit()
            this.setState({
                temperature: ((this.state.temperature * 9/5) + 32).toFixed(2)
            })
        }
    }

    metricOrFaren = () => {
        if (this.state.unitValue === 'metric') 
            return 'C'
        else 
            return 'F'
    }

    apiCalled = () => {
        if (this.state.humidity !== null) {
            return (
                <div>
                    <img src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} ></img>
                    <p className='weather-info-title' >{this.state.description}</p>
                    <h4 className='weather-info-title'>Location</h4>
                    <p className='weather-info'>{this.state.location}</p>
                    <h4 className='weather-info-title'>Temperature ({this.metricOrFaren()}) </h4>
                    <p className='weather-info'>{`${this.state.temperature}° ${this.metricOrFaren()}`} </p>
                    <h4 className='weather-info-title'>Humidity</h4>
                    <p className='weather-info' id='sun-icon' >{`${this.state.humidity}%`}</p>
                </div>
            )
        }
        else 
            return <p className='no-call'>No weather to display<i className='material-icons'>wb_sunny</i></p>
    }

    render() { 
        return (
            <div>
                <div className='infoBox' >
                    <form>
                        <div className='weather-header' >
                            <input className='inputField' placeholder='City' type='text' onChange={e => this.setState({cityName: e.target.value})} ></input>
                            <button onClick={this.onClick}><i className="material-icons">search</i></button>
                        </div>    
                        <label className='switch'>
                            <input onChange={e => this.switchFlip(e)} type='checkbox'/>
                            <span className='slider round'></span>
                        </label>
                    </form>
                        {this.apiCalled()}
                </div>
            </div>
        )
    }
}