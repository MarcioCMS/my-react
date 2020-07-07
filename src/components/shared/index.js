import React, {Fragment} from 'react';
import './style.css';

const SizeImg = (props) => {
   return (
     <Fragment>
     <img className="img" src={props.img_shield}></img>
     <img className="img" src={props.img_mascot}></img>
     </Fragment>
   )
}

export default SizeImg;