import React, {Component} from 'react'
import './Tour.scss'

export default class Tour extends Component {
    state = {
        showInfo: false
    };
    
    handleInfo = () => {
        this.setState({
                    showInfo:!this.state.showInfo
        })
    }
    render() {
        const{city, img, info, name, id} = this.props.tour;
        const {removeTour} = this.props; 

        return  <article className='tour'>
                    <div className='img-container'>
                        <img src={img} alt='logo'/>
                    <span className="close-btn" onClick={() => {removeTour(id)}}>
                        <i className="fa fa-window-close" aria-hidden="true" />
                    </span>
                    </div>
                    <div className='tour-info'> 
                        <h3>{city}</h3>
                        <h4>{name}</h4>
                        <h5>info{' '} <span onClick={this.handleInfo}> <i className='fas fa-caret-square-down' /> </span> </h5>
                        {this.state.showInfo && <p>{info}</p>}
                            
                    </div>
                </article>
    }
}
