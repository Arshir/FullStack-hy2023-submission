import axios from "axios";
const countryDSUrl ='https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll=()=>axios.get(countryDSUrl).then(res=>res.data);



const countryService = {getAll}

export default countryService;