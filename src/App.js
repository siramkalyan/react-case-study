
import './App.css';
import React,{useState,useEffect} from 'react';
import Display from './Display';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
function App() {
 const [name,setName]=useState('');
 const [age,setAge]=useState('');
 const [gender,setGender]=useState('Male');
 const [country,setCountry]=useState('India');
 
  const [state,setState]=useState('');
 var usr = [name,age,gender,country];
 var newtest =usr;
var submitInfo =() => 
{
 
setState({usrname : name ,usrage : age , usrgen : gender , usrcou : country });
console.log(state);
newtest.push(name);
newtest.push(age);

} 


  return (
   
    <div className="App"   onClick={() => {submitInfo()}}>
     
     
        <title > User Details </title>
        <h1> User Details </h1>
        <div>
          <label > Enter name </label >
          <input type="text" onChange={(event) => setName(event.target.value)} />
          <p>Hello {name} </p>
        </div>
        <div>
          <label>Enter Age </label>
          <input type="text" onChange={(event) => setAge(event.target.value)} />
          <p>Your age is {age} </p>
          </div>
          <div onChange={(event) => setGender(event.target.value)}>
            <label > Gender </label>
            <input type="radio" id="male" name="gender" value="male"/>
              <label >Male</label>
              <input type="radio" id="female" name="gender" value="female"/>
              <label>Female</label>
              <input type="radio" id="other" name="gender" value="other"/>
              <label >Other</label>
              <p>Your gender is {gender} </p>
            </div>
            <div onChange={(event) => setCountry(event.target.value)}>
      <label>Choose your country:</label>

<select name="Country" id="Country">
  <option value="India">India</option>
  <option value="America">America</option>
  <option value="Canada">Canada</option>
  <option value="Other">Other</option>
</select>
<p> Your Nationality is {country} </p>
    </div>
    <div>
    <button type="click" > Submit </button>
    <Link to="/about" target="_blank">About</Link>
    </div>
    
    <div>
      <table>
      <tr>
    <th>User Name</th>
    <th>Age</th>
    <th>Gender</th>
    <th>Nationality </th>
  </tr>
  <tr>
    <td>{name}</td>
    <td>{age}</td>
    <td>{gender}</td>
    <td>{country}</td>
  </tr>
  
        </table>

   </div>
   <Display name = {newtest[0]}/>
    </div>
     
  );
}
function App1(props)
{
  return(
    <h2> {props.name} name </h2>
);
}
export default App;
