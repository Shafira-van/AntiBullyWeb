import React from "react";
import { useParams } from "react-router-dom";

function DetailArtikel() {

  const { id } = useParams()
  console.log(id);
  const detailArtikel = [
    {
      id: 1,
      img: "https://github.com/Shafira-van/file/raw/main/AntiBully/img/4026024.jpg",
      judul: "Cara terhindar dan mencegah terjadinya bullying",
      isi: " 1. Mengabaikan pelaku bullying Menurut Karen Gail Lewis, EdD, MFT, MSW, terapis pernikahan dan keluarga di Washington, DC, tidak bereaksi ketikaseseorang sedang melakukan aksi perundungan merupakan cara terbaikmenghadapi bullying. Sebab, kebanyakan pelaku akan mencari respons danreaksi dari targetnya. Mereka menginginkan si korban marah, malu ataumenangis. Jika anak memiliki respons emosional terhadap perundungan, itubisa berlanjut dan intensitas bullying bisa meningkat. Tetapi jika sianak dapat mengabaikan pelaku, mengacuhkan setiap ejekan, kemungkinan si tukang bully akan kehilangan minat untuk terus mem-bully. 2. Beri tahupelaku untuk berhenti Terkadang, jika kita hanya diam saja saatdiintimidasi, maka perilaku bullying bakal terus berlanjut. Menurut Lewis, merespons dengan menyuruh kalimat untuk berhenti dengan suara",
    },

    {
      id: 2,
      img: "https://github.com/Shafira-van/file/raw/main/AntiBully/img/4026024.jpg",
      judul: "Cara terhindar dan mencegah terjadinya bullying",
      isi: " 1. Mengabaikan pelaku bullying Menurut Karen Gail Lewis, EdD, MFT, MSW, terapis pernikahan dan keluarga di Washington, DC, tidak bereaksi ketikaseseorang sedang melakukan aksi perundungan merupakan cara terbaikmenghadapi bullying. Sebab, kebanyakan pelaku akan mencari respons danreaksi dari targetnya. Mereka menginginkan si korban marah, malu ataumenangis. Jika anak memiliki respons emosional terhadap perundungan, itubisa berlanjut dan intensitas bullying bisa meningkat. Tetapi jika sianak dapat mengabaikan pelaku, mengacuhkan setiap ejekan, kemungkinan si tukang bully akan kehilangan minat untuk terus mem-bully. 2. Beri tahupelaku untuk berhenti Terkadang, jika kita hanya diam saja saatdiintimidasi, maka perilaku bullying bakal terus berlanjut. Menurut Lewis, merespons dengan menyuruh kalimat untuk berhenti dengan suara",
    },
  ];
  return (
    <div>
      {

        detailArtikel.filter((el) => el.id === +id).map((el) => {
          return (
            < div className="detailArtikel" key={el.id}>
              <div className="judulArtikel">
                <img
                  src={el.img} />
                <h1>{el.judul}</h1>
              </div>
              <p>{ el.isi}</p>
            </div>
          )
        })
      }


    </div>
  );
}

export default DetailArtikel;
