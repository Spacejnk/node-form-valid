let form = document.querySelector('form');

form.onsubmit = sendData;

function sendData(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let Params = {
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            email: formData.get('email')
        }),
        method: "POST"
    }

    fetch('http://localhost:3005/formData', Params)
    .then(res => res.json())
    .then(data => {

        if (data.success === "Ok") {
            console.log('successful');
        } else {

        let error = document.querySelector('.error');

        error.innerHTML = "";

        document.querySelector('.errorContainer').style.display = "block";

        data.errors.forEach(function(err){
            error.innerHTML += `<ul>${err.msg}</ul>`;
        });
        }
        
        
    })
    .catch(err => console.log(err))
}








