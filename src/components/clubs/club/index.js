import React, { Fragment, useState, useEffect } from "react";
import SizeImg from '../../shared';

import { Link } from 'react-router-dom';
 

const Club = (props) => {
    let title;
    title = <h2>{props.name}</h2>;

    return (
      <Fragment>
        <Link to={`/club/${props.id}`}>{title}</Link>
        <h3>Escudo e Mascote</h3>
        <div>
        <SizeImg img_shield={props.img_shield} img_mascot={props.img_mascot}/>
        </div>
        <a href={props.link}>Site oficial do clube</a>
        <p>{props.description}</p>
        <hr/>
      </Fragment>
    )
}

export default Club;