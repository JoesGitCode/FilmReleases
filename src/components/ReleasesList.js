import React, {Component} from 'react'
import Film from './Film.js'

class ReleasesList extends Component {

    render(){

        const filmTitles = this.props.films.map(film => {
            return (
                <li>
                    <a href={film.url}>
                    <Film 
                    
                    title={film.title}
                    key={film.id}
                    >
                    </Film>
                    </a>
                </li>

            )
        })

        return(
            <div className="film">
                <ul>
                    {filmTitles}
                </ul>
            </div>
        );
    }

}

export default ReleasesList