import { useState,useEffect } from "react";
import countryService from "services/country"
import ShowMessage from "./ShowMessage"

const App=()=>{

  [country,setCountry]=useState('');
  [countries,setCountries]= useState([])
  [message,setMessage]= useState('');
  [search,setSearch]= useState('');

  const getCountries=()=>countryService.getAll()
  .then(data=>{
     setCountries(data)
  })
  .catch(error=>{
        setCountries([])
        setMessage(<div style={{color:'red',borderStyle:'solid',borderColor:'red'}}>
          The countries data could not be retrieved</div>)
  })

  useEffect(getCountries,[])


    const searchResult = countries.filter(f=>f[name][common].startsWith(search))

 



     return (
        <div>
          <input name='search' value={search} />
        
        </div>
     )
      



}
export default App;
