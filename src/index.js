const init = () => {
  const inputForm = document.querySelector('form');  // grabs form

  inputForm.addEventListener('submit', event => {  // adds event listener to the submit button, the following is the cb function
      event.preventDefault() // prevents referesh of the page 
      const input = document.querySelector('input#searchByID')  // saves user input to input variable

      console.log(input.value)  //debug

      fetch(`http://localhost:3000/movies/${input.value}`)  // retrives data from server, using user input
        .then(response => response.json()) // conerts to json object 
        .then(data => { // another callback function, data is what is returned from the local server 
            const title = document.querySelector('section#movieDetails h4');  
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = data.title;  // updates title based on data retrived from server 
            summary.innerText = data.summary; // same 
        })
  })
}

document.addEventListener('DOMContentLoaded', init);