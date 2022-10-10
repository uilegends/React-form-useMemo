import React, { useState } from 'react';

const  App =  () =>  {
   
  const [inputs, setInputs] = useState({});


  const onHandlechange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs(input => ({...input, [name]:value}));
  }  
  return (
    <div className='contactForm'>
       <form onSubmit={onSubmithandler}>
       Name: <input name="name" type="text" value={inputs.name || ""} onChange={onHandlechange} />
       Age: <input type="text" name='age' value={inputs.age || ""} onChange={onHandlechange} />
       <button type='submit'>Submit</button>
       </form>
    </div>
  )

}

export default App;
