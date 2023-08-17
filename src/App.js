import React, { useState } from 'react';
import './App.css';
import { Container, Row, Col, Card, Form, Button, Carousel } from 'react-bootstrap';
import FilmList from './components/FilmList';
import FilmForm from './components/FilmForm';

function App() {
  const [films, setFilms] = useState([]);

  const addFilm = title => {
    const newFilm = { id: Date.now(), title };
    setFilms([...films, newFilm]);
  };

  const deleteFilm = id => {
    const updatedFilms = films.filter(film => film.id !== id);
    setFilms(updatedFilms);
  };

  return (
    <div className="app-background">
      <Container className="mt-5">
        <Row>
          <Col md={6} className="mx-auto">
            <Card className="app-card">
              <Card.Body className="text-center">
                <h2 className="app-card-header">
                  <span className="accent-color">Film Listesi</span> Uygulaması
                </h2>
                <FilmForm addFilm={addFilm} />
                {films.length > 0 ? (
                  <FilmList films={films} deleteFilm={deleteFilm} />
                ) : (
                  <p className="mt-3">Henüz film eklenmedi.</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;




