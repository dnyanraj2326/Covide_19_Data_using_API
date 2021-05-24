import React, { useEffect,useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';




const App = () => {
  const [dataGet , updData] = useState( [] );

  const getCovidData = async () => {
    const reData = await fetch('https://api.covid19india.org/data.json');
    const actulData = await reData.json();
    console.log(actulData);
    updData(actulData.statewise);
  }

  useEffect(() => {
    getCovidData();
  },[]);

  return(
  <>
  <div className="main_div container">
  <h1 className="text-center m-5"> India Covid-19 Virus Daily Updates</h1>
  
  <table className="table table-bordered">
  <thead className="table-dark text-centre">
    <tr className="hed_sty">
      <th scope="col-4">STATE</th>
      <th scope="col">CONFIRMED</th>
      <th scope="col">RECOVERED</th>
      <th scope="col">DEATH</th>
      <th scope="col">ACTIVE</th>
      <th scope="col">UPDATE</th>
    </tr>
  </thead>
          
    
  {
    
    dataGet.map((curElem,  ind) => {
          return (
                    <tr key = {ind}>
                    <th> {curElem.state}</th>
                    <td> {curElem.confirmed} </td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                    </tr>
          )

    })

  }
  </table>
  </div>
  
   </>
   );
}

export default App;