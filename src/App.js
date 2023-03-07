import {Icon} from "../src/Icons"
import style from './App.module.css';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ImageIcon from '@mui/icons-material/Image';
import { useState,useRef } from "react";

import jsPDF from "jspdf";

function App() {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = document.createElement("img");
      img.src = reader.result;
      img.className = style.UploadedImageStyling;
      img.contentEditable = false;
      const range = window.getSelection().getRangeAt(0);
      range.insertNode(img);
      range.collapse(false);
    };
  };
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleAction=(ele)=>{
    document.execCommand(`${ele.action}`)
  }
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const sheetContent = document.querySelector(`.${style.textArea}`);
    doc.text(sheetContent.innerText, 10, 10);
    doc.save("document.pdf");
  };

  return (
    
    <div className={style.header}>
    
   <h2>
   <DescriptionIcon    style={{color:"blue", fontSize:"30px",margin:"20px",}} />
   <h>untitled document</h>
   
   </h2>
     
     <div className={style.App}>
     {
       Icon.map((ele ,index)=>
      <button className="btn" key={index}   onClick={()=>handleAction(ele)}>{ele.Icons}</button>)
     }
     <div>

     <ImageIcon className={style.ImageIcon} onClick={handleImageClick} />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: "none" }}
          value=""
        />
            {image ? (
              <img
                className={style.ImageContainer}
                src={image}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
     </div>
     <div className={style.textArea} contentEditable="true">
      text...

     </div>
   <div className={style.download}>
   <ArrowCircleDownIcon
          onClick={handleDownloadPDF}
          style={{ color: "red" }}
        />
        </div>
        </div>
    
    
  );
}

export default App;
