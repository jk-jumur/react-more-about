import { use } from "react";

const Countries = ({countriesPromise}) => {
    const countriesData =  use(countriesPromise);
    const countries = countriesData.countries
      console.log(countries);
    return (
        <div>
            <h3>In The Countries: {countries.length}</h3>

            
        </div>
    );
};

export default Countries;
   


