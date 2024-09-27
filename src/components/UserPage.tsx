import useUsers from '../hooks/UseUsers';
import { UserRow } from './UserRow';


const UserPage = () => {

    const {users, nextPage, prevPage} = useUsers();

    return (
        <>
            <h3>Disney</h3>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                     users.map(user => (
                        <UserRow key={user.imageUrl} user={user} />
                     ))
                    }
                </tbody>
            </table>
            <div>
                <button onClick={prevPage}>Prev</button>
                <button onClick={() => nextPage()}>Next</button>
            </div>
        </>
      )
}
export default UserPage