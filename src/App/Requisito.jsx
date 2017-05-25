/* global fetch */

import React from 'react';
import TipoRequisito from './TipoRequisito';
class Requisito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Requisitos: []

        };
    }

    componentWillMount() {
        var solicitud = new Request(
                'http://[::1]:8080/CasosAcadAppMvn-web/ws/pasorequisito/requisito/' + this.props.idPaso, //'http://pokeapi.co/api/v1/pokemon/1/',//'http://localhost:8080/CasosAcadAppMvn-web/ws/tipopaso',
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
                .then((Requisitos) => {
                    this.setState({Requisitos: Requisitos});
                });
    }

    render() {
        return(
                <div className="well well-sm">
                    <p>Lista de Requisitos:</p>
                    {
                        this.state.Requisitos.map((req) => {
                            return (
                                        <p key={req.idRequisito}>{req.idRequisito+" -> "+req.nombre + ". Descripción:   " + req.descripcion}</p>
                                    );
                    })
                    }</div>
                    );
    }
}



export default Requisito