import {Table} from 'react-bootstrap'

export default function UserTable(props){
    
    return (
        <>
            <a target="_blank" href={"/print/" + props.id}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td> {props.id} </td>
                        <td> {props.name} </td>
                        <td> {props.username} </td>
                        <td> {props.email} </td>
                        <td> {props.company} </td>
                        <td> {props.phone} </td>
                        <td> {props.price} € </td>
                        </tr>
                    </tbody>
                </Table>
            </a>        
        </>
    )   
}
