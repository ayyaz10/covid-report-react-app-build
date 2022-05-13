import { useState } from 'react';
import { sendData, updateData, deleteData } from '../../service/http';
// https://rapidapi.com/api-sports/api/covid-193/
const CovidCases = () => {
  const [SetTitle, setSetTitle] = useState('Covid Cases');

  // const getdata = Covid.getData;
  // getdata().then((res) => {
  //   console.log(res);
  // });

  return (
    <div className='container'>
      <h1>{SetTitle}</h1>
    </div>
  );
};

export default CovidCases;
