import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 8px 5px 15px black;
  margin: 20pt;
  flex: 1;
  border-radius: 20px;
`
const Title = styled.h2`
  border-bottom: solid;
  padding-bottom: 20px;
  font-style: oblique;
  text-align: center;
`
const Content = styled.h3`
  font-weight: bold;
  font-style: oblique;
`

function Home() {
  return (
    <>

      <Container>

        <Wrapper>
          <Title>
            Admin
          </Title>
          <Content>
            Total:
          </Content>
        </Wrapper>

        <Wrapper>
          <Title>
            Employee
          </Title>
          <Content>
            Total:
          </Content>
        </Wrapper>
        
        <Wrapper>
          <Title>
            Salary
          </Title>
          <Content>
            Total:
          </Content>
        </Wrapper>

      </Container>
      <Container>

        <Wrapper>
          <Title>
            Liste of Admins
          </Title>
          <Content>

          </Content>
        </Wrapper>

      </Container>

    </>
  )
}

export default Home
