const URL = 'https://www.govtrack.us/static/legislator-photos/'
const SIZE = '200px'

import { senators } from './senators.js'

// elements
const nav = document.querySelector('nav')
const peopleDiv = document.querySelector('#people')

// nav
const btnAll = document.createElement('button')
btnAll.textContent = 'All Folks'
btnAll.addEventListener('click', () => displayFolks(senators))

nav.appendChild(btnAll)

const btnF = document.createElement('button')
btnF.textContent = 'Female Senators'
btnF.addEventListener('click', () => {
  const arrayF = senators.filter(person => person.gender === 'F')
  displayFolks(arrayF)
})

nav.appendChild(btnF)

const btnM = document.createElement('button')
btnM.textContent = 'Male Senators'
btnM.addEventListener('click', () => {
  const arrayM = senators.filter(person => person.gender === 'M')
  displayFolks(arrayM)
})

nav.appendChild(btnM)

const btnD = document.createElement('button')
btnD.textContent = 'Democratic'
btnD.addEventListener('click', () => {
  const arrayX = senators.filter(person => person.party === 'D')
  displayFolks(arrayX)
})

nav.appendChild(btnD)

const btnR = document.createElement('button')
btnR.textContent = 'Republican'
btnR.addEventListener('click', () => {
  const arrayX = senators.filter(person => person.party === 'R')
  displayFolks(arrayX)
})

nav.appendChild(btnR)

const btnX = document.createElement('button')
btnX.textContent = 'Other Party'
btnX.addEventListener('click', () => {
  const arrayX = senators.filter(person => person.party !== 'R' && person.party !== 'D')
  displayFolks(arrayX)
})

nav.appendChild(btnX)

// loop
function displayFolks(folks) {
  peopleDiv.innerHTML = ''

  folks.forEach(person => {
    // elements to create
    //  figure | img | figCaption | 
    let imgID = person.govtrack_id
    
    let genderClass;
    let partyClass;
    
    switch (person.gender) {
      case('F'):
        genderClass = 'female'
        break;
      case('M'):
        genderClass = 'male'
        break;
      default:
        genderClass = 'other'
    }

    switch (person.party) {
      case('R'):
        partyClass = 'republican'
        break;
      case('D'): 
        partyClass = 'democrat'
        break;
      default:
        partyClass = 'other'
    }

    let html = `
      <figure class="${genderClass} ${partyClass}">
        <img src="${URL}${imgID}-${SIZE}.jpeg" >
        <figCaption>
          ${person.first_name} ${person.last_name}
          <br>
          Title: ${person.title}
          <br>
          Birth Date: ${person.date_of_birth}
          <br>
          State: ${person.state}
          <br>
          Phone: ${person.phone}
        </figCaption>
      </figure>
    `

    peopleDiv.innerHTML += html
  })
}

displayFolks(senators)