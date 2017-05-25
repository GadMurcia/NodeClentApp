/* global fetch */

import React from 'react';
import Paso from './Paso';

class Proceso extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proceso: []

        };
    }

    componentWillMount() {
        var solicitud = new Request(
                'http://[::1]:8080/CasosAcadAppMvn-web/ws/proceso', //'http://pokeapi.co/api/v1/pokemon/1/',//'http://localhost:8080/CasosAcadAppMvn-web/ws/tipopaso',
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
                .then((proceso) => {
                    this.setState({proceso: proceso});

                });
    }
    render() {
        if (this.state.proceso.length > 0) {
            return (
                    <div>
                        {
                            this.state.proceso.map((proceso) => {

                                return (
                                                <div key={proceso.idProceso} className="jumbotron">
                                                    <div  className="panel panel-success">                                            
                                                        <h1>{"Proceso: "+proceso.nombre}</h1>
                                                        <p>{"Descripción:   "+proceso.descripcion}</p>
                                                        <p><a id="sol" className="btn btn-primary btn-lg">Solicitar</a></p>                                            
                                                        <Paso idProceso={proceso.idProceso}/>
                                                    </div>
                                            
                                                </div>

                                        );
                        })
                        }</div>
                        );
        } else {
            return <p className="text-center">Cargando Los procesos ...</p>;
        }
    }

}
export default Proceso