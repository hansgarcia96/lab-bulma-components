import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import FormField from "./components/FormField";
import CoolButton from "./components/CoolButton";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField
          label="Email"
          type="email"
          placeholder="e.g. alexsmith@gmail.com"
        />
        <CoolButton />
      </div>
    );
  }
}

export default App;
