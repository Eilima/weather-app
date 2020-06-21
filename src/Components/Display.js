import React from 'react'

export class Display extends React.Component {
    state = {
        location: 'test',
        temperature: null,
        humidity: null,
        conditions: null,
    }
    
    search = async () => {
        let cityName = 'Houston'
        let apiKey = ''
        const api_call = await fetch(`api.openweathermap.org/data/2.5/weather?q=Houston&units=metric&appid=${apiKey}`)
        console.log(api_call)
        console.log(typeof api_call)
        const data = await api_call.json()
        console.log(data)
    }

    submit = (e) => {
        e.preventDefault();
        this.search()
    }
    render(){
        return (
            <div>
                <div className='infoBox' >
                    <form>
                        <input className='inputField' placeholder='City' type='text'></input>
                        <input className='inputField' placeholder='Country' type='text'></input>
                        <button onClick={this.submit} >Submit</button>
                    </form>
                    <p className='weather-info'>Location: {this.state.location} </p>
                    <p className='weather-info'>Temperature: {this.state.temperature} </p>
                    <p className='weather-info'>Humidity: {this.state.humidity} </p>
                    <p className='weather-info'>Conditions: {this.state.conditions} </p>
                </div>
            </div>
        )
    }
}