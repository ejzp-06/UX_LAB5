import React, {Component} from 'react';

class Classes extends Component {

    constructor(props){
        super(props);
        this.listItem = this.listItem.bind(this);
          this.state = {
          Classes: [{nombreClase:"Teoria de bases de datos",codigoClase:"132"},
          {nombreClase: "Experiencia de Usario",codigoClase:"211"},
          {nombreClase: "Italiano IV",codigoClase:"217"}]
        };
    }

    
    render() {
        return(
            <ul>{this.state.Classes.map(this.listItem)}</ul>
        );
    }
    listItem(item) {return (<li key={item.nombreClase}>{item.nombreClase} {item.codigoClase}</li>);}
    
}

export default Classes;