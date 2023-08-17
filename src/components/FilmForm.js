import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function FilmForm({ addFilm }) {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addFilm(title);
    setTitle('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Film Adı</Form.Label>
        <Form.Control
          type="text"
          placeholder="Film adı girin"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ekle
      </Button>
    </Form>
  );
}

export default FilmForm;
