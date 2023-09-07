import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

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
  padding: 10px;
  background-color: lightgray;
  margin-right: 5px;
  cursor: pointer;
  :hover{
    background-color: gray;
    //transition: 0.5s step-start;
  }
`
const Delete = styled.button`
  padding: 10px;
  background-color: lightgray;
  cursor: pointer;
  :hover{
    background-color: gray;
  }
`
const TableContainer = styled.div`
  height: 62vh;
  overflow-x: auto;
`;

function Employee() {

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
                    {employee.image}
                  </td><td>
                    {employee.salary}
                  </td>
                  <td><Edit>Edit</Edit><Delete>Delete</Delete></td>
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
