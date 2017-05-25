import React from 'react';
import TipoPasoRow from './TipoPasoRow';

class TipoPaso extends React.Component {


    render() {
        
            return (
                    <div>
                        
                               <TipoPasoRow 
                                        key={this.props.tipopaso.idTipoPaso}
                                        nombre={this.props.tipopaso.nombre}
                                        activo={this.props.tipopaso.activo}
                                        id={this.props.tipopaso.idTipoPaso}
                                        desc={this.props.tipopaso.descripcion} />
                        
                        </div>
                        );
    }

}

export default TipoPaso