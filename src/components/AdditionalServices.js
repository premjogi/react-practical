import React, { Component } from 'react'
import axios from 'axios'
class AdditionalServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            services: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonkeeper.com/b/356L')
            .then((response) => {
                // console.log(response.data.data.purchased_services)
                this.setState({ services: response.data.data.purchased_services })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        const { services } = this.state
        // Additional Services
        const additionalServices = services.map((service) => {
            return (service.purchased_office_template.purchased_office_services).map((sub, index) => {
                return (sub.service_selected == null || undefined ?

                    <div className="container bcontent" key={sub.id} style={{ height: "160px" }}>
                        <h2 align="left">{service.name}:</h2>
                        <div className="card" style={{ height: "115px" }}>
                            <div className="row no-gutters">
                                <div className="col-sm-5">
                                    <img className="card-img" src={sub.image} style={{ height: "70px", width: "70px", marginTop: "18px", marginLeft: "-350px" }} alt={sub.name} />
                                </div>
                                <div className="col-sm-7" style={{ marginLeft: "-300px", marginBottom: "-10px" }}>
                                    <div className="card-body">
                                        <div>
                                            <h6 className="card-title" align="left" style={{ marginLeft: "-70px" }}>{sub.name}</h6>
                                            <p align="right" style={{ marginRight: "-280px", marginTop: "-35px" }}><b>Rs. {sub.price}/-</b></p>
                                            <p className="-text" style={{ marginLeft: "-80px", marginTop: "-10px", marginBottom: "20px" }}>{sub.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                    : ''

                )
            })
        })

        return (
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <h1 className="font" align="left">Additional Services:</h1>
                <p align="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {additionalServices}
            </div>
        )
    }
}

export default AdditionalServices
