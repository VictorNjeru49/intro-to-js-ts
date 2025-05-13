import data from './data.json'

function greetUser(name: string, displayMessage:(message: string)=> void): void{  
    
    // displayMessage:(message: string)=> void)  ===> callback
    setTimeout(()=>{
        const greeting = `Hello, ${name}! Welcome to our platform`
        displayMessage(greeting)
    }, 3000)
    
}
function displayMessage(message: string):void {
    console.log(`The message is: ${message}`)

}

greetUser('John', displayMessage)


function Fetchdata():Promise<string>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // const data: string = "Fetched data";
            resolve(JSON.stringify(data))
        },5000)
    })
}

Fetchdata()
    .then(
        (result: string)=>{
            console.log(result)
        }
    )
    .catch((error:Error)=>{
        console.error(`error: ${error}`)
    })
    .finally(()=>{
        console.log("Fetch operation completed");
    })


