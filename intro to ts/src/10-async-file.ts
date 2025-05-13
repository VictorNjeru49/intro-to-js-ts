async function fetchingData(): Promise<void> {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!res.ok){
            throw new Error("Network response was not ok")
        }
            const data = await res.json();
            console.log(data)
    }catch(error){
        console.error(`${error}`)
    }
}  
fetchingData()