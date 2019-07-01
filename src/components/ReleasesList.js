import React, {Component} from 'react'
import Film from './Film.js'

class ReleasesList extends Component {

    render(){

        const filmTitles = this.props.films.map(film => {
            return (
                <Film 
                title={film.title}
                key={film.id}
                >
                </Film>
            )
        })

        return(
            <div className="film">
                <ul>
                    <li>{filmTitles}</li>
                </ul>
            </div>
        );
    }

}

export default ReleasesList