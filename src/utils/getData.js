const API = 'https://bloodborne.herokuapp.com/'
// condicion ? resultado true : resultado false
const getData = async() =>{
    const apiURL = `${API}`;
    try{
        const response = await fetch(apiURL);
        const data = await response.json();
        return data.all_Characters;
    }catch (error){
        console.log('fetch error', error)
    }
}
export default getData