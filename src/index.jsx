import React  from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Footer from './Footer';
import './index.css'
class App extends React.Component {
    
    constructor (){
        super()
        this.state = {
            name : ""

        }

    }
    SetValue(){
        this.setState({name:"გამარჯობა მსოფლიო"},function(){
          window.alert (this.state.name)
        });        
    
        
        
    }
    
    
    
    render (){
        return(
           
                
            <React.Fragment>
                <Header></Header>
                <button type="button" onClick={() => this.SetValue() }>დააკლიკეთ</button>
                <Footer></Footer>
            </React.Fragment>

            
            
        );
    }
    
}

const root = document.getElementById("root");
ReactDOM.createRoot (root).render(<App/>)

