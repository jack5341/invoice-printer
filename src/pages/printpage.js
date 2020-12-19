import {useContext} from 'react'
import {Container} from 'react-bootstrap'
import {usersStore} from '../context/getusers'
import Print from '../component/print-components/print'
import {
    useParams
} from "react-router-dom";

import "./printpage.css"

export default function Printpage(){

    const value = useContext(usersStore)
    
    let { id } = useParams();

    var user = value.find((x) => x.id == id)
    console.log(user)

    if(user){
        return (
            <>
            <Container>
                <Print company={user.company.name}
                email={user.email}
                name={user.name}
                street={user.address.street}
                zipcode={user.address.zipcode}
                city={user.address.city}
                phonenummer={user.phone}
                username={user.username}
                price={Math.floor(Math.random() * 100)} />
            </Container>
            </>
        )
    }
    
    return null
}
  