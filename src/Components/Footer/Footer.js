import React from 'react'
import { Row, Col, Container } from "reactstrap";
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className='footer'>
      <footer className='site-footer'>
        <Container>
          <Row>
            <Col className='text-center'>
              <ul className='list-unstyled mt-5 flex flex-wrap items-center justify-center md:justify-start'>
                <li className='me-4'>
                  <Link to='/'>Home</Link>
                </li>
                <li className='me-4'>
                  <Link to='/'>Books</Link>
                </li>
                <li className='me-4'>
                  <Link to='/'>About</Link>
                </li>
                <li className='me-4'>
                  <Link to='/'>Contact Us</Link>
                </li>
              </ul>
              <hr class="my-5"></hr>
              <span>
                <a
                  className='btn btn-social-icon btn-instagram'
                  href='http://instagram.com/'
                >
                  <i className='fa fa-instagram' />
                </a>{' '}
                <a
                  className='btn btn-social-icon btn-facebook'
                  href='http://www.facebook.com/'
                >
                  <i className='fa fa-facebook' />
                </a>{' '}
                <a
                  className='btn btn-social-icon btn-twitter'
                  href='http://twitter.com/'
                >
                  <i className='fa fa-twitter' />
                </a>{' '}
                <a
                  className='btn btn-social-icon btn-google'
                  href='http://youtube.com/'
                >
                  <i className='fa fa-youtube' />
                </a>
              </span>
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  )
}

export default Footer