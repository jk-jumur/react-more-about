import './Country.css'

const Country = ({country}) =>{
    //   console.log(country.name.common);
    //   console.log(country.flags.flags.png)
      //    console.log(country.population.population);
        // console.log(country.area.area);

        const handleVisited = () =>{
             console.log('visited')
        }
      return(
         <div className="country">
               <img 
               src={country.flags.flags.png}
               alt={country.flags.flags.alt} 
                className='country-img'/>
               <h3>Name: {country.name.common}</h3>
               <p>Population: {country.population.population}</p>
               <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
               <button onClick={handleVisited}>Not Visited</button>
           
         </div>
      )
}

export default Country;

/**
 * 1. inline css (style object)
 */