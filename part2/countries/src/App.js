import { useState,useEffect } from "react";
import countryService from "services/country"
import ShowMessage from "./ShowMessage"
import DisplayList from "./DisplayList"
import ShowDetail from "./Detail";

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

  if(!search)
      return
  

    const filterCountries = countries.filter(f=>f[name][common].startsWith(search))
    let count= filterCountries.length
    let   countryNames =[]
     if(count<=0)
      setMessage(<div style={{color:'red',borderStyle:'solid',borderColor:'red'}}>
      No  matches. Specify another filter</div>)
    else if (count>10)
      setMessage(<div style={{color:'red',borderStyle:'solid',borderColor:'red'}}>
     Too many matches . Please specify another filter</div>)
    else if(count>1)
        countryNames = filterCountries.map(c=>c.name.common)

    else
        setCountry(
                  { 
                  "name": filterCountries[0].name.common,
                    "capital": filterCountries[0].capital,
                    "area": filterCountries[0].languages,
                    "flag":filterCountries[0].flags.png
                  }
         )
    

 



     return (
        <div>
          <input name='search' value={search} />
          <ShowMessage message={message} />
          <DisplayList list={countryNames}  />
          <ShowDetail detail={country} />
        </div>
     )
      



}
export default App;
