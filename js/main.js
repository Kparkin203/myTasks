// JavaScript Document

var myTasks = [{
    'name':'Laundry',
    'complete':true
}, {
    'name': 'Wash the Car',
	'complete': false	
}, {
	'name': 'Grocery Shopping',
	'complete': true	
}];



document.write('<p>To Do List</p>');
document.write('<ul>');

for(var i = 0; i < myTasks.length; i++) {
    try {
       print(myTasks[i]);
    } catch (error) {
        console.log(error);
    }
}

document.write('</ul>');


function print(theTask) {
	    if(typeof theTask.name == 'undefined') {
        throw 'The task name is missing!'
    } else if (typeof theTask.complete == 'undefined') {
        throw 'The task status is missing!'
    } else {
			if(theTask.complete) {
       		 document.write('<li class="complete">' + theTask.name + '</li>');
    		} else {
        			document.write('<li>' + theTask.name + '</li>'); 
    }
}
}