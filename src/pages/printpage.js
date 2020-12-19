import {useContext} from 'react'
import {Container} from 'react-bootstrap'
import {usersStore} from '../context/getusers'
import PrintHeader from '../component/header/printheader'
import {
    BrowserRouter as Router,
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
                <PrintHeader company={user.company.name}
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
  