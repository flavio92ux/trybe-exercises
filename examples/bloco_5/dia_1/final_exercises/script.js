document.querySelector('#header-container').style.backgroundColor = 'green';

document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = 'salmon';
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = 'yellow';

let emergency = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergency.length; index += 1) {
	emergency[index].style.backgroundColor = 'purple'; 
}

let noEmergency = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < noEmergency.length; index += 1) {
	noEmergency[index].style.backgroundColor = 'black';
} 