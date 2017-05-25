import React from 'react';

class TipoPasoRow extends React.Component {
    

    render() {

        return(
                <div className="alert alert-dismissible label-default">
  <div type="button" className="close" data-dismiss="alert">
  {((this.props.activo)? 
  <p className="btn btn-success">Activo</p> : 
  <p className="btn btn-danger">Inactivo</p>)}</div>
  <h4>Tipo de Paso: {this.props.id} - {this.props.nombre}</h4>
  <p>{this.props.desc}. </p>
</div>
                );

    }
}

export default TipoPasoRow
