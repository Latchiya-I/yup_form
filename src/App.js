import './App.css';
import { userValidation } from'./Validation';

function App() {
   const createuser = async(event)=>{
    event.preventdefault()
    let formData={
      name:event.target[0].value,
      email:event.target[1].value,
      password: event.target[2].value,
    }
    console.log(formData)
    const isValid =  await userValidation.isValid(formData)
    console.log(isValid)
   }

  return (
    <div className='App'>
        <form className='form' onSubmit={createuser}>
            <input type='text' placeholder='name'/>
            <input type='text' placeholder='email'/>
            <input type='text' placeholder='password'/>
            <input className='submit' type='submit'/>
             
        </form>
        </div>
  );
}
export default App;
