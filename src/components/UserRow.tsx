import { User } from '../interfaces'


interface Props{
    user:User;
}
export const UserRow = ({user}: Props) => {
    
    const {films,enemies,name,imageUrl,url} = user;
    return (
        <tr><img style={{width: '300px'}} src={imageUrl} />
        <td>{films} </td>
        </tr>
    )
}