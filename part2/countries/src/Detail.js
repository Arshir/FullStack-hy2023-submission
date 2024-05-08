const ShowDetail=({name,capital,area,languages,flag}={detail})=>{
  return (
  <div>
    <h2>{name}</h2>
    <h3>{capital}</h3>
    <h3>{area}</h3>

    <h3><em>languages</em></h3>
       <ul>
      {Object.keys(languages).forEach(key=>
        <li>{languages[key]}</li>
      )}
    </ul>

    <img src={flag} alt="country flag" height={50} width={50} />

</div>
  )
}

  export default ShowDetail;