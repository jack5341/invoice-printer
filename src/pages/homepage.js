import {useContext} from 'react' 
import UserTable from '../component/table/table'

// Context Api's
import {usersStore} from '../context/getusers'

export default function Homepage(){
    const value = useContext(usersStore)

    return (
        <>
            { 
                value.map((x,index) =>
                 <UserTable key={index}
                 id={x.id}
                 name={x.name}
                 username={x.username}
                 phone={x.phone}
                 email={x.email}
                 company={x.company.name}
                 price={Math.floor(Math.random() * 100)}
                  />) 
            }
        </>
    )
}