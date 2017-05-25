/* global fetch */

import React from 'react';
import Proceso from './Proceso';
import PasoRequisito from './PasoRequisito';

class ProcesoDetalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            procesodetalle: []

        };
    }

    componentWillMount() {
        var solicitud = new Request(
                'http://[::1]:8080/CasosAcadAppMvn-web/ws/procesodetalle', //'http://pokeapi.co/api/v1/pokemon/1/',//'http://localhost:8080/CasosAcadAppMvn-web/ws/tipopaso',
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
                .then((procesodetalle) => {

                    this.setState({procesodetalle: procesodetalle});
                });
    }
    render() {
        if (this.state.procesodetalle.length > 0) {
            return (
                    <div>
                        {
                            this.state.procesodetalle.map((procesodetalle) => {

                                return (
                                                <div  key={procesodetalle.idProcesoDetalle} className="list-group">
                                                    <button  className="list-group-item">
                                                        <h4 className="list-group-item-heading">{procesodetalle.idProcesoDetalle}</h4>
                                                        <p className="list-group-item-text">{procesodetalle.descripcion}</p> 
                                                        <Proceso proceso={procesodetalle.idProceso}/>
                                                        <PasoRequisito pasorequisito={procesodetalle.idPaso}/>                                                        
                                                    </button>                                            
                                                </div>

                                        );
                        })
                        }</div>
                        );
        } else {
            return <p className="text-center">Cargando Los procesodetalles ...</p>;
        }
    }

}

export default ProcesoDetalle
