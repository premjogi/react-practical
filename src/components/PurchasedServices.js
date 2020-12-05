import React, { Component } from 'react'
import axios from 'axios'
class PurchasedServices extends Component {
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
        var sum = 0
        // Purchased Services
        const purchasedServices = services.map((purchasedService) => {
            return (purchasedService.purchased_office_template.purchased_office_services).map((subPurchasedService) => {
                return (subPurchasedService.service_selected == null || undefined ? '' :
                    <div className="container bcontent" key={subPurchasedService.id} style={{ height: "160px" }} >
                        <h2 align="left">{purchasedService.name}:</h2>
                        <div className="card" style={{ height: "115px" }}>
                            <div className="row no-gutters">
                                <div className="col-sm-5">
                                    <img className="card-img" src={subPurchasedService.image} style={{ height: "70px", width: "70px", marginTop: "18px", marginLeft: "-350px" }} alt={subPurchasedService.name} />
                                </div>
                                <div className="col-sm-7" style={{ marginLeft: "-300px", marginBottom: "-10px" }}>
                                    <div className="card-body">
                                        <div>
                                            <h6 className="card-title" align="left" style={{ marginLeft: "-70px" }}>{subPurchasedService.name}</h6>
                                            <p align="right" style={{ marginRight: "-280px", marginTop: "-35px" }}><b>Rs. {subPurchasedService.price}/-</b></p>
                                            <p className="-text" style={{ marginLeft: "-80px", marginTop: "-10px", marginBottom: "20px" }}>{subPurchasedService.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >

                )
            })
        })

        // Purchased Services Total
        const purchasedServicesTotal = services.map((service) => {
            return (service.purchased_office_template.purchased_office_services).map((sub, index) => {
                return (sub.service_selected == null ? '' :
                    <div className="container">
                        <div className="container bcontent" style={{ height: "50px" }}  >
                            <div className="card bg-dark" >
                                <div className="row no-gutters">
                                    <div className="col-sm-5">

                                    </div>
                                    <div className="col-sm-7" style={{ marginLeft: "-300px", marginBottom: "0px" }}>
                                        <div className="container">
                                            <div>
                                                <h6 className="card-title text-white" align="left" style={{ marginLeft: "-120px" }}>{sub.name}</h6>
                                                <p align="right" className="text-white" style={{ marginRight: "-280px", marginTop: "-35px" }}><b>Rs.{sub.price}/-</b></p>
                                                <p style={{ visibility: "hidden" }}>H</p>
                                                <hr /><p style={{ marginLeft: "-120px", marginTop: "-30px" }} className="text-white" align="left">Total Costing</p><p className="text-white" style={{ marginRight: "-280px", marginTop: "-35px" }} align="right">Rs. {sum = sum + parseInt(sub.price)}/-</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )
            })
        })
        return (
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <h1 className="font" align="left">Purchased Services:</h1>
                <p align="left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                {purchasedServices}
                <br />
                {purchasedServicesTotal}
                <br /><br />
                <br /><br /><br />
            </div>
        )
    }
}

export default PurchasedServices
