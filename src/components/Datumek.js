import React from "react";

class Datumek extends React.Component {
  state = {};

  getWeekDay = () => {
    const today = new Date();
    const dayNumber = today.getDay();

    let weekDay = "";

    switch (dayNumber) {
      case 1:
        weekDay = "monday";
        break;
      case 2:
        weekDay = "tuesday";
        break;
      case 3:
        weekDay = "wednesday";
        break;
      case 4:
        weekDay = "thursday";
        break;
      case 5:
        weekDay = "friday";
        break;
      case 6:
        weekDay = "saturday";
        break;
      case 0:
        weekDay = "sunday";
        break;
      default:
        weekDay = "";
    }
    return weekDay.toUpperCase()
  };
  
  render() {
    return (
      <div className="datumek">
        <p>
          {this.props.list.length !== 0 ? `Your tasks for ${this.getWeekDay()}:` : ""}
        </p>
      </div>
    )
  }
}

export default Datumek;
