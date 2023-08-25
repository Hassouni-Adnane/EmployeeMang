import React, { useState, useNavigate } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    margin: auto;
    justify-content: center;
    width: 90vh;
    height: 80vh;
    //background: rgba(0, 0, 255, 0.5);;
`
const Title = styled.h1`
    //background-color: lightcoral;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Input = styled.input`
    //margin: 5em;
    //border: solid green;
    padding: 10pt 0pt;
    background-color: lightblue;
    border: none;
    width: 70vh;
`
const Wrraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const P = styled.p`
    font-weight: bold;
`
const D = styled.p`
    color: red;
    font-weight: bold;
`
const Button = styled.button`
    padding: 10pt;
    background-color: lightgreen;
    border: none;
    cursor: pointer;
    margin: 30pt 0pt;
    width: 70vh;
`

function Login() {
    const [error, setError] = useState('');
    const [text, setText] = useState({
        user: '',
        psw: '',
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/login', text)
        .then(res => {
            if(res.data.Status==="success"){
                navigate('/')
            }
            else{setError(res.data.Error);}
        })
        .catch(err => console.log(err));
    }

  return (
    <Container>
      <Wrraper>
      <form onSubmit={handleSubmit}>
        <Title>
            Login
        </Title>
            <D>{error && error}</D>
            <P>Enter your user name: </P>
            <Input type='text' name='user' onChange={e => setText({...text, user: e.target.value})}/>
            <P>Enter your password: </P>
            <Input type='password' name='psw' onChange={e => setText({...text, psw: e.target.value})}/>
            <div><Button>Submit</Button></div>
        </form>
      </Wrraper>
    </Container>
  )
}

export default Login
