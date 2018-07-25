import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from "./types";
import axios from "axios";
export const getItems = ()=> dispatch => {
    dispatch(setItemsLoading());
    axios.get("https://arcane-refuge-92393.herokuapp.com/api/items").then(response=>{
      dispatch({type:GET_ITEMS,payload:response.data});
      console.log(response);
    });


}
export const deleteItem= (id)=> dispatch => {
  axios.delete(`https://arcane-refuge-92393.herokuapp.com/api/items/${id}`).then(response=>dispatch({type:DELETE_ITEM,payload:id}));
}
export const addItem= (item)=> dispatch => {
  axios.post("https://arcane-refuge-92393.herokuapp.com/api/items",item).then(response=>dispatch({type:ADD_ITEM,payload:response.data}));


}
export const setItemsLoading= () => {
  return({
      type : ITEMS_LOADING
  }

  );
}
