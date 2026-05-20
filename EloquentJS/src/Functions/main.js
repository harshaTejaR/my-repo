import {setUpCounter} from './counter.js'
import { button } from './button.js'
// import {landscape} from './delete.js'
import { puzzle } from './puzzle.js'
import * as alis from './growingFunctions.js'
import { random } from './random.js'
import apiKey from './apiKey.js' //default
import box from './box.js'

document.querySelector('#app').innerHTML=`
<section id="center">
	<div>
		<div>
    <h1>Get started</h1>
    <p>Create <code>Counter</code> and 3D pushable <code>RESET BUTTON</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
	</div>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <p>Create a button here  </P>

    <button id="pushable" type="button" class="pushable" >
    <span class="front">
    Push Me
    </span>
    </button>
  </div>
</section>
`

console.log('/*********CODE**********/')
var square = function (x){
	return x*x
};

var power = function(base, exponent){
		var result = 1;
		for (var count = 0; count < exponent; count++)
			result *= base;
		return result;
};

var power = function(base, exponent){
		var result = 1;
		for (var count=0; count < exponent;count++){
			result *= base;
		return result;
		}
}

/****This Code Moved to delete.js *****/
// var landscape = function() {
// 	//How do i decide function parameters //
// 	var result = "";
	
// 	var flat = function(size){
// 		for(var count = 0; count < size; count++){
// 			result += '-';
// 		}
// 	};
	
// 	var mountain = function(size) {
// 			result += '/';
// 			for(var count = 0; count < size; count++){
// 				result += "'";
// 			}
// 			result += '\\';
// 		};
		
		
// 		flat(3);
// 		mountain(4);
// 		flat(6)
// 		mountain(1);
// 		flat(1);
// 		return result;
// 	};
// 	console.log(landscape());	
/*********************************/

//define a function for square root
const sqrRoot = function(x){
	return x*x;
}

const roundTo = function(n, step) {
  let remainder = n % step;
  return n - remainder + (remainder < step / 2 ? 0 : step);
};

console.log(roundTo(26, 10));


//Scope of function
random(10,15);
console.log(apiKey);
alis.growingFunctions();
puzzle();
alis.landscape();
console.log(sqrRoot(9));
console.log(square(12))
console.log(power(2,10));
const resetCounter = setUpCounter(document.querySelector('#counter'))
button(resetCounter)