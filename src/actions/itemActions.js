import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from "./types";
import axios from "axios";
const uuidv4 = require('uuid/v4');
export const getItems = ()=> dispatch => {
    dispatch(setItemsLoading());
    // axios.get("https://arcane-refuge-92393.herokuapp.com/api/items").then(response=>{
    //   dispatch({type:GET_ITEMS,payload:response.data});
    //   console.log(response);
    // });
    const habits = JSON.parse(localStorage.getItem("habits"));
    if(habits){
      dispatch({type:GET_ITEMS,payload:habits});
    }else{
      dispatch({type:GET_ITEMS,payload:[]});
    }




}
export const deleteItem= (id)=> dispatch => {
  // axios.delete(`https://arcane-refuge-92393.herokuapp.com/api/items/${id}`).then(response=>dispatch({type:DELETE_ITEM,payload:id}));
  let arr = JSON.parse(localStorage.getItem("habits"));

  const newArr = arr.filter(item=>item._id !== id);


  localStorage.setItem("habits",JSON.stringify(newArr));
  dispatch({type:DELETE_ITEM,payload:id});
}
export const addItem=  (item)=> dispatch => {
  // axios.post("https://arcane-refuge-92393.herokuapp.com/api/items",item).then(response=>dispatch({type:ADD_ITEM,payload:response.data}));
  let arr = JSON.parse(localStorage.getItem("habits"));
  if(arr){
    pushItemToLocalStorage(arr,item).then(response=>{
      dispatch({type:ADD_ITEM,payload:response});
    });

  }else{
    arr = [];
    pushItemToLocalStorage(arr,item).then(response=>{
      dispatch({type:ADD_ITEM,payload:response});
    });
  }




}
export const setItemsLoading= () => {
  return({
      type : ITEMS_LOADING
  }

  );
}

const pushItemToLocalStorage= async (arr,item)=>{
  item._id = await uuidv4();
  await arr.push(item);
  localStorage.setItem("habits",JSON.stringify(arr));
  return(item);

}
