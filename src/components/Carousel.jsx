import React, { Component } from 'react'
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'


class Carousel extends Component {
    state = {
        open: false
    }

    componentDidMount(){
        if(this.props.open){
            this.setState({open: true})
        }
    }

    render() { 
        return ( 
            <AutoRotatingCarousel
                label='Get started'
                open={this.state.open}
                onClose={() => this.setState({ open: false })}
                onStart={() => this.setState({ open: false })}
                style={{ position: 'inherit' }}
            >
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' alt="..."/>}
                    title='This is a very cool feature'
                    subtitle='Just using this will blow your mind.'
                />
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' alt="..." />}
                    title='Ever wanted to be popular?'
                    subtitle='Well just mix two colors and your are good to go!'
                />
                <Slide
                    media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' alt="..." />}
                    title='May the force be with you'
                    subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
                />
            </AutoRotatingCarousel>
        )
    }
}

export default Carousel