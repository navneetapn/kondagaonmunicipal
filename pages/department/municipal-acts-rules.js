import React, { useEffect, useState } from 'react'
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";




export default function Municipalactsrules() {
    const [basePath, setBasepath] = useState([]);
    useEffect(() => {
        setBasepath(window.location.origin);
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Municipal Acts Rules | Kondagaon Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="Department / Municipal Act, Rules" />
            <section className="sectionBlock py-5">
                <Container>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover table-striped">
                            <thead className="all-text-white bg-grad">
                                <tr>
                                    <th scope="col">S. No.</th>
                                    <th scope="col">Subject / Heading</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="Information Act">Information Act</a></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                    <a href={basePath + "/docs/TheChhattisgarhMunicipalitiesAct_1.pdf"} title="MUNICIPAL ACT" target="_blank">Municipal Act</a></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="BHUMI VIKAS ADHINIYAM">Bhumi Vikas Adhiniyam</a></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <a href={basePath + "/info-needed"} title="MUNICIPAL COLONIZER RULES" target="_blank">Municipal Colonizer Rules</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )

}