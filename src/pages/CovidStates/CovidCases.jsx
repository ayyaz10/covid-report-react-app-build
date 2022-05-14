import { useState, useEffect } from 'react';
import { Covid, sendData, updateData, deleteData } from '../../service/http';
// https://rapidapi.com/api-sports/api/covid-193/
const CovidCases = () => {
  const [SetTitle, setSetTitle] = useState('Covid Cases');

  useEffect(() => {
    getCovidData();
  }, []);

  const getCovidData = async () => {
    const getCovidData = await Covid.getData();
    console.log(getCovidData);
  };

  return (
    <div className='container'>
      <h1>{SetTitle}</h1>
    </div>
  );
};

export default CovidCases;
