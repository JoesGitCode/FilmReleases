import React, {Component} from 'react'

class Film extends Component {
    render(){
        return(
            <div className="film">
                <h2>{this.props.title}</h2>
            </div>
        );
    }

}

export default Film