// fetch API -- browser API for HTTP (AJAX) requests
// default -- GET request, supports other methods as well
// Returns promise


const url = 'https://www.course-api.com/react-tours-project'

// console.log(fetch(url))

//.then approach

// fetch(url)
// .then((respo) => respo.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err))

// async await approach

const getTours = async() =>{
    try {
        const response = await fetch(url);
        const data = await response.json()

        return(data)
        
    } catch (error) {
        console.log(error);
        
    }
}
console.log(getTours().then());


