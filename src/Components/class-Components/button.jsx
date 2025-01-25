import { Component } from "react";
import Card from "../card/card";
import CardBootstrap from "../card/card-bootstrap";

class ButtonComponentClass extends Component {
  state = {
    text1: "Subscribe",
    text2: "Subscribed",
    isSubscribe: false,
  };
  SubscribeHandler = () => {
    return (
      <>
        {this.setState({
          isSubscribe: !this.state.isSubscribe,
        })}
      </>
    );
  };
  render() {
    return (
      <>
        <button onClick={this.SubscribeHandler}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>
        {this.state.isSubscribe ? (
          <>
            <h2>Thanks for Subscribing,enjoy the premium content.</h2>
            <CardBootstrap />
          </>
        ) : (
          <h2>Please SubScribe , to see premium content.</h2>
        )}
      </>
    );
  }
}
export default ButtonComponentClass;
