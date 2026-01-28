import  { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1️⃣ constructor : Intial Setup");
  }

  componentDidMount() {
    console.log("3️⃣componentDidMout : Component added to Dom First time ");
  }

  componentDidUpdate(prevProps, propsState) {
    console.log("4️⃣componentDidUpate " + prevProps, propsState);
  }
  componentWillUnmount() {
    console.log(" 5️⃣componentWillUnmount : component remove from DOM");
  }
  render() {
    console.log("2️⃣ render: UI render ");
    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Add by 1</button>
      </div>
    );
  }
}
