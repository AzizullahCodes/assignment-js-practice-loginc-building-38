/* js problem solving assignment no 38 
date july 04/2025 */
/*===========================================================================*/
/*--------- Question no 1 ----------------------
Find Maximum in an Array
Use Math.max() with the spread operator to find the largest number in an array.
*/
/********** Answer **************** */
// function maxNumber(){let array = [2,33,4,1,5];
//     let result = Math.max(...array);
//     document.getElementById('p').innerHTML = result;
// }


/*===========================================================================*/
/*--------- Question no 2 ----------------------
Replace First Occurrence Using .replace()
Question:
You have a string:

let sentence = "I like apples. Apples are tasty.";
Task:
Replace only the first occurrence of "apples" with "mangoes".
*/
/********** Answer **************** */
// function replacing(){let get = document.getElementById('it').value;
    
//     let result = get.replace('apples','mangoes');
//     document.getElementById('p').innerHTML = result;
// }


/*===========================================================================*/
/*--------- Question no 3 ----------------------
You have a string:
let comment = "This app is bad. Really bad experience.";
Task:
Replace all "bad" with "***".
✅ Expected Output:

"This app is ***. Really *** experience."
*/
/********** Answer **************** */
// function replacing(){let get = document.getElementById('it').value;
//     let result = get.replaceAll('bad','***');
//     document.getElementById('p').innerHTML = result;
// }


/*===========================================================================*/
/*--------- Question no 4 ----------------------
array methods,push,pop,shift,unshift,slice,splice et
*/
/********** Answer **************** */
// let array = ['apple','banana','mango','grapes'];
// console.log(array);
// let pop = array.pop();
// console.log(array);
// console.log(pop)

// let unshift = array.unshift('lemon');
// console.log(array);
// console.log(unshift)

// let push = array.push('carrot');
// console.log(array);
// console.log(push)

// let shift = array.shift();
// console.log(array);
// console.log(shift)
// let array = ['apple','banana','mango','grapes'];
// console.log(array);
// // let spli = array.splice(1,0,'orange','watermelon','melon');
// // console.log(array);
// // console.log(spli)
// let slic = array.slice(0,2);
// console.log(slic)

// /*===========================================================================*/
/*--------- Question no 5 ----------------------
conact()
*/
/********** Answer **************** */
// let a = ['apple','mango'];
// let b = ['grapes','orange'];
// let c = ['watermelon','melon'];
// let result = a.concat(b,c);
// console.log(result)


/*===========================================================================*/
/*--------- Question no 6 ----------------------
&& and || operator
*/
/********** Answer **************** */
// let age = prompt('enter your age');
// age = age.toLowerCase()
// let education = prompt('enter your qualification');
//     education = education.toLowerCase()
// let province = prompt('enter your province name')
// province = province.toLowerCase()

// if((age === 24 && education === 'bachelor' && province === 'punjab') || province === 'mianwali')
// {console.log('eligible')}
// else{console.log('not eligible')}


/*===========================================================================*/
/*--------- Question no 7 ----------------------

Ask the user to enter a number. If the number is not exactly 10 
(including type), show "Not exactly 10"; otherwise show "Exactly 10".

✅ Input: "10" (string)
✅ Output: Not exactly 10
✅ Input: 10 (number)
✅ Output: Exactly 10
*/
/********** Answer **************** */
// let enterNumber = prompt('enter number');
// if(enterNumber !== 10){console.log('not 10')}
// else{console.log('10')}



/*===========================================================================*/
/*--------- Question no 8 ----------------------
Username Check (Loose vs Strict)
Question:
Create a variable:

let username = "admin";
Ask the user to input their username. If it is not equal (!=) to "admin", 
show "Invalid User".

Then also try using !== and see the difference.
*/
/********** Answer **************** */
// let enterUserName = prompt('enter user name ');
// if(enterUserName !== 'admin'){console.log('inavlid user')}
// else{console.log('valid user')}


/*===========================================================================*/
/*--------- Question no 9 ----------------------
 Combine Multiple
Question:
Ask the user to enter age.
If age is greater than or equal to 13 and less than 19, 
show "You are a teenager".

✅ Input: 15 → Output: "You are a teenager"
✅ Input: 20 → Output: (no message)
*/
/********** Answer **************** */
// let entetAge = prompt('enter your age');
// if(entetAge >= 13 && entetAge < 19){console.log('you are a teenager')}


/*===========================================================================*/
/*--------- Question no 10 ----------------------
Show Current Date and Time
Goal: Use the Date object to display the current date and time.
let currentDate = new Date();
console.log("Current Date and Time:", currentDate);
*/
/********** Answer **************** */
// let current = Date();
// console.log(current);
// console.log(typeof current);
// current = new Date();
// console.log(current)


/*--------- Question no 12 ----------------------
Get Only the Current Year
Goal: Extract and display only the current year.
let today = new Date();
let year = today.getFullYear();
console.log("Current Year:", year);
*/
/********** Answer **************** */
// let current = new Date();
// let year = current.getFullYear();
// console.log(year)


/*===========================================================================*/
/*--------- Question no 13 ----------------------
Show the Current Month (1–12)
Goal: Display the current month number.
let now = new Date();
let month = now.getMonth() + 1; // +1 because months start from 0
console.log("Current Month:", month);
*/
/********** Answer **************** */
// let current = new Date();
// let month = current.getMonth()+1;
// console.log(month);


/*===========================================================================*/
/*--------- Question no 14 ----------------------
Get the Day of the Week (0–6)
Goal: Display the number for the current weekday 
(0 = Sunday, 6 = Saturday).

*/
/********** Answer **************** */
// let dayName = ['sun','mon','tues','wed','thur','fri','sat'];
// let current = new Date();
// let day = current.getDay();
// let result = dayName[day]
// console.log(result)


/*===========================================================================*/
/*--------- Question no 15 ----------------------
 Make a Custom Date
Goal: Create and print a custom date like 1st January 2000.
let customDate = new Date("2000-01-01");
console.log("Custom Date:", customDate);
*/
/********** Answer **************** */
// let current  = new Date();
// let custom = new Date('2000-01-01');
// console.log(custom)


/*===========================================================================*/
/*--------- Question no 16 ----------------------
Compare today’s date with your birthdate and show which one is earlier.
*/
/********** Answer **************** */
// let current = new Date();
// let needed = new Date('09-09-2028');
// console.log(current);
// console.log(needed)

// if(current > needed){console.log('today is earlier')}
// else{console.log('birthdate is earlier')}

/*===========================================================================*/
/*--------- Question no 17 ----------------------
 Get Current Date and Time
Question:
Create a program that prints the current date and time in the following 
format:
Today is: 5 July 2025
Current Time: 08:35:12
Hint: Use getDate(), getMonth(), getFullYear(), getHours(), getMinutes(),
 getSeconds()
*/
/********** Answer **************** */
// let current = new Date();
// let date = current.getDate();
// console.log(date)
// // month
// let monthName = ['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec'];
// let month = current.getMonth();
// let monthNameRequired = monthName[month];
// console.log(monthNameRequired)
// // year 
// let year = current.getFullYear();
// console.log(year);
// // time minutes 
// let minutes = current.getMinutes();
// console.log(minutes);
// // hour 
// let hour = current.getHours();
// console.log('0'+hour);
// // seconds 
// let seconds = current.getSeconds();
// console.log(seconds);
// let resultOne = date + ' ' + monthNameRequired + ' ' + year;
// console.log(resultOne);

// let resultTwo = '0'+hour+':'+'0'+ minutes+':'+ seconds;
// console.log(resultTwo)



/*===========================================================================*/
/*--------- Question no 18 ----------------------
Check if Today is Weekend or Weekday
Question:
Write a program that checks if today is a weekend (Saturday or Sunday) 
or a weekday.

Hint: Use getDay() and conditionals.
Expected Output (example):

Today is weekend
*/
/********** Answer **************** */
// let dayName = ['sun','mon','tues','wed','thur','fri','sat'];
// let current = new Date();
// let day = current.getDay();
// let needed = dayName[day];
// console.log(needed);
// if(needed === 'sat' || needed === 'sun'){console.log('today is weekend')}
// else{console.log('today is weekday')}



/*===========================================================================*/
/*--------- Question no 19 ----------------------
 Calculate Age from Birthdate
Question:
Ask the user for their birth year and calculate their age.
Hint: Use getFullYear() and subtract birth year.
Expected Output (for input 2000):
You are 25 years old
*/
/********** Answer **************** */
// let current = new Date();
// let required = new Date('09-09-1992');
// let currentInMilliSeconds = current.getTime();
// let requiredInMillisecods = required.getTime();
// let difference = currentInMilliSeconds - requiredInMillisecods;
// console.log(difference);
// let result = Math.ceil(difference/(1000*60*60*24*30*12))
// console.log(result)

/*===========================================================================*/
/*--------- Question no 20 ----------------------
Change the Date
You are given a date: July 5, 2025
Change only the day of the month to 20 using setDate().

🟢 What will the final date be?
*/
/********** Answer **************** */
// let current = new Date();
// let required = current.toLocaleDateString();
// console.log(required);
// current.setDate(20)
// console.log(current)


/*===========================================================================*/
/*--------- Question no 21 ----------------------
setdate,time,minutes etc
*/
/********** Answer **************** */
// let current = new Date();
// set date 20
// let dt = current.setDate(20);
// console.log(dt)
// console.log(current)
// console.log(current.toString())

/*--------- Question no 22 ----------------------
 Repeat a Word
Repeat the word "Hello " 3 times using .repeat().
🟢 Expected output:
Hello Hello Hello 
*/
/********** Answer **************** */
// let word = 'Hello';
// let result = (word + ' ').repeat(3);
// console.log(result)


/*===========================================================================*/
/*--------- Question no 23 ----------------------
 Emoji Repeater
Repeat the emoji "" 5 times and print it in one line.
🟢 Expected output:
🔥🔥🔥🔥🔥
*/
/********** Answer **************** */
// let emoj = '🔥';
// let result = emoj.repeat(5);
// console.log(result)


/*===========================================================================*/
/*--------- Question no 24 ----------------------
maskdatae origional date = 21222-767656-77786-29
need data = 21222-767656-*****-009
*/
/********** Answer **************** */
// let origionall = '21222-767656-77786-29';
// let firstChar = origionall.slice(0,13);
// console.log(firstChar);
// let lastChar = origionall.slice(-3);
// console.log(lastChar);
// let sign = '*';
// let result = sign.repeat(5);
// console.log(result);
// let finalResult = firstChar + result + lastChar;
// console.log(finalResult)


/*===========================================================================*/
/*--------- Question no 25 ----------------------
 Add a List Item to an Existing <ul>
Question:
Assume there is a <ul id="fruits"></ul> in your HTML.
Create a new <li> element with the text "Mango" and append it to the list.
*/
/********** Answer **************** */
// let get = document.getElementById('fruits'); 
// console.log(get);
// let li = document.createElement('li');
// let liContent = document.createTextNode('Mango');
// li.appendChild(liContent);
// console.log(li);
// get.appendChild(li);

/*===========================================================================*/
/*--------- Question no 26 ----------------------
creat a ul and li by js
*/
/********** Answer **************** */
// let ul = document.createElement('ul');
// console.log(ul);
// let items = ['home','about','contact','services','help'];
// for(let i = 0; i<items.length; i++){let li = document.createElement('li');
//     let liContent = document.createTextNode(items[i]);
//     li.appendChild(liContent);
//     console.log(li);
//     ul.appendChild(li);
// }
// document.body.appendChild(ul)

/*===========================================================================*/
/*--------- Question no 27 ----------------------
create a ul long by js
*/
/********** Answer **************** */
// let ol = document.createElement('ol');
// console.log(ol);
// let items = ['home','about','contact','help','services','other Services'];
// for(let i = 0; i < items.length; i++){let li = document.createElement('li');
//     let liContent = document.createTextNode(items[i]);
//     li.appendChild(liContent);
//     ol.appendChild(li)
// }

// document.body.appendChild(ol);

/*===========================================================================*/
/*--------- Question no 28 ----------------------
create and push multiple elements in main div by js dom
*/
/********** Answer **************** */
// let main = document.createElement('section');
// console.log(main);
// let heading = document.createElement('h1');
// console.log(heading);
// let headingContent = document.createTextNode('My country');
// heading.appendChild(headingContent);
// let dv = document.createElement('div');
// let dvContent = document.createTextNode('Hello');
// dv.appendChild(dvContent);
// let para = document.createElement('p');
// let paraContent = document.createTextNode('I love learning');
// para.appendChild(paraContent);

// main.appendChild(heading);
// main.appendChild(dv);
// main.appendChild(para);
// console.log(main);
// document.body.appendChild(main)

/*===========================================================================*/
/*--------- Question no 29 ----------------------
querySelector and querySelectorAll()
*/
/********** Answer **************** */
// let get = document.querySelectorAll('p');
// console.log(get);


/*===========================================================================*/
/*--------- Question no 30 ----------------------
Check if an Element Has a Specific Attribute
Objective: Use .hasAttribute()
Question:
You have the following HTML:

<button id="myBtn" type="button">Click Me</button>
Task:
Write JavaScript to check if the button has a "type" attribute. If it has, 
log "Yes, it has 'type'", otherwise log "No, it doesn't".

*/
/********** Answer **************** */
// let get = document.getElementById('myBtn');
// console.log(get);
// let check = get.hasAttribute('type');
// console.log(check)
// if(check === true){console.log('has attribute')}
// else{console.log('has not attribute')}

/*===========================================================================*/
/*--------- Question no 31 ----------------------
 Get the Value of an Attribute
Objective: Use .getAttribute()
HTML:
<a id="myLink" href="https://example.com" target="_blank">Visit Site</a>
Task:
Write JavaScript to get the value of the href attribute and display it
 using console.log.
*/
/********** Answer **************** */

// let get = document.getElementById('myLink');
// console.log(get);
// let val = get.getAttribute('href');
// console.log(val)



/*--------- Question no 32 ----------------------
Set a New Attribute
Objective: Use .setAttribute()
HTML:
<img id="myImg" src="default.jpg" alt="default image">
Task:
Write JavaScript to:
Change the src attribute to "newimage.jpg".
Set a new attribute title="New Image".
*/
/********** Answer **************** */
// let get = document.getElementById('myImg');
// console.log(get);
// get.setAttribute('src','newimage.jpg');
// get.setAttribute('title','New Image');
// console.log(get)


/*===========================================================================*/
/*--------- Question no 33 ----------------------
All in One Task
HTML:

<div id="infoBox" data-role="admin" class="box"></div>
Task:
Using JavaScript:
Check if the infoBox has the attribute data-role.
If yes, get its value and log it.
Then change data-role to "user".

*/
/********** Answer **************** */
// let get = document.getElementById('infoBox');
// console.log(get);
// let check = get.hasAttribute('data-role');
// if(check === true){let val= get.getAttribute('check');
//     console.log(check);
//     get.setAttribute('data-role','user')
// }


/*===========================================================================*/
/*--------- Question no 34 ----------------------
className 
*/
/********** Answer **************** */
// function styling(){let get = document.getElementById('heading');
//     console.log(get);
//     get.className = 'head';

// }


/*===========================================================================*/
/*--------- Question no 35 ----------------------
className styling
*/
/********** Answer **************** */
// function styling(){let get = document.getElementById('division');
//     console.log(get);
//     get.className = 'dv';
// }


/*===========================================================================*/
/*--------- Question no 36 ----------------------
apply css on ul li by className
*/
/********** Answer **************** */
// function styling(){let get = document.getElementsByClassName('li');
//     console.log(get);
//     for(let i = 0; i < get.length; i++){get[i].className = 'sty';}
// }


/*===========================================================================*/
/*--------- Question no 37 ----------------------
classList styling
*/
/********** Answer **************** */
// function adding(){let get = document.getElementsByClassName('li');
//     for(let i = 0; i< get.length; i++){get[i].classList.add('sty')}
// }


// function removing(){let get = document.getElementsByClassName('li');
//     for(let i = 0; i< get.length; i++){get[i].classList.remove('sty')}
// }


// function toggling(){let get = document.getElementsByClassName('li');
//    for(let i = 0; i< get.length; i++){get[i].classList.toggle('sty')}
// }



/*===========================================================================*/
/*--------- Question no 38 ----------------------
functional navbar
*/
/********** Answer **************** */
// function showHide(){let get = document.getElementById('ulid');
//     get.classList.toggle('vp')
// }



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */




/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */




/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */



/*===========================================================================*/
/*--------- Question no 1 ----------------------

*/
/********** Answer **************** */