import {Table} from 'react-bootstrap'

export default function PrintBody(props){
    return (
        <>
            <p className="subject h2 mt-5">
                Invoice <small style={{fontSize: "15px"}}>Invoice no: #{props.invoiceno} </small>
                 <small style={{fontSize: "15px"}} className="float-right pt-3">19.12.2020</small>
            </p>
            <hr className="bg-dark" />
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>Company Name</th>
                <th>Pieces Product</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td> {props.company} </td>
                <td> {props.pieces} </td>
                <td> {props.price + "€"} </td>
                </tr>
            </tbody>
            </Table>
        </>
    )
}