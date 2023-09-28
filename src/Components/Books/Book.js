import React from 'react'
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardLink } from 'reactstrap'
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import '../../app/assets/css/book.css'

function Book({ book }) {
  const { id, name } = { "id": "/", "name": "book" };
  const volumeInfo = book.volumeInfo;
  if (volumeInfo.imageLinks != undefined) {
    return (
      <Link to='/'>
        <div className='card'>
          <img
            alt="Card"
            src={volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail}
          />
          <div className='bottom'>
            <h3>{volumeInfo.title}</h3>
            <h4>{volumeInfo.subtitle}</h4>
          </div>
        </div>
      </Link>
    )
  }

}

export default Book