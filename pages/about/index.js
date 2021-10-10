import React, { useEffect } from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";


export default function About() {

  
    
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About | Kondagaon Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About Us" />
                <section className="sectionBlock py-5">
                    <Container>
                    <p>Kondagaon a municipality about 70 kilometers from Jagdalpur city is the headquarter of Kondagaon district in the Indian state of Chhattisgarh. It is the third largest city of Bastar division. Kondagaon separated from Bastar district on 24 January 2012 and formed as 27th district of the Chhattisgarh state. It is mostly renowned for its bell metal craft and other art forms native to the tribal of Bastar. Also known as the Shilp sheher (lit. craft city) of Chhattisgarh owing to the variety of indigenous crafts produced in the area.</p>
                    <p>MLA-Sh Mohan Lal Markam (Congress)</p>
                    <p>Collector- Pushpendra Kumar Meena[1]</p>
                    <p>SP-Sh Sujit Kumar (IPS)</p>
                    <p>CEO-Nupur Rashi Panna (IAS)</p>
                    </Container>
                </section>
            <Footer />
        </>
    )
    
}