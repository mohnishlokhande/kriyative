import React, { Component } from 'react';
import child1 from './img/about_1.png';
import './Aboutus.css';
import flowcircle from './img/job1.png';
import child3 from './img/smallbaby.png';
import child2 from './img/smallgirl.png';
import back from './img/arrow_back_ios_24px.png';
import forward from './img/arrow_forward_ios_24px.png';
import  expert from './img/2_expert.png';
import { Link } from 'react-router-dom';

class About2 extends Component{


    render(){
        return(
            <div className="maincontainer">
                <div className="rowcard1">
                    <div className="aboutcard1">
                        <div className="card1">
                            <h1 className="head_1">What is KRIYATIVE?</h1>
                            <br />
                            <p className="detail_1">Welcome to Kriyative, an organization dedicated to fulfilling today’s learners’ needs by efficiently fusing traditional learning styles with modern pre-requisitives. We create creatively-designed learning modules, to accommodate your children’s and students needs, all this while making learning fun and wholesome. Scroll down to know more about what we do!</p>
                        </div>
                    </div>
                    <div className="aboutcard2">
                        <img src={child1} />
                    </div>
                </div>
                <div className="rowcard2">
                    <div className="aboutcard2_1">
                        <img src ={child2} />
                    </div>
                    <div className="aboutcard2_2">
                        <div className="card2">
                            <h1 className="head_2">We the KRIYATORS</h1>
                            <br />
                            <p className="detail_2">We at Kriyative constantly aim at providing our best services. The array of learning modules, services and products we create – with our team of positively-driven individuals – are based on research and background study and in-depth knowledge of child’s psychology and the intricate working of the brain. So you know your child ‘s intellect is honed wholesomely.</p>
                        </div>
                    </div>
                </div>
                <div className="rowcard3">
                    <div className="aboutcard3_1">
                        <div className="card3">
                            <h1 className="head_3">Who is a KRIYATOR?</h1>
                            <br />
                            <div className="arrow">
                                <span><Link to="/about"><img src={back} /></Link><span className="tab"></span><Link to="/about3"><img src={forward} /></Link></span>
                            </div>
                            <br />
                            <br />
                            <div className="icon">
                            <span><img src={expert }/></span><span className="tab"></span> <p className="detail_3">Creative expert</p>
                            </div>
                        </div>
                    </div>
                    <div className="aboutcard3_2">
                        <img src={flowcircle} />
                    </div>
                </div>
                <div className="rowcard4">
                    <div className="aboutcard4_1">
                        <img src={child3} />
                    </div>
                    <div className="aboutcard4_2">
                        <div className="card4">
                            <h1 className="head_4">Why KRIYATIVE?</h1>
                            <br />
                            <p className="detail_4">We, the Kriyators, promote and promulgate creative thinking among both the teachers and learners- a powerful tool, sadly under neglect – to facilitate learning. We passionately believe that every child is innately gifted to learn, albeit differently.</p>
                            <br />
                            <p className="detail_4">Our modules, products are based on meticulous research and real factual data, giving us a strong scientific backing. We constantly strive to re-energize, keep up-to-date our curriculum, while tailoring to satiate all your needs. Our products are user-friendly are give full benefit of promoting learning.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default About2;