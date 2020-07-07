import React, {Fragment, useState, useEffect} from 'react';
import Club from '../clubs/club';
import Form from './form';


async function getClubs() {
  let response = await fetch('http://localhost:3000/api/clubs.json')
  let data = await response.json();
  return data;
}

const Clubs = (props) => {
  const [clubs, setClubs] = useState([]);

useEffect(() => {
  getClubs().then(data => {
  setClubs(data['clubs'])
  })
}, [])

const addClub = (newClub) => {
  setClubs([...clubs, newClub])
}
  
  return (
      <Fragment>
          <h1>Clubes de futebol do Rio de Janeiro</h1>
          <hr/>
          <Form addClub={addClub}/>
          <hr/>
          {clubs.map((club, index) =>
          <Club id={club.id}
                name={club.name}
                link={club.link}
                img_shield={club.img_shield}
                img_mascot={club.img_mascot}
                description={club.description}
                key={index}
          />
          )}
      </Fragment>
    )
}

export default Clubs;