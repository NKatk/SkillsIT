import React, {Component} from 'react';

class Greeting extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            error: null
        }
    }

    componentDidMount(){
        fetch('/api/getThisGreeting')
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        data: result
                    });
                },

                (error) => {
                    this.setState({
                        error: "Данные не получены"
                    });
                }
            )
    }

    render(){
        const {error, data} = this.state;
        if (error) {
            return <div>{error}</div>
        } else {
            return (
                <div className='card  text-white'>
                    {data.map(function (item, i) {
                        return (
                            <div key={i}>
                                <img className='card-img' src={item.img} alt=""/>
                                <div className='card-img-overlay row justify-content-center text-center'
                                    style={{backgroundColor: 'rgba(3,1,30,0.5)'}}>
                                    <h2 className='card-title  my-auto'>{item.title}</h2>
                                    <i className='card-body col my-auto'>{item.content}</i>

                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
}

export default Greeting
