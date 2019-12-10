import React, { Component } from 'react';

import { load as loadNoteService } from './../services/notes';

class NoteEditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    try {
      const note = await loadNoteService(id);
      this.setState({
        note
      });
    } catch (error) {
      console.log(error);
    }
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

  render() {
    const note = this.state.note;
    return (
      <main>
        {note && (
          <form>
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
            <button>Edit Note</button>
          </form>
        )}
      </main>
    );
  }
}

export default NoteEditView;
