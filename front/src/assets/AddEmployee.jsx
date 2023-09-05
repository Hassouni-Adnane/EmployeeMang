import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  //border: solid;
  //height: 100vh;
  width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled.h2`
  text-align: center;
  border-bottom: solid;
  padding-bottom: 10px;
`
const Input = styled.input`
  width: 100vh;
  height: 50px;
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  font-size: medium;

`
const Button = styled.button`
  margin-top: 15px;
  padding: 10px;
  background-color: #5555e2;
  border-radius: 10px;
  border: none;
  
`
const Label = styled.p`
  font-size: large;
  font-weight: bold;
`

function AddEmployee() {

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    image: '',
  })

  const handleSubmit = (event =>{
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('email', data.email);
    formdata.append('password', data.password);
    formdata.append('address', data.address);
    formdata.append('image', data.image);

    axios.post('http://localhost:8081/creat', formdata)
    .then(console.log(res))
    .catch(console.log(err));
  })

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>
          Add Employee
        </Title>
        <Label> Name</Label>
        <Input type='text' name='name' id='name' value={data.name} placeholder='Enter name'
        onChange={e=> setData({...data, name: e.target.value})}/>

        <Label> Email</Label>
        <Input type='email' name='email' id='email' value={data.email} placeholder='Enter email'
        onChange={e=> setData({...data, email: e.target.value})}/>

        <Label>Password</Label>
        <Input type='password' name='password' id='password' value={data.password} placeholder='Enter password'
        onChange={e=> setData({...data, password: e.target.value})}/>

        <Label>Address</Label>
        <Input type='text' name='address' id='address' value={data.address} placeholder='Ex: Street 123 ...'
        onChange={e=> setData({...data, address: e.target.value})}/>

        <Label>Select Image</Label>
        <Input type='file' name='image' id='image'
        onChange={e=> setData({...data, image: e.target.files[0]})}/>

        <Button>
          Create
        </Button>
      </form>
    </Container>
  )
}

export default AddEmployee
