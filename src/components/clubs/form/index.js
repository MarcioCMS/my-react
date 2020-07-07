import React, {Fragment, useState} from 'react';

const initialState = {
  name: '',
  link: '',
  img_shield: '',
  img_mascot: '',
  description: ''
}

const Form = (props) => {
  const [fields, setFields] = useState(initialState)

  const handleChange = (e) => setFields({
      ...fields,
      [e.currentTarget.name]: e.currentTarget.value
  });

  const handleSubmit = event => {
    props.addClub(fields)
    event.preventDefault();
    setFields(initialState);
  }
   
  return (
    <Fragment>
        <form onSubmit={handleSubmit}>
          <div>
             <label htmlFor="name">Nome:</label>
             <input type="text" id="name" name="name" value={fields.name} onChange={handleChange}/>
          </div>
          <div>
             <label htmlFor="link">Link:</label>
             <input type="text" id="link" name="link" value={fields.link} onChange={handleChange}/>
          </div>
          <div>
             <label htmlFor="img_shield">Escudo:</label>
             <input type="text" id="img_shield" name="img_shield" value={fields.img_shield} onChange={handleChange}/>
          </div>
          <div>
             <label htmlFor="img_mascot">Mascote:</label>
             <input type="text" id="img_mascot" name="img_mascot" value={fields.img_mascot} onChange={handleChange}/>
          </div>
          <div>
             <label htmlFor="description">Descrição:</label>
             <textarea id="description" name="description" value={fields.description} onChange={handleChange}/>
          </div>
          <br/>
          <input type="submit"/>
        </form>
    </Fragment>
    )
}


export default Form;