import React, { Fragment, useState, useEffect } from "react";
import SizeImg from '../shared';
import {useParams, useHistory, Redirect} from 'react-router-dom';

 async function getPlanet(id) {
   let response = await fetch(`http://localhost:3000/api/${id}.json`)
   let data = await response.json();
   return data;
 }

const Club = () => {
  const [planet, setPlanet] = useState({});
  const [redirect, setRedirect] = useState(false);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
      getPlanet(id).then(data => {
      setPlanet(data['data']);
    }, error => {
      setRedirect(true);
    })
  }, [])

  const goToClubs = () => {
    history.push('/');
  }

  if(redirect)
  return <Redirect to='/'/>

    return (
      <Fragment>
        <h2>{planet.name}</h2>
        <h3>Escudo e Mascote</h3>
        <div>
        <SizeImg img_shield={planet.img_shield} img_mascot={planet.img_mascot}/>
        </div>
        <a href={planet.link}>Site oficial do Club</a>
        <p>{planet.description}</p>
        <hr/>
        <button type="button" onClick={goToClubs}>Voltar a listagem!</button>
      </Fragment>
    )
}

export default Club;