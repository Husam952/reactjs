import logo from './logo.svg';
import {Navbar, NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shareds/dishes';
import { Component } from 'react/cjs/react.production.min';

class App extends Component{
   constructor(props){
     super(props);
     this.state={
       dishes:DISHES
     };
   }

   
  render() {
   
  
  return (
    <div >
     <Navbar dark color="primary">
       <div className="container">
         <NavbarBrand href="/">
           HUSAM
         </NavbarBrand>
       </div>
     </Navbar>
     <Menu dishes={this.state.dishes} />
    </div>
  );
}
}
export default App;
