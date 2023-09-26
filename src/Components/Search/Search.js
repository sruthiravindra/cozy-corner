import React from 'react'
import { Container, FormGroup, Col, Row } from 'react-bootstrap'
import { Button, Form, Input, Label } from 'reactstrap'
import './search.css'

const Search = () => {
  return (
    <section className='search-sec'>
      <Container>
        <Form>
          <Row>
          <Col className='col-8'>
            <FormGroup>
              <Label for="textSearchStr" hidden>Enter Search String</Label>
              <Input
                id="textSearchStr"
                name="textSearchStr"
                placeholder='Enter Search String'
                type='text'
                className='search-slt'
              />
            </FormGroup>
          </Col>
          <Col>
            <Button className='btn btn-danger wrn-btn'>
              Search
            </Button>
          </Col>
          </Row>

        </Form>
      </Container>
    </section>
  )
}

export default Search