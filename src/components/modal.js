import React,{useState} from 'react';
import Modalabc from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Form from './Form';
import './layout.css';
import OfficialLogo from '../Images/logo.png';
import Callusback from '../Images/svg/call-back.svg'

const Modal = (props) => {
    const [isopen, setisopen] = useState(false);
      return (
        <div className="finaltouch">
        <a onClick={() => setisopen(true)} className={props.class}>{props.title}</a>
        <Modalabc open={isopen} onClose={ () => setisopen(false)}>
       
        <div style={{textAlign:"center"}}>
        <img className="modalImageLogo" src={OfficialLogo} alt="Marq 2.0"/>
        </div>
         <div style={{padding:"0px 40px"}}>
           <Form/>
         </div>
          <br/>
          <br/>
          <div style={{width: "100%", background: "linear-gradient(101deg, #d4af37, #000)", color:"white", textAlign: "center", padding:"10px 0px"}}>
          <a href="tel:01234567890"><img src={Callusback} style={{maringLeft:"10px"}}/>  <span style={{color:"white"}}>9071354854</span></a> 
          </div>
        </Modalabc>
        </div>
    );
};
    
export default Modal;