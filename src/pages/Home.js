import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Home = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center">Welcome to UniFind!</h1>
            <h4 className="text-center mt-4">
                Find Your Perfect University Match with Just Your Exam Results!
            </h4>
            <p className="text-center mt-4">
                Are you eager to pursue higher education but don't know which university
                is the right fit for you? Look no further! UniFind is here to assist
                you in discovering the ideal university based solely on your exam
                results. Our innovative platform matches your academic achievements with
                universities that align with your interests and aspirations.
            </p>
            <h4 className="text-center mt-4">How It Works:</h4>
            <Row className="mt-4">
                <Col md={6}>
                    <h5>Enter Your Exam Results:</h5>
                    <p>
                        Provide us with the details of your exam scores and qualifications.
                    </p>
                    <h5>Define Your Preferences:</h5>
                    <p>
                        Tell us about your preferred study location, field of interest, and
                        any other specific requirements.
                    </p>
                </Col>
                <Col md={6}>
                    <h5>Discover Your Matches:</h5>
                    <p>
                        UniFind's intelligent algorithm will analyze your data and present
                        you with a personalized list of universities that match your
                        criteria.
                    </p>
                    <h5>Explore Detailed Profiles:</h5>
                    <p>
                        Dive into comprehensive university profiles, including information
                        about their programs, campus life, faculty, and more.
                    </p>
                    <h5>Make Informed Decisions:</h5>
                    <p>
                        Compare universities, read student reviews, and explore relevant
                        statistics to make well-informed decisions about your future.
                    </p>
                </Col>
            </Row>
            <h4 className="text-center mt-4">Why Choose UniFind:</h4>
            <Row className="mt-4">
                <Col md={6}>
                    <h5>Efficiency:</h5>
                    <p>
                        Save time and effort by finding universities tailored to your
                        academic achievements without the need for extensive research.
                    </p>
                    <h5>Personalized Recommendations:</h5>
                    <p>
                        Our algorithm considers your preferences and academic profile to
                        provide you with personalized university matches.
                    </p>
                </Col>
                <Col md={6}>
                    <h5>Comprehensive Information:</h5>
                    <p>
                        Access in-depth details about each university, including program
                        offerings, admission requirements, campus facilities, and student
                        support services.
                    </p>
                    <h5>Student Reviews:</h5>
                    <p>
                        Read reviews and testimonials from current and former students to
                        gain valuable insights into the universities you're interested in.
                    </p>
                    <h5>Data-driven Decision Making:</h5>
                    <p>
                        Explore statistical data, such as employment rates, student
                        satisfaction, and research opportunities, to make data-driven
                        choices about your education.
                    </p>
                </Col>
            </Row>
            <div className="text-center mt-4">
                <Link to={LOGIN_ROUTE}>
                    <Button variant="success">Get Started Today!</Button>
                </Link>
            </div>
            <p className="text-center mt-4">
                Begin your journey towards the perfect university match by visiting
                UniFind. Take the first step towards shaping your future and embark on
                an exciting educational adventure that suits your academic
                accomplishments and personal aspirations.
            </p>
            <p className="text-center">
                Note: UniFind is dedicated to providing accurate and up-to-date
                information. However, we recommend visiting official university websites
                for the most recent details regarding programs, admissions, and other
                relevant information.
            </p>
        </Container>
    );
};

export default Home;
