import React, {Component} from 'react';
import CarouselSlider from 'react-carousel-slider';



class OurPartnership extends Component{
    constructor(){
        super();
        super();
        this.state = {
            partnership:[],
            images:[
                {"src": "images/ain.jpg", "link": "www.ain.ua"},
                {"src": "images/ciklum.jpg", "link": "www.ciklum.com"},
                {"src": "images/cisco.jpg", "link": "www.cisco.com"},
                {"src": "images/epam.jpg", "link": "www.epam-group.ru"},
                {"src": "images/softserve.jpg", "link": "www.softserveinc.com"},
                {"src": "images/luxsoft.jpg", "link": "www.luxoft.com"}
            ],
            error: null
        }
    }

    componentDidMount(){
        fetch('/api/getThisPartnerShip')
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        partnership: result
                    });
                },

                (error) => {
                    this.setState({
                        error: "Данные не получены"
                    });
                }
            );
        console.log(this.state.partnership);
    }


    render() {
        const {partnership} = this.state;
        var par = partnership.map(function (item){
            return par = item;
        });
        /*console.log('_______>' + par);*/
            let iconItemsStyle = {
                padding: "0px",
                background: "transparent",
                margin:"0 30px",
                height: "50%"
            };

            let circleIcon = {
                borderRadius: "20%"
            };

            let iconsSlides = this.state.images.map((item, index) =>
                <div key = {index} >
                    <a href={item.link}><img style = {circleIcon} src = {item.src} ></img></a>
                </div>
            );

            let icons = (<CarouselSlider
                sliderBoxStyle = {{height: "250px", width: "80%", background: "transparent"}}
                accEle = {{dots: false}}
                slideCpnts = {iconsSlides}
                itemsStyle = {iconItemsStyle}
                buttonSetting = {{placeOn: 'middle-outside'}}
            />);

            return (<div style = {{position:"relative", margin: "0 auto", width: "80%"}} >
                {icons}
            </div>);
    }
}

export default OurPartnership
