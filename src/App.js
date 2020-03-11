import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  var person = {
    name: "Md. Mahbubur Rahman",
    mobile_number : "01913351885",
  }
  const names =
   [{name:'Plain', price:'99.99'}, 
   {name:'China', price:'89.99'},
   {name:'Airmate', price:'79.99'},
   {name:'Cycle', price:'69.99'},
   {name:'Jump', price:'59.99'},
   {name:'Cloth', price:'49.99'}
  ]
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         <ul>
            {names.map(na=><li>{na.name}</li>)}
         </ul> 
      
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        {
          names.map(na=> <Person na={na}></Person>)
        }
        <Person name ={names[0].name} price = {names[0].price}></Person>
        <Person name = {names[1].name} price = {names[1].price}></Person>
        <Person name = {names[2].name} price = {names[2].price}></Person>
        <Person name = {names[3].name} price = {names[3].price}></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Core-Concept
         
        </a>
        <h1 style = {{backgroundColor: "lightSalmon", color: "black" }}>He is {person.name}. His Mobile # is {person.mobile_number}</h1>
        <p>I am a react Person.</p>
      </header>
    </div>
  );
}
function Person(props) {
  const style = {
    backgroundColor: 'lightSalmon',
    color:'black',
    margin:'10px',
    borderRadius: '15px',
    border:'5px double lightGreen',
    boxShadow:'5px 5px 15px gray',
    padding: '15px',
    width:'350px',
    height:'330px',
    float : 'left',
  }
  console.log(props)
  return <div style= {style}>
    <h3>Shoe : {props.name} </h3>
    <h5>Price : {props.price}</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sequi vitae quo saepe, ullam quis.</p>
    <button style={{backgroundColor:'cyan', borderRadius:'5px', border: '2px solid green', height:'30px'}}>Buy Now</button>
  </div>

}

export default App;
