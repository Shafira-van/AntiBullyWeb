import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../StyleSheet/detailKomunitas.css'
import wa from '../Asset/detailkomunitas/WA.png'
import facebook from '../Asset/detailkomunitas/facebook.png'
import instagram from '../Asset/detailkomunitas/instagram.png'
import phone from '../Asset/detailkomunitas/phone.png'
import twitter from '../Asset/detailkomunitas/twitter.png'



function DetailKomunitas() {
    const { id } = useParams();
    console.log(id);
    const [user, setUser] = useState([]);
    useEffect(() => {
        async function getUser() {
          try {
            const response = await axios.get('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/komunitas');
            setUser(response.data);   
          } catch (error) {
            console.error(error);
          }
        };
        //get API
        getUser() 
      }, [])

    //   function maping() {
    //     const result = user.filter((item) => item.id === id).map((item) =>{
            
    //     })
    //     console.log("ini hasil result", result)
    //   }
    //   maping()


    return ( 
        <>
        {/* card komunitas */}
        {user.filter((item) => item.id === id).map((item => {
            return(
                <>
                <div className="detail-komunitas" key={item.id}>
                    <div className="card mx-auto mb-3 p-3">
                        <div className="row">
                            <div className="profil-komunitas col-3 text-center">
                                <img className='img-fluid p-2' src={item.picture} alt="" />
                                <h6 className='p-2'>{item.provinsi}</h6>
                            </div>
                            <div className="deskripsi-komunitas col-6 d-flex flex-column">
                                <h6>{item.Nama}</h6>
                                <h5>{item.selogan}</h5>
                                <div className="alamat-komunitas mt-auto">
                                    <h5>{item.alamat}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* deskripsi komunitas */}
                    <div className="container">
                        <div className="row">
                            <div className="contact-komunitas col-4 px-2">
                                <h2>Hubungi Kami</h2>
                                <table className="table">
                                        <tr>
                                            <th scope="row"></th>
                                            <td className='text-center'>
                                                <img className='icon-detail' src={phone} alt="" />
                                            </td>
                                            <td className='desc-icon'>Thornton</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td className='text-center'>
                                                <img className='icon-detail' src={wa} alt="" />
                                            </td>
                                            <td className='desc-icon'>Thornton</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td className='text-center'>
                                                <img className='icon-detail' src={instagram} alt="" />
                                            </td>
                                            <td className='desc-icon'>Thornton</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td className='text-center'>
                                                <img className='icon-detail' src={facebook} alt="" />
                                            </td>
                                            <td className='desc-icon'>Thornton</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"></th>
                                            <td className='text-center'>
                                                <img className='icon-detail' src={twitter} alt="" />
                                            </td>
                                            <td className='desc-icon'>Thornton</td>
                                        </tr>

                                    </table>
                            </div>
                            <div className="desc-komunitas col-8">
                                <p>{item.deskrisi}</p>
                                <h4>Visi dan Misi</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consequuntur nulla illum eius sequi excepturi vero eum! Fugit omnis expedita dolores laborum tempore vero consectetur molestiae veritatis incidunt, doloremque autem.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )
        }))}

        </>
     );
}

export default DetailKomunitas;