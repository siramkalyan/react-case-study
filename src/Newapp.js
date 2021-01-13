import React ,{ Component }  from 'react';
import App from './App';
import {Link} from 'react-router-dom';
import Display from './Display';
class Component1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: "User" , age : "0",gender:"male",country:"indian"};
      this.submitInfo = this.submitInfo.bind(this);
    }
    submitInfo(e)
   {    e.preventDefault();
    alert(this.state.name);
   };
  updateName(e)
    { 
        
      this.setState({name: e.target.value})
      
    }
    updateAge(e)
    {
        this.setState({age : e.target.value});
    }
    updateGender(e)
    {
        this.setState({gender : e.target.value});
    }
    updateCountry(e)
    {
        this.setState({country:e.target.value});
    }
    render() {
      return (
        <div className="App">
        
        <h1> User Details </h1>
            <div>
          <label>Enter Name</label>
          <input type="text" onChange={this.updateName.bind(this)}/>
          <h2>hello {this.state.name}</h2>
          </div>
          <div>
          <label>Enter Age</label>
          <input type="text" onChange={this.updateAge.bind(this)}/>
          <h2> Your age is {this.state.age}</h2>
          </div>
          <div onChange={this.updateGender.bind(this)}>
          <label>gender :    </label>
          <label >male </label>
          <input type="radio" value="male" id="male" />
          <label >  Female</label>
          <input type="radio" value="Female" id="Female" />
          <label >Other</label>
          <input type="radio" value="Other" id="Other" />
          <h2> Your gender is {this.state.gender}</h2>
        </div>
        <div onChange={this.updateCountry.bind(this)}>
                <label>Enter nationality </label>
                <select name="Nations" id="nations">
  <option value="India">india</option>
  <option value="America">america</option>
  <option value="Canada">Canada</option>
  <option value="Other">Other</option>
</select>
        </div>
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Nation </th>
                    </tr>
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.age}</td>
                        <td>{this.state.gender}</td>
                        <td>{this.state.country}</td>
                        </tr>
                        </table>

        </div>
        <div>
            <button onClick={this.submitInfo}  type="button">Submit</button>
            <Link to="/about" target="_blank">About</Link>
            <Display name={this.props.name} />
        </div>
            </div>
        
      );
    }
  }
  
  export default Component1;