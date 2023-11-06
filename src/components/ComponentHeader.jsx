import React from "react";
import ComponentSearch from "./ComponentSearch";

class ComponentHeader extends React.Component {
  render() {
    return (
      <div className="note-app__header">
        <h1>Note App</h1>
        <ComponentSearch onSearchChange={this.props.onSearchChange} />
      </div>
    );
  }
}

export default ComponentHeader;
