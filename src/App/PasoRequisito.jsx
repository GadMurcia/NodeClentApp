/* global fetch */

import React from 'react';
import Paso from './Paso';
import Requisito from './Requisito';

class PasoRequisito extends React.Component {

    render() {
        return (
                <div key={this.props.pasorequisito.idPasoRequisito} className="list-group">
                    <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">{this.props.pasorequisito.idPasoRequisito} - 
                            {this.props.pasorequisito.nombre}</h4>
                        <p className="list-group-item-text">{this.props.pasorequisito.descripcion}</p>   
                        <div><Paso  paso={this.props.pasorequisito.idPaso}/></div>
                        <div><Requisito requisito={this.props.pasorequisito.idRequisito}/></div>
                    </a>
                
                </div>

                );
    }

}

export default PasoRequisito