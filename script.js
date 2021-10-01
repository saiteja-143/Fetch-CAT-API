document.querySelector("#find").addEventListener("click", getData)


//  empty output declared to be used for DOM image display
let output =""

// Async await used

async function getData()
{

    try{
        const res = await fetch("https://api.thecatapi.com/v1/images/search ");

        const data = await res.json();       
    
        console.log(data[0].url);

    
    //  variable to display image in DOM

        output =`${data[0].url}`    
        document.querySelector("#output").src = output ;

    } catch (error){
        console.log(error, " unable to fetch data")
    }

    

    
}