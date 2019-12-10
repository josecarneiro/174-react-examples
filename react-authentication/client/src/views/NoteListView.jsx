import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <Link key={note._id} to={`/${note._id}`}>
            {(note.title && <h1>{note.title}</h1>) || <h5>Note has no title</h5>}
          </Link>
        ))}
      </main>
    );
  }
}

export default NoteListView;
