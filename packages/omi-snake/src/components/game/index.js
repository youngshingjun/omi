import { define, WeElement } from 'omi'


define('my-game', class extends WeElement{
  static use = ['map']
  
  static css = require('./_index.css')

  render(){
    return <div class="game">
    { this.store.data.map.map(row=>{
      return  <p>
          {row.map(col=>{
            if(col){
              return <b class='s'></b>
            }
            return <b></b>
          })}
      </p>
    })}
  </div>
  }
})
