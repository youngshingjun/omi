

import '../../src/date-range-picker/index.tsx'
import { render, h } from 'omi'

render(
  <div>
   <m-date-range-picker 
   show={true} 
   left-date="2018-6" 
   right-date="2019-10" 
   from="2018-6-9"
   to="2018-10-10"
   onSelect={onSelect}
   ></m-date-range-picker>
  </div>
  , 'body')


function onSelect(evt){
  console.log(evt.detail)
}