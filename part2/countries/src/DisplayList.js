const DisplayList= ({list})=>{
   if(list.length<=0)
     return
    else{
        return(
            <ul>
               { list.map(i=>  <li> i </li> )}

            </ul>
        )
    }
}

export default DisplayList;