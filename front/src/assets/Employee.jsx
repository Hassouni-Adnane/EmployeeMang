import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
  margin-bottom: 10px;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`
const Edit = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px;
  background-color: lightgray;
  margin: 0 5px 5px 0;
  cursor: pointer;
  :hover{
    background-color: #4040e1;
    //transition: 0.5s step-start;
  }

`
const Delete = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px;
  background-color: lightgray;
  cursor: pointer;
  :hover{
    background-color: red;
  }
`
const TableContainer = styled.div`
  height: 62vh;
  overflow-x: auto;
`
const Image = styled.img`
  max-height: 50vh;
  aspect-ratio: 16/9;
  width: auto; /* Ensure the image takes up the full width of its container */
  max-width: 100%; /* Limit the image width to its container's width */
  height: auto; /* Allow the height to adjust proportionally based on the aspect ratio */
  border-radius: 50%;
`

function Employee() {
  const navigate = useNavigate('');
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8081/getEmployee')
    .then(res=>{
      if(res.data.Status=='success'){
        setData(res.data.Result)
      }
    })
    .catch(err=>console.log(err))
  },[]);

  return (
    
    <Container>
      <Wrapper>
        <Title>
          Employee Liste
        </Title>
        <LinkLabel to="/creat"><Add>Add Employee</Add></LinkLabel>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>address</th>
                <th>image</th>
                <th>salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((employee, index)=>{
                return <tr key={index}>
                  <td>
                    {employee.name}
                  </td><td>
                    {employee.email}
                  </td><td>
                    {employee.address}
                  </td><td>
                    <Image src={'http://localhost:8081/images/'+employee.image} />
                  </td><td>
                    {employee.salary}
                  </td>
                  <td><Edit onClick={()=>{
                    navigate('/employeeEdit/'+employee.id)
                  }}>Edit</Edit><Delete>Delete</Delete></td>
                </tr>
              })}
            </tbody>
          </Table>
        </TableContainer>
      </Wrapper>
      
    </Container>

  )
}

export default Employee
