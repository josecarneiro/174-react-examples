import React, { Component } from 'react';

import { create as createNoteService } from './../services/notes';

class NoteEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        content: '',
        image: null
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    console.log(this.props);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    this.setState({
      // [name]: value
      note: {
        ...this.state.note,
        [name]: value
      }
    });
    /*
    this.setState(previousState => ({
      note: {
        ...previousState.note,
        [name]: value
      }
    }));
    */
  }

  async handleFormSubmission(event) {
    event.preventDefault();
    const note = this.state.note;
    console.log(note);
    try {
      const noteDocument = await createNoteService(note);
      const id = noteDocument._id;
      this.props.history.push(`/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  handleFileChange(event) {
    console.dir(event.target.files);
    const file = event.target.files[0];
    this.setState({
      note: {
        ...this.state.note,
        image: file
      }
    });
  }

  render() {
    const note = this.state.note;
    return (
      <main>
        {note && (
          <form onSubmit={this.handleFormSubmission}>
            <input
              type="text"
              placeholder="Title"
              value={note.title || ''}
              name="title"
              onChange={this.handleInputChange}
            />
            <textarea
              placeholder="Content"
              value={note.content || ''}
              name="content"
              onChange={this.handleInputChange}
            ></textarea>
            <input type="file" name="image" onChange={this.handleFileChange} />
            <button>Create Note</button>
          </form>
        )}
      </main>
    );
  }
}

export default NoteEditView;
