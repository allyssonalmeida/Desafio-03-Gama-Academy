import React, { useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import axios from 'axios';

const Lead: StorefrontFunctionComponent = ({}) => {
  const CSS_HANDLES = ['container','group','input','label']
  const handles = useCssHandles(CSS_HANDLES)

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const changeName = (event: any)=>{
    setName(event.target.value)
  }
  const changeEmail = (event: any)=>{
    setEmail(event.target.value)
  }
  const changePhone = (event: any)=>{
    setPhone(event.target.value)
  }
  const data = {
    "id": Date.now().toString(),
    "name": name,
    "email": email,
    "phone": phone
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    axios.post('https://nunccx0oee.execute-api.us-east-2.amazonaws.com/default/subscriber', 
    data);
    setTimeout(()=>{
      setSucesso(true);
    },1000);
    setTimeout(()=>{
      setSucesso(false);
    },4000);
  }

  return(
    <form className={`${handles.container} pa4 `} onSubmit={handleSubmit}>
      <div className={`${handles.group} mt3`}>
        <label className={`${handles.label} db fw4 lh-copy f6 c-on-action-primary`}>Nome:</label>
        <input type="text" name="name" placeholder="João da Silva" required className={`${handles.input} mt2 pa2 input-reset ba br2 w-100 measure`} value={name} onChange={changeName}/>
      </div>
      <div className={`${handles.group} mt3`}>
        <label className={`${handles.label} db fw4 lh-copy f6  c-on-action-primary`}>E-mail:</label>
        <input type="email" name="email" placeholder="joaosilva@email.com" required className={`${handles.input} mt2 pa2 input-reset ba br2 w-100 measure`} value={email} onChange={changeEmail}/>
      </div>
      <div className={`${handles.group} mt3`}>
        <label className={`${handles.label} db fw4 lh-copy f6  c-on-action-primary`}>Telefone:</label>
        <input type="phone" name="phone" placeholder="(87) 988332211" className={`${handles.input} mt2 pa2 input-reset ba br2 w-100 measure`} value={phone} onChange={changePhone}/>
      </div>
      <div className={`${handles.group} mt3`}>
        <button className="bg-action-primary ph3 pv2 input-reset ba bw1 br2 fw5 c-on-action-primary c-on-base c-on-base--inverted grow pointer f6" type="submit"> Cadastrar </button>
      </div>
      {sucesso ?
      <div className={`${handles.group} mt3 bg-light-green`}>
        <p className="white">Você foi Cadastrado com sucesso :D</p>
      </div>
      : ''}
    </form>
  )
}

export default Lead
