import axios from 'axios'
import {Button} from 'react-bootstrap'
import PrintHeader from './layout/printheader'
import PrintBody from './layout/printbody'
import './style.css'

export default function Print(props){

    function takeScreenShot(){
        axios({
            method: "post",
            url:"http://localhost:8080/takescreenshot",
            data: {
                company: props.company,
                path: window.location.href
            }
        }).then((res) => {
            alert(res.data)
        })
    }
    
    return (
        <div className="text-left page">
            <PrintHeader
                company={props.company}
                username={props.username}
                name={props.name}
                street={props.street}
                zipcode={props.zipcode}
                city={props.city}
                phonenummer={props.phonenummer}
                email={props.email}
            />
            <PrintBody
                company={props.company}
                pieces={Math.floor(Math.random() * 10)}
                invoiceno={Math.floor(Math.random() * 9999999)}
                price={props.price}
            />
            <p className="pt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/><br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p><br/>

            <p className="text-right">
            National Account Number: 0648489890<br/>
            BLZ: 50010517<br/>
            IBAN: DE12500105170648489890
            </p>
            <Button id="printbtn" onClick={takeScreenShot}>
                Print This Invoice
            </Button>
        </div>
    )
}