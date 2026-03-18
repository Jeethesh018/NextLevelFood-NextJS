"use client"

import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image";



export default function ImagePicker({label,name}){
    const [pickImage,setPickImage] = useState();
     const ImageInputRef = useRef();

    function handlePickClick(){
       ImageInputRef.current.click();
    }

    function handleImageChange(event){
        const files = event.target.files[0]

       if(!files){
          return;
       }

       const fileReader = new FileReader();
       fileReader.onload = () =>{
        setPickImage(fileReader.result)
       }
       fileReader.readAsDataURL(files)
       

    }


      return <div className={classes.picker}>
            <label htmlFor={name}>
                {label}
            </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickImage && <p>No Image Picked Yet.</p>}
                    {pickImage && <Image src={pickImage} alt="The Image selected by the user" fill  />}
                </div>
            <input className={classes.input} type="file" id="image" accept="image/png, image/jpeg" onChange={handleImageChange} ref={ImageInputRef} name={name}/>
            <button className={classes.button} onClick={handlePickClick} type="button">Pick an Image</button>
            </div>
            <div></div>
      </div>
}