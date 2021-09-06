const paintWall = function (colors, wallLocation) {
    console.log('The wall has been painted ' + colors);
    console.log('The ' + wallLocation + ' wall has been painted ' + colors);
}

paintWall('green');
paintWall('blue');
paintWall(); // with no argument, the output of 'colors' and 'wallLocation' will be 'undefined' > 'The wall has been painted undefined' Also: 'The undefined wall has been painted undefined'
paintWall('blue', 'north-east'); // the order of arguments DOES matter:
paintWall('north-east', 'blue')  // because of the order, this gives: 'The wall has been painted north-east' and 'The blue wall has been painted north-east'

// So if you call the function, the arguments you give them must be in same order as the order you defined them in the function itself 
//so for line 10 of code above: either switch the order of arguments in function itself, or switch the order in the function-call (like it is inline 9)
// When we change the argument order in the function and then call the function as in line 10, line 10 will output correct: 'The north-east wall will be painted blue'
//But then line 9 output will be: 'The blue wall will be painted north-east'