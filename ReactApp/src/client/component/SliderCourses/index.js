import React, {Component} from 'react';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import './styles.css';


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("/api/getThisContent")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result

                    });

                },


                // Примечание: важно обрабатывать ошибки именно в данном коллбэке,
                // вместо блока catch(), чтобы мы не теряли исключения от
                // реальных багов в компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: 'Данные не получены'
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>{error}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h2 className='text-center' style={{color:'#03011e'}}>Наши курсы</h2>
                    <Slider className="slider-wrapper">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{background: `url('${item.image}') no-repeat center center`}}
                            >
                                <div className="inner">
                                    <h1>{item.title}</h1>
                                    <span className='nextButton'> > </span>
                                    <p>{item.description}</p>
                                    <a href={item.url}>
                                        <button>{item.button}</button>
                                    </a>
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>


            )
        }
    }
}


export default Index
