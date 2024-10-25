import React from 'react'
import list from "../../public/list.json"
import ImgSlider from "./Slider"


export default function FreeBook() {
   
  const freeBookList = list.filter((book)=>book.catagory=="Free");
  console.log(freeBookList);

  return (
     <>
     <ImgSlider FreeBooks={freeBookList}/>
     </>
)}