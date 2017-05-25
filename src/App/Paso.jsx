/* global fetch */

import React from 'react';
import TipoPaso from './TipoPaso';
import Requisito from './Requisito';

class Paso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pasos: []

        };
    }
    componetWillUpdate(){this.componentWillMount()}
    componentWillMount() {
        var solicitud = new Request(
                'http://[::1]:8080/CasosAcadAppMvn-web/ws/procesodetalle/pasos/' + this.props.idProceso, //'http://pokeapi.co/api/v1/pokemon/1/',//'http://localhost:8080/CasosAcadAppMvn-web/ws/tipopaso',
                {
                    method: 'GET',
                    mode: 'cors',
                    headers: {}//'content-type': 'text/html, text/plain, application/json' }
                }
        );
        fetch(solicitud)
                .then((response) => {
                    return (response.json());
                })
                .then((pasos) => {
                    this.setState({pasos: pasos});
                });
    }

    render() {
        return(
                <div>                
        <ul id="navigationMenu"><h4>Pasos a seguir:</h4>{
                            this.state.pasos.map((paso) => {
                                return (
                                        <li key={paso.idPaso}>
                                            <a className="about" >
                                                <span>
                                                    {"Paso: " + paso.nombre + " -> "+ paso.descripcion}
                                                            <div><Requisito idPaso={paso.idPaso}/></div>       
                                                </span>
                                            </a>
                                        </li>
                                        );

                        })
                        }</ul>
                
                </div>
                    );

    }
}

export default Paso