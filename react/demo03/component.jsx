import React from "react";

export class Box extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export class Button extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.label}</button>;
  }
}

export class Input extends React.Component {
  get value() {
    return this.state.value;
  }
  render() {
    return (
      <input
        type="text"
        value={this.props.defaultValue}
        onInput={event => {
          this.setState({
            value: event.target.value
          });
        }}
      />
    );
  }
}

export class PopupMenu extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectValue: props.defaultValue,
      active: false
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              active: true
            });
          }}
        >
          {this.state.selectValue}
        </button>
        <ul
          style={{
            display: this.state.active ? "block" : "none"
          }}
        >
          {this.props.items.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.setState({
                    active: false,
                    selectValue: item
                  });
                  if (this.props.onChange) {
                    this.props.onChange(item);
                  }
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

PopupMenu.defaultProps = {
  selectValue: "undefined",
  active: false
};
