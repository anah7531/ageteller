import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "./App.css";
import AgeStats from "./AgeStats";

class App extends Component {
  constructor() {
    super();

    this.state = {
      newDate: "",
      birthday: "2023-02-06",
      showStats: false,
    };
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true });
  }

  render() {
    return (
      <div className="App">
        <Form inline="true">
          <h2>Input your birthday!</h2>
          <FormControl
            type="date"
            onChange={(event) => this.setState({ newDate: event.target.value })}
          ></FormControl>
          {"  "}
          <Button onClick={() => this.changeBirthday()}> Submit </Button>
          {this.state.showStats ? (
            <div className="fade ageStats">
              {" "}
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div></div>
          )}
        </Form>
      </div>
    );
  }
}

export default App;
