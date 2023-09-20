import React from 'react'
import { Container, ListGroupItem } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import { Col, Container, Row } from 'react-bootstrap';

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2> Skills</h2>
                            <p>List Line 49:15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className='item'>
                                    <img src={meter1} />
                                    <h5>Web developper</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} />
                                    <h5>Web developper</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} />
                                    <h5>Web developper</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter1} />
                                    <h5>Web developper</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills