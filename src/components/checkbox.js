import React, { Component } from 'react'

export default class checkbox extends Component {
    constructor(props){
super(props);
this.state={};
    }
  render() {
      const {data}=this.props;
      console.log(data)
      var filterLanguage=[];
      var filterGenre=[];
      data.map((x)=>{
        x.Language.split(",").map((x)=>{
            if(filterLanguage.indexOf(x)===-1){
                filterLanguage.push(x)
            }
           
          })
      })
      data.map((x)=>{
      x.Genre.split(",").map((x)=>{
        if(filterGenre.indexOf(x)===-1){
            filterGenre.push(x)
        }
      })
    })
    return (
        <div>
            <h4>Language</h4>
        {filterLanguage.map((lang)=>
        <label key={lang}><input type="checkbox" onClick={this.props.onChange} value={lang}/>{lang}</label>)}
                    <h4>Genre</h4>

           { filterGenre.map((genre)=>
            <label key={genre}><input type="checkbox" onClick={this.props.onChange} value={genre}/>{genre}</label>)}
            {/* <select>
                <option><input type="checkobox"/>Trailer</option>
                <option><input type="checkobox"/>Trailer</option>
                <option><input type="checkobox"/>Trailer</option>
                <option><input type="checkobox"/>Trailer</option>

            </select> */}
            </div>
                  )
    
  }
}
