import React from "react";

class ComponentSearch extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          id="search"
          placeholder="Cari..."
          value={this.props.searchKeyword}
          onChange={this.props.onSearchChange}
        />
      </form>
    );
  }
}

export default ComponentSearch;
