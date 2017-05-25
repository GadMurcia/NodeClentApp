/* global fetch */

import React from 'react';

class TipoRequisito extends React.Component {
    render() {
        return (
<div>
    <p>tiporequisito: {this.props.tiporequisito.idTipoRequisito} - {this.props.tiporequisito.nombre} - 
        {((this.props.tiporequisito.activo)? " Acivo ": " Inactivo ")} => {this.props.tiporequisito.descripcion}</p>
</div>
        );
    }

}


export default TipoRequisito