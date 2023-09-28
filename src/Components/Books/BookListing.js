import React from 'react'
import Book from './Book'
import { Row, Col } from 'reactstrap'
function BookListing({ books,setBooks }) {
  return (
    <section className='sec-booklisting'>
      <Row className="ms-auto" md="5"
    sm="3"
    xs="1"  >
        {
          books.map((book) => {
            return <Col className="m-4" >
              <Book book={book} />
              </Col>
          })
        }
      </Row>
    </section>
  )
}

export default BookListing