import React, { Component } from 'react';
import './Home.css';
import { Card } from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="text-center">
                    <div className="h">FIRE EXTINGUISHER MONITORING SYSTEM </div>
                </div>
                
                <div className="row custom-background">
                    <div className="col-md-3">
                        <Card
                            imgSrc="./pic1.png"
                            imgAlt="Cardimg1"
                            title="Missing FE"
                            number={3}
                            present={0}
                        />
                    </div>
                    <div className="col-md-3">
                        <Card
                            imgSrc="./pic2.jpg"
                            imgAlt="Cardimg2"
                            title="Safe FE"
                            number={5}
                            present={1}
                        />
                    </div>
                    <div className="col-md-3">
                        <Card
                            imgSrc="./pic1.png"
                            imgAlt="Cardimg1"
                            title="Maintance "
                            number={2}
                            present={0}
                        />
                    </div>
                    <div className="col-md-3">
                        <Card
                            imgSrc="./pic1.png"
                            imgAlt="Cardimg1"
                            title="Low Battery"
                            number={2}
                            present={0}
                        />
                    </div>
                </div>
                <div className='h1'>STATUS OF EACH FE :</div>
                <div className='status-container'>
                    <div className="row">
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg1"
                                title="Parking"
                                present={1}
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg2"
                                title="1st floor"
                                present={0}
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg3"
                                title="2nd floor"
                                present={1}
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg4"
                                title="3rd floor"
                                present={1}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg5"
                                title="5th floor"
                                present={0}
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg6"
                                title="Canteen"
                                present={0}
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg7"
                                title="Audi"
                                present={1}
                            />
                        </div>
                        <div className="col-md-3">
                            <Card
                                imgAlt="Cardimg9"
                                title="Pathway"
                                present={1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
