import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  padding: 0px 20px;
`
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 15px black;
  border-radius: 10px;
  margin: 10px;
`
const Title = styled.h2`
  text-align: center;
  border-bottom: solid;
  padding-bottom: 10px;
`
const Add = styled.button`
  background-color: green;
  border: none;
  margin: auto;
  cursor: pointer;
  font-weight: bold;
`
const LinkLabel = styled(Link)`
  padding: 20px 10px;
  background-color: green;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin: auto;
`

function Employee() {
  return (
    
    <Container>
      <Wrapper>
        <Title>
          Employee Liste
        </Title>
      </Wrapper>
      <LinkLabel to="/creat"><Add>Add Employee</Add></LinkLabel>
    </Container>

  )
}

export default Employee
