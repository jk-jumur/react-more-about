import { useState } from 'react'
import './Country.css'

const Country = ({country}) =>{
    //   console.log(country.name.common);
    //   console.log(country.flags.flags.png)
      //    console.log(country.population.population);
        // console.log(country.area.area);
          const[visited, setVisited] = useState(false);

        const handleVisited = () =>{
            // setVisited(true);

            //system 1
            // if(visited){
            //     setVisited(false)
            // } else{
            //     setVisited(true);
            // }

             //system 2
            // setVisited(visited ? false : true)

            //system 3
            setVisited(!visited)
        }
      return(
        //  <div className={`country ${visited ?'country-visited' : 'country-not-visited'}`}>
         <div className={`country ${visited &&'country-visited'}`}>
               <img 
               src={country.flags.flags.png}
               alt={country.flags.flags.alt} 
                className='country-img'/>
               <h3>Name: {country.name.common}</h3>
               <p>Population: {country.population.population}</p>
               <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
               <button onClick={handleVisited}>{visited? 'visited' : 'Not Visited'}</button>
           
         </div>
      )
}

export default Country;

/**
 * 1. inline css (style object)
 */