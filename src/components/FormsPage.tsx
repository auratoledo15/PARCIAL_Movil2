import { useForm } from 'react-hook-form';

    type FormInputs = {
        email:string;
        password: string;
    }

    const FormsPage = () => {

        const {register} = useForm<FormInputs>({
            defaultValues:{
                email: 'auratoledo1@gmail.com',
                password: '123456'
            }
        })
    
  return (
    <form>
    <h3>Formularios</h3>
    <div style={{display: 'flex', flexDirection: 'column'}}>
        <input type="text" placeholder="Email" {...register('email')}/>
<br></br>
        <input type="text" placeholder="Password" {...register('password')}/>
<br></br>
        <button type="submit">Ingresar</button>
    </div>
    </form>
  )
}


export default FormsPage
