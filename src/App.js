import {Icon} from "../src/Icons"
import style from './App.module.css';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import jsPDF from "jspdf";

function App() {
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
   
   </h2>
     
     <div className={style.App}>
     {
       Icon.map((ele ,index)=>
      <button className="btn" key={index}   onClick={()=>handleAction(ele)}>{ele.Icons}</button>)
     }
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
