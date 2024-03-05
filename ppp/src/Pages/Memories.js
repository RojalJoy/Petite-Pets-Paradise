import React, { useEffect, useState } from "react";
import { imageDB } from "./Config";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import '../CSS/Memories.css'
import Navbar from "./Navbar";
function Memories() {
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    listAll(ref(imageDB, "files")).then((imgs) => {
      console.log(imgs);
      imgs.items.forEach((val) => {
        getDownloadURL(val).then((url) => {
          setImgUrl((data) => [...data, url]);
        });
      });
    });
  }, []);

  console.log(imgUrl, "imgUrl");

  return (
   <>
    <Navbar/>
    <div className="image-grid">
      {imgUrl.map((dataVal, index) => (
        <div key={index} className="image-item">
          <img src={dataVal} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
    </>
  );
}

export default Memories;
