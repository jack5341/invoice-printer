import {Row,Col} from 'react-bootstrap'

export default function PrintHeader(props){
    return (
        <div className="demand-header">
            <Row>
                <Col md={8}>
                    <div className="float-left subject">
                        <p className="subject h1 mt-4">
                            {props.company}
                        </p>
                        <p className="h5">
                            Faster than everytime
                        </p>

                        <div className="contact-infos">
                            <p className="company-names">
                                {props.username + " GmbH"}
                            </p>
                            <p className="h6">
                                Herr/Damen { props.name}
                            </p>
                            <i>
                            <p className="h6">
                                {props.street} 11
                            </p>
                            <p className="h6">
                            {props.zipcode} {props.city}
                            </p>
                            </i>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <a href="/">
                        <img className="damand-logo" height="90" src="https://logos.keycdn.com/keycdn-logo.svg"/>
                    </a>
                    <div className="contact-infos">
                            <p className="company-names">
                                {props.company}
                            </p>
                            <p className="h6">
                                {props.street} 11
                            </p>
                            <p className="h6">
                            {props.zipcode} {props.city}
                            </p>
                            <p className="h6">
                                Tel: {props.phonenummer}
                            </p>
                            <p className="h6">
                                Mobil: {props.phonenummer}
                            </p>
                            <p className="h6">
                                Email: {props.email}
                            </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}