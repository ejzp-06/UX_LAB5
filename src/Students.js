import React, {Component} from 'react';


class Student extends Component{

    constructor(props){
        super(props);
        this.listItem = this.listItem.bind(this);
          this.state = {
          Students: [{nombre: "Eduardo",apellido:"Zepeda",numeroCuenta:"21711058"},{nombre: "Luis",apellido:"Ponce",numeroCuenta:"21711059"},{nombre: "Michael",apellido:"Sanchez",numeroCuenta:"21711060"}]
        };
    }

    render() {
        return(
            <ul>{this.state.Students.map(this.listItem)}</ul>
        );
    }
    listItem(item) {return (<li key={item.nombre}>{item.numeroCuenta} {item.nombre} {item.apellido}</li>);}
}


export default Student;
