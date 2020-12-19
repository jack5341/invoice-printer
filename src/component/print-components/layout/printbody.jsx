import {Table} from 'react-bootstrap'
import moment from 'moment'

export default function PrintBody(props){
    return (
        <>
            <p className="subject h2 mt-5">
                Invoice <small style={{fontSize: "15px"}}>Invoice no: #{props.invoiceno} </small>
                 <small style={{fontSize: "15px"}} className="float-right pt-3"> {moment().subtract(10, 'days').calendar()} </small>
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