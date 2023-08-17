import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

function FilmList({ films, deleteFilm }) {
  return (
    <ListGroup>
      {films.map(film => (
        <ListGroup.Item key={film.id}>
          {film.title}
          <Button
            variant="danger"
            size="sm"
            className="float-right"
            onClick={() => deleteFilm(film.id)}
          >
            Sil
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default FilmList;
