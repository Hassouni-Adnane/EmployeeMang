import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  margin: 15px 0px;
  padding: 10px;
  background-color: #5555e2;
  border-radius: 10px;
  border: none;
  cursor: pointer;  
`
const Label = styled.p`
  font-size: large;
  font-weight: bold;
`
const CustomButton = styled.label`
  text-align: start;
  height: 50px;
  width: 110px;
  background-color: #5555e2;
  color: white;
  border-top-left-radius: 5px;  
  border-bottom-left-radius: 5px;
  cursor: pointer;
  font-weight: medium;
  z-index: 2;
`;
const FileInputContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;
const CustomFileInput = styled.input`
  position: relative;
  right: 105px;
  width: 100vh;
  height: 50px;
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  font-size: medium;
  font-weight: medium;

`;

function AddEmployee() {

  const navigate = useNavigate();

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
    .then(res=>{
      navigate('/employee')
    })
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
        <FileInputContainer>
          <CustomButton htmlFor="image">
            Choose an Image
          </CustomButton>
          <CustomFileInput type='file' name='image' id='image'
          onChange={e=> setData({...data, image: e.target.files[0]})}/>
        </FileInputContainer>
        <Button>
          Create
        </Button>
      </form>
    </Container>
  )
}

export default AddEmployee
