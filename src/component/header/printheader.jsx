import {Button} from 'react-bootstrap'
import axios from 'axios'

export default function PrintHeader(props){

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
        <div className="text-left">
            <a href="/">
                <img className="text-right" src="https://logos.keycdn.com/keycdn-logo.svg"/>
            </a>
            <i>
                <p className="h1 mt-4">
                    {props.company}
                </p>
                <p className="h4">
                    {props.name}
                </p>
            </i>
            <strong>
                <p className="pt-2">
                    Address  
                </p>
                <hr className="bg-dark" />
            </strong>
                <p>
                    {props.street}
                </p>
                <p>
                    {props.zipcode} {props.city}
                </p>
                <p>
                    {props.phonenummer}
                </p>
            <strong>
                <p className="pt-2">
                    Invoice
                </p>
                <hr className="bg-dark"/>
            </strong>
                <p>
                    {props.username}
                </p>
                <p>
                    {props.price} €
                </p>
                <Button onClick={takeScreenShot}>
                    Print This Invoice
                </Button>
        </div>
    )
}