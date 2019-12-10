import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { load as loadNoteService } from './../services/notes';

class NoteListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
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

  render() {
    const note = this.state.note;
    const id = this.props.match.params.id;
    return (
      <main>
        {note && (
          <div>
            <img src={note.image} />
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <Link to={`/${id}/edit`}>Edit Note</Link>
          </div>
        )}
      </main>
    );
  }
}

export default NoteListView;
