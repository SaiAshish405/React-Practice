import { Component } from "react";
import ButtonComponent from "../../buttons/button";

class EmployeeComponent extends Component {
  state = {
    EmployeeData: [
      { name: "Ashish", salary: 40000 },
      { name: "Sai", salary: 10000 },
      { name: "Hai", salary: 15000 },
      { name: "Bye", salary: 20000 },
      { name: "Hey", salary: 25000 },
      { name: "Say", salary: 30000 },
      { name: "Guy", salary: 35000 },
      { name: "May", salary: 45000 },
    ],
    FilterData: [],
  };
  AllSalary = () => {
    console.log("clicked");
    this.setState({
      FilterData: this.state.EmployeeData,
    });
  };
  LessThan20k = () => {
    const newData = this.state.EmployeeData.filter(
      (data) => data.salary < 20000
    );
    this.setState({
      FilterData: newData,
    });
  };
  Between20k_30k = () => {
    const newData = this.state.EmployeeData.filter(
      (data) => data.salary > 20000 && data.salary < 30000
    );
    this.setState({
      FilterData: newData,
    });
  };
  GreaterThan30k = () => {
    const newData = this.state.EmployeeData.filter(
      (data) => data.salary > 30000
    );
    this.setState({
      FilterData: newData,
    });
  };
  render() {
    const DisplayData =
      this.state.FilterData.length > 0
        ? this.state.FilterData
        : this.state.EmployeeData;
    return (
      <>
        <ol>
          {DisplayData.map((eachEmp, index) => {
            return <li key={index}>{`${eachEmp.name} - ${eachEmp.salary}`}</li>;
          })}
        </ol>
        <ButtonComponent text="< 20000" onPress={this.LessThan20k} />
        <ButtonComponent text="20k - 30k" onPress={this.Between20k_30k} />
        <ButtonComponent text="> 30000" onPress={this.GreaterThan30k} />
        <ButtonComponent text="All" onPress={this.AllSalary} />
      </>
    );
  }
}
export default EmployeeComponent;
