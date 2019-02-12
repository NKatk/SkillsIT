import React, {Component} from 'react';
import {render} from 'react-dom';

import Greeting from './Greeting';
import SliderCourses from './SliderCourses';
import Events from './Events';
import OurPartnership from './OurParthership';

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div style={{backgroundColor:'#c2b7ff'}}>
                <Greeting/>
                <SliderCourses/>
                <Events/>
                <OurPartnership/>

            </div>
        )
    }
}

export default App
