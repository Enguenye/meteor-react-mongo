import React, { Component } from 'react';
import WeekForecast from "./WeekForecast.js";
 
class MonthForecast extends Component {
    render() {
        return (
            <div>
                <div className="row text-center bg-primary">
          <div className="col-sm">
          Monthly forecast        
          </div>
        </div>
                 
                <div><WeekForecast week='1'/></div>
                <div><WeekForecast week='2'/></div>
                <div><WeekForecast week='3'/></div>
                <div><WeekForecast week='4'/></div>
            </div>
        );
    }
}

export default MonthForecast;