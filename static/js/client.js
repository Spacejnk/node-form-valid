let form = document.querySelector('form');

form.onsubmit = sendData;

function sendData(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let Params = {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email'),
            phone1: formData.get('phone1'),
            phone2: formData.get('phone2'),
            phone3: formData.get('phone3'),
            zipCode: formData.get('zipCode'),
            age: formData.get('age')
        }),
        method: "POST"
    }

    fetch('http://localhost:3005/formData', Params)
    .then(response => response.json())
    .then(data => {

        
        if (data.success === "Ok") {
            console.log('successful');
        } else {

        let error = document.querySelector('.error');

        error.innerHTML = "";

        document.querySelector('.errorContainer').style.display = "block";
            
        data.errors.forEach(function(err){
            error.innerHTML += `<li>${err.msg}</li>`;
            });
            
        
        } 
        
    })
    
    .catch(err => console.log(err))
      
}







