/* 1. The difference between concatenation and interpolation 
is that interpolation you use `${variable}` inside your
console.log. In concatenation inside your
console.log you use '' to write what you want
to see, with + variable to render what you
want. Example would be
age = 21 
console.log('I am ' + age) to render 
'I am 21'. 

2. DRY stands for DON'T REPEAT YOURSELF.
We should pay attention to it becasue it helps
eleminate bugs in your code. We have learned
the for and while loop to help keep code DRY.

3. When we declare a variable we are giving
it a name that we can use to reference
it at any point in our code. When we assign
a value to a variable, we are assigning information
to the name of that variable. A variable is 
defined by using the = sign. 

4. We should usually use const as with this
variable we know it is set and protected from
ever being changed. We should use let when 
we know we want the variable to change, 
like in a for loop.

5. A parent directory is the top folder
that hosts other folders and files inside 
it, known as children.

6. We can find hoow to use the command line
by typing man [the command] and enter. 
This will provide us with the manual on 
that command. 

7. Tab completion is used to type commands
into terminal quicker by starting the 
command, hitting tab, and having it complete
the file/folder name you were wanting.
*/
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log(c === c);
console.log(a < b && b < c);
console.log(a === a && a < d);
console.log(e === 'Kevin');
console.log(48 == '48');


/* Part 3 Question 1. 
This is an infinite loop because we didn't
declare when the loop should stop. 
 		  Question 2.
This question isn't an infinte loop because we 
declared that runProgram False which it only runs
if it is true. 
*/


//We are assigning "A" to the variable 'letters'.
/*let letters = "A";
//We are saying the variable 'i' has a value of 0.
*/

let i = 0;
//While i is less than 20, 

while (i < 20) {
	//add 1 "A" to "A".
	letters += "A";
	i++;
}
//show end result of the variable 'letters'
console.log(letters);
//It is showing that letters is not defined...

/*
Part 4 Question 1:
While loops are boolean. Meaning, while they are true,
they'll run. 
For loops are ran with a specific end number in mind.
*/


for (i = 0; i <= 999; i++) {
	console.log(i);
}

/*
 Part 4 Question 3:
The first part of the statement is declaring the
variable 'i' is 0.
The second part states that while 'i' is less than 100,
console.log('phrase'). And until 'i' is 100, keep add 1
to 'i'.
*/


for (let i = 999; i > 0; i--) {
	console.log(i);
}

for (i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`);
}











































