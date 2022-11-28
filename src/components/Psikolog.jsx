import React, { useEffect,useState } from 'react'
import axios from 'axios';
import '../StyleSheet/Psikolog.css'

function Psikolog() {

  const [psikolog, setPsikolog] = useState([]);
  useEffect(() => {
    
      axios.get('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/psikolog')
      .then(res => {
        setPsikolog(res.data)
        console.log(res.data)
      })
  }, [])
return (
<div className="Psikolog mb-3">
  <div className="container d-flex flex-column">
    {psikolog.map((item,index) => 
    <div key={index} className="card-psikolog mx-auto mt-3 ">
      <div className="row">
        <div className=" col-3 card-img-psikolog ng-danger">
          <img className='img-fluid'
            src={item.picture}
            alt="" />
        </div>
        <div className="col-6 card-title-piskolog d-flex flex-column">
          <div className="psikolog-name">
            <h3>{item.name}</h3>
          </div>
          <div className="psikolog-job">
            <h4>{item.hospital}</h4>
            <h5>{item.city}</h5>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="btn-card-piskolog ">
            <button type="button" className="btn btn-primary m-auto">Lihat</button>
          </div>
        </div>
      </div>
  </div>
    )}
  </div>
</div>
)
}

export default Psikolog