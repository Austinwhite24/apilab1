let myButton = document.querySelector('button')

const buttonClicked = () => {
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(res =>{
        const residents = res.data.results[0].residents
        // console.log(residents)
        for (let i =0; i <residents.length; i++){
            axios.get(residents[i])
            .then(res =>{
                // console.log(res.data)
                let name = document.createElement('h2')
                name.innerText = res.data.name
                document.querySelector('body').appendChild(name)
            })
        }
    })
    console.log('button clicked')
}

myButton.addEventListener('click', buttonClicked)

