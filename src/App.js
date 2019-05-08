import React ,{Suspense,lazy}from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import Card from './components/card'
import Checkbox from './components/checkbox'
const OtherComponent = lazy(() => import('./components/suspense'));
const MainComponent = lazy(() => import('./components/box'));
class  App extends React.Component{
  constructor(props){
super(props);
this.state={item:'',filter:new Set(),list:[]}
  }
  componentDidMount(){
    this.filter=new Set();

  }
  onChange=(e)=>{

    if(this.filter.has(e.target.value)){
      this.filter.delete(e.target.value)
// this.setState({filter:this.state.filter.delete(e.target.value)})
    }
    else {
      // this.setState({filter:this.state.filter.add(e.target.value)})
      this.filter.add(e.target.value)

    }

this.setState({list:Array.from(this.filter)})

  }

  render(){
    const {filter,list}=this.state;
    const mylist=new Set();
    console.log(list)
    let movie=[];
    if(list.length===0){
  movie=data;

    }
    else{

    movie=[];
    list.map((lang)=>{
      data.filter((item)=>{
        if(item.Language.includes(lang)||item.Genre.includes(lang)){
          if(movie.indexOf(item)===-1){
            movie.push(item)
          }
        }
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
     <Checkbox data={data} onChange={this.onChange}/>
      <Suspense fallback={<div>Loading... Data...</div>}>
<div className="wrapper">
<Card data={movie}/>
</div>
      </Suspense>
      </header>
    </div>
  );
  }
}

export default App;
