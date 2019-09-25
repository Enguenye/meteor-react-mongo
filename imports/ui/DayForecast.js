import React, { Component } from 'react';
 
export default class DayForecast extends Component {
  render() {
    return (
      <div className="col-sm">
           <p>{this.ponerimagen(this.props.report.status)}</p>
        <p>{this.props.report.dayName}</p>
        <p>{this.props.report.minTemp}</p>
        <p>{this.props.report.maxTemp}</p>
        <p>{this.props.report.status}</p>
      </div>
    );
  }
  ponerimagen(estado){
    if(estado=="Sunny nice"){
        return(<img src= "https://solarsystem.nasa.gov/system/basic_html_elements/11561_Sun.png"></img> );
    }
    else if(estado=="Mostly sunny"){
        return(<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYuk-ert5kS8h_CMX5BzWIRteNgxOqZKAvrHUFX-IaRil_XwYa"></img> );
    }
    else {
        return(<img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6t8mKZU_dq-LRGku4zEASv4zUcQR2rkzrs2xzCbUpPK7A5t_Sg"></img> );
    }
  }
  
}