import React from "react";

class ComponentAddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const title = event.target.value;
    const remainingChars = Math.max(0, this.state.charLimit - title.length);

    if (remainingChars < 1) {
      event.preventDefault();
      return;
    }

    if (title.length <= this.state.charLimit) {
      this.setState({
        title: title,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    if (this.state.title.trim() === "" || this.state.body.trim() === "") {
      alert("Judul dan catatan tidak boleh kosong!");
      return;
    }

    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: "",
    });
  }

  render() {
    const remainingChars = Math.max(
      0,
      this.state.charLimit - this.state.title.length
    );
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa Karakter: {remainingChars}
        </p>
        <form onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            id="judul"
            placeholder="Masukkan judul..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            id=""
            cols="30"
            rows="10"
            placeholder="Masukkan catatan..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ComponentAddNote;
