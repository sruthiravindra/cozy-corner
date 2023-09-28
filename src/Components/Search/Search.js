import React from 'react'
import { Container, FormGroup, Col, Row } from 'react-bootstrap'
import { Button, Form, Input, Label } from 'reactstrap'
import './search.css'
import axios from 'axios'
import {googleBookApiConfig} from '../../app/shared/google-book-api-config'
const Search = ({ setSearch, search, books,setBooks }) => {


  const searchBooks = () =>{

    axios.get(googleBookApiConfig.url + '&q='+search+'&maxResults=20')
    .then(res=>{
      setBooks(res.data.items)
    })
    .catch(err=>console.log(err))
  }

  return (
    <section className='search-sec'>
      <Container>
        <Form>
          <Row>
            <Col className='col-8'>
              <FormGroup>
                <Label for="textSearchStr" hidden>Enter Book To Search</Label>
                <Input
                  id="textSearchStr"
                  name="textSearchStr"
                  placeholder='Enter Book To Search'
                  type='text'
                  className='search-slt'
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </FormGroup>
            </Col>
            <Col>
              <Button className='mx-1' onClick={searchBooks}>
              <i className="fa fa-search fa-lg" />
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Form>
      </Container>
    </section>
  )
}

export default Search