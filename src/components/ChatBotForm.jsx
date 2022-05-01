import PropTypes from "prop-types";
import React, { Component } from "react";
import { InputGroup } from "./InputGroup/InputGroup";
import drag from "../image/drag.png";

export class ChatBotForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diffX: 0,
      diffY: 0,
      dragging: false,
      styles: {},
    };

    this._dragStart = this._dragStart.bind(this);
    this._dragging = this._dragging.bind(this);
    this._dragEnd = this._dragEnd.bind(this);
  }

  _dragStart(e) {
    this.setState({
      diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
      diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
      dragging: true,
    });
  }

  _dragging(e) {
    if (this.state.dragging) {
      var left = e.screenX - this.state.diffX;
      var top = e.screenY - this.state.diffY;
      console.log("left", left);
      console.log("top", top);

      this.setState({
        styles: {
          left: left,
          top: top,
        },
      });
    }
  }

  _dragEnd() {
    this.setState({
      dragging: false,
    });
  }

  render() {
    const { currLocation } = this.props;
    console.log("currLocation", currLocation);

    return (
      <div
        className="chat_bot_modal"
        style={this.state.styles}
        onMouseDown={this._dragStart}
        onMouseMove={this._dragging}
        onMouseUp={this._dragEnd}
      >
        <p className="waterMark">Firoz khan</p >
        <div className="chat_body">
          <div className="head">
            <h4>Chat Bot</h4>
          </div>
          <div className="body">
            <InputGroup name="street" label={"Street"} />
            <InputGroup name="city" label={"City"} value={currLocation.city} />
            <InputGroup name="state" label={"State"} value={currLocation.state}/>
            <InputGroup name="country" label={"Country"} value={currLocation.country}/>
            <InputGroup name="zipCode" label={"Zip Code"} value={currLocation.zip}/>
            <InputGroup name="ipv4" label={"IPv4"} value={currLocation.query}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatBotForm;
