import React ,{Component} from 'react'

import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//######################### class base componets ##################

import CardList from "./components/card-list/CardList"
import SearchBox  from "./components/SearchBox/SearchBox"

class App extends Component {

  constructor(){
    super();

    this.state = {
      items:[],
      searchItem:""
    }

    //this.handleChange= this.handleChange.bind(this)
  }

 async componentDidMount(){
  try {
    const request = await (await fetch('https://jsonplaceholder.typicode.com/users')).json()

      this.setState({items:request})

    console.log({request})
    
  } catch (error) {
    
    console.error({error})
  }
  }

  handleChange = (e)=>{
    this.setState({...this.state,searchItem: e})
  }


  render(){

    // const handleChange = (e)=>{
    //   this.setState({...this.state,searchItem: e})
    // }
    const {items, searchItem } = this.state
    const filterdItems = items.filter(item => item.name.toLowerCase().includes(searchItem.toLocaleLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder="Enter searh here..."/>
        
        {filterdItems.length>0?<CardList items = {filterdItems}/>:<h5>Not found</h5>}
       
      </div>
    );
  }
 
}



export default App;
