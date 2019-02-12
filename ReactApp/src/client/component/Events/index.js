import React, {Component} from 'react';

import './style.css';

class Events extends Component{
    constructor(){
        super();
        this.state= {
            events:[],
            error: null
        }
    }

    componentDidMount(){
        fetch('/api/getThisEvents')
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        events: result
                    });
            },

            (error) => {
                    this.setState({
                        error: "Данные не получены"
                    });
                }
        )
    }


    render() {
        const {error, events} = this.state;
        if (error) {
            return <div>{error}</div>
        } else {
            return (
                <div>
                    <h2 className='text-center' style={{color: '#03011e'}}>События</h2>
                    <table className='table'>
                        <thead style={{backgroundColor: '#03011e', color: '#ffffff'}}>
                            <tr>
                                <th scope="col">Дата</th>
                                <th scope="col">Название</th>
                                <th scope="col">Адрес</th>
                                <th scope="col">Описание</th>
                            </tr>
                        </thead>
                        {events.map(function (items) {
                            return (
                                <tbody style={{backgroundColor: 'white'}} key={items.id}>
                                <tr key={0}>
                                    <th scope="row" key={1}>{items.date}</th>
                                    <td key={2}>{items.title}</td>
                                    <td key={3}>{items.location}</td>
                                    <td key={4}>{items.description}</td>
                                </tr>
                                </tbody>
                            )
                        })}
                        <tfoot >
                            <tr>
                                <td colSpan="4" className='text-center'>
                                    <a href="/events"  className='badge'><button>Перейти к событиям</button></a>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            )
        }
    }

}

export default Events
