const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const tigerName = document.getElementById('tiger-names');

//gets the information stored in 'applicant' and stores in variable json
const json = window.localStorage.getItem('applicant');

const hydratedApplicant = JSON.parse(json);
console.log(hydratedApplicant);

// hydratedApplicant.KEYVALUE in object. Unrelated to the Id above!
name.textContent = hydratedApplicant.name;
position.textContent = hydratedApplicant.position;
peanuts.textContent = hydratedApplicant.allergy;
tigerName.textContent = hydratedApplicant.tigerName.join(' -- ');