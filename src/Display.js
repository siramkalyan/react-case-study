import React from 'react';
function Display (props)
{
    return(
        <>
        <h3>{props.name.PRe} </h3>
        </>
    )
}
function Display1 (props){
    
   
    return(
    <>
    <table>
    <tr>
  <th> Name </th>
  <th>Age </th>
  <th> Gender </th>
  <th>Country </th>
   </tr>
    <tr>
  <td> {props.name} </td>
  <td> {props.age} </td>
  <td>{props.gender} </td>
  <td>{props.country}</td>
   </tr>
   </table>
    </>);

    }
export default Display;