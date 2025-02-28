import React,{useState ,useEffect} from 'react';
import './Covid.css';

const Covid19=()=>{
    const [covidData,setCovidData]=useState({});
    const [lastUpdated, setLastUpdated] = useState('');
    const getCovidData=async ()=>{
        try{
            const res=await  fetch('https://disease.sh/v3/covid-19/countries/India');
            const actualData=await res.json();
            setCovidData(actualData);
            setLastUpdated(new Date(actualData.updated).toLocaleString());
           
        }catch(err){
         console.log(err);
        }
    }
    useEffect(()=>{
        getCovidData();

    },[]);
    return(

        <div className="container">
        <h1 className="heading"></h1>

        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <div>
            <div className="box-container">
                <div className="box6">Country: {covidData.country}</div>
                <div className="box1">Total Cases: {covidData.cases}</div>
                <div className="box2">Active Cases: {covidData.active}</div>
                <div className="box3">Recovered: {covidData.recovered}</div>
                <div className="box4">Deaths: {covidData.deaths}</div>
                <div className="box5">Last Updated: {lastUpdated}</div>
                </div>
            </div>
    </div>
    )

}
export default Covid19;