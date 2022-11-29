import axios from 'axios'
export const SUCCESS_GET_ARTIKEL = "SUCCESS_GET_ARTIKEL"
export const SUCCESS_ADD_ARTIKEL = "SUCCESS_ADD_ARTIKEL"

function successGetArtikel(data) {
  return {
    type: SUCCESS_GET_ARTIKEL,
    payload: data
  }
}

export const getArtikel = () => {
  return async (dispatch) => {


    const result = await axios.get(
      "https://63819b489842ca8d3c9642d0.mockapi.io/Article"
    )
    dispatch(successGetArtikel(result.data))
  }
}

function successAddArtikel(data) {
  console.log(data)
  return {
    type: SUCCESS_ADD_ARTIKEL,
    payload: data
  }
}

export const addArtikel = (judul, isi, img) => {
  console.log(img);
  return async (dispatch) => {
    const result = await axios.post(
      "https://63819b489842ca8d3c9642d0.mockapi.io/Article",
      {judul,isi,img}
    )
    dispatch(successAddArtikel(result.data))
  }
}