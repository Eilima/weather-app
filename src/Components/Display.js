import React from 'react'

export class Display extends React.Component {
    render(){
        return (
            <div>
                <input className='inputField' placeholder='City' type='text'></input>
                <input className='inputField' placeholder='Country' type='text'></input>

                <p className='weather-info'>Location:</p>
                <p className='weather-info'>Temperature:</p>
                <p className='weather-info'>Humidity:</p>
                <p className='weather-info'>Conditions:</p>
            </div>
        )
    }
}