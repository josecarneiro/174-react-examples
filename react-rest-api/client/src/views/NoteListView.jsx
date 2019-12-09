import React, { Component } from 'react';

import { list as listNoteService } from './../services/notes';

class NoteListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  async componentDidMount() {
    try {
      const notes = await listNoteService();
      this.setState({
        notes
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <main>
        {this.state.notes.map(note => (
          <div key={note._id}>
            <h1>{note._id}</h1>
          </div>
        ))}
      </main>
    );
  }
}

export default NoteListView;
