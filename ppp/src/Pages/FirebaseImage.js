import React, { useEffect, useState } from "react";
import {imageDB} from './Config';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
function FirebaseImage(){
    const [img,setImg]=useState('')
    const[imgUrl,setImgUrl] =useState([])
    //upload
    const handleClick = () =>{
      if(img !==null){
        const ImgRef= ref(imageDB,`files/${v4()}`)
        uploadBytes(ImgRef,img).then(value=>{
            console.log(value)
            getDownloadURL(value.ref).then(url=>{
                setImgUrl(data=>[...data,url])
            })
        })
      }
    }
    //display
    useEffect(()=>{
        listAll(ref(imageDB,"files")).then(imgs=>{
            console.log(imgs)
            imgs.items.forEach(val=>{
                getDownloadURL(val).then(url=>{
                    setImgUrl(data=>[...data,url])
                })
            })
        })
    },[])
    console.log(imgUrl,"imgUrl")
    return(
        <div className="Igs">
            <input type="file" onChange={(e)=>setImg(e.target.files[0])}/>
            <button onClick={handleClick}>Upload</button>
            <br/>
            {
                imgUrl.map(dataVal =><div>
                    <img src={dataVal} height="200px" width="200px"/>
                    <br/>
                </div>)
            }
        </div>
    )
}
export default FirebaseImage;