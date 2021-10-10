import React from 'react';
import { Container, Table, Button, Row, Col, Placeholder, Alert } from 'react-bootstrap'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import bannerBreadcrumbs from '../../public/images/breadcrumb.jpg'
import BreadCrumb from '../../components/Breadcrumb'
import {Helmet} from "react-helmet";
import About from '.';


export default function Socialgeological() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Social and Geological of Kondagaon | Kondagaon Municipal Corporation</title>
            </Helmet>
            <Header />
            <BreadCrumb banner={bannerBreadcrumbs} name="About / Social and Geological of Kondagaon" />
            <section className="sectionBlock py-5">
                <Container>
                    <h3>Background</h3>
                    <p>Kondagaon is located at 19.6°N 81.67°E.[2] It has an average elevation of 593 metres (1945 feet).
                       As of 2011 India census,[3] Kondagaon had a population of 40,921. Males constitute 50% of the population and females 50%. Kondagaon has an average literacy rate of 64%, higher than the national average of 59.5%: male literacy is 73%, and female literacy is 55%. In Kondagaon, 14% of the population is under 6 years of age.
                       Kondagaon lies on the NH 30 highway and can be reached from either Raipur or Jagdalpur. Frequent bus services are available to Kondagaon from Raipur and Jagdalpur. The nearest railway station is Jagdalpur. A Helicopter strip was temporarily constructed in the playground adjacent to the government college campus, which is occasionally used in kondagaon.
                       The town is known for the foodies, being migrants and settlers from various parts of India including the south and the north. Lala hotel is the oldest hotel in the city operating through post independence era when kondagaon was as much of a small city. Nirala Chaat Bhandaar is a patron pot pouri maker in the town famous for relishing pot pouris.in this time recently construction work is completed 100 bedded MCH wing for child and mother hospital govt. Of india (HSCC (I) LTD. Kondagaon situated on banks of river Narangi.</p>
                    
                    <h3>Industries</h3>
                    <h5>Art and Craft</h5>
                    <p>The Bell Metal Craft practiced by most of the craftsmen in the town and the adjacent villages is a form of almost extinct wax sculpting art. Some of the celebrated craftsmen of the bell-metal art forms are late Dr. Jaidev Baghel (a national awardee), Sushil Sakhuja, Sukchand, Suresh Baghmare etc.
                        The government endow various schemes and policies to promote these art forms and artisans including sponsoring a select few second or third generation artisans for training in the national institute of design, enabling them to keep abreast with the trends and also widening the scope of their art forms.</p>
                    <h5>Timber</h5>
                    <p>Kondagaon is famous for timber mills too, as the division hosts one of the largest forest division in the Indian subcontinent.</p>


                    <h3>Sports</h3>
                    <p>In April 2016, ITBP Commandant Surinder Khatri (Mob 9482785694) started Sports coaching of Hockey, Archery, Judo and Karate for the tribal children.<br />
                       (1)Hockey: It was started in Mardapal. Due to the coaching imparted by ITBP Head Constable Surya Smit (08249695146) and Constable Kartik, Mardapal Ashram Girls Hockey Team have become Runners Up at State level in 2019. Following children are playing at National level in respective age groups - Sulochana, Sukmati, Savitri, Sevanti, Dhaneswari, Tanisha<br />
                       (2) Archery: Under ITBP Archery coach Head Constable Trilochan Mohanta (+919439814645), Kondagaon children have won more than 150 medals at State level and 8 medals (4G, 3S, 1B) at National level between 2016 and 2019. Following children are playing at National level- Ms Dakhsa Yadav and Ms Ramita Sori<br />
                       (3) Judo: Under ITBP Head Constable Jai Prakash and Constable Zahid Khan, Kondagaon children have won more than 100 medals at State level between 2016 and 2019. Children those who have represented at National level under different weights are-in 30 kg Nandalal Poyam, in 35 kg Yogesh Sori, in 40kg Anil Kumar Gota, in 32 kg Kusum Korram, in 52 kg Parwati Sarkar.</p>
                    
                    <h3>Tourism</h3>
                    <p>A couple of hillocks that skirts the eastern outskirts of the town (Kondagaon) have been revamped as a tourist park by the forest department. The park would host relocated common wild animals and fowls of the Bastar region. The major part of the hill is turned into recreational zone.<br />
                        The Coconut development board located in southern frills of the town is a central government coconut development farm, sprawling across acres of coconut and assorted plantation.<br />
                        In the Keshkal block of district Kondagaon, more a dozen of waterfalls and few caves have been found out a couple of years ago. Some of the known waterfalls, caves, valleys and archeological sites are:</p>
                    <h5>Waterfalls</h5>
                    <ul>
                        <li>Katulkasa Waterfall, Honhed</li>
                        <li>Bijkudum Waterfall, Uper-murvend</li>
                        <li>Umradah Waterfall</li>
                        <li>Ling-Darha Waterfall</li>
                        <li>Amadarha-1 Waterfall</li>
                        <li>Amadarha-2 Waterfall</li>
                        <li>Hankhi-kudum Waterfall</li>
                        <li>Ghumur Waterfall</li>
                        <li>Kudarwahi Waterfall</li>
                        <li>Uperbedi Waterfall</li>
                        <li>Mirde Waterfall</li>
                        <li>Mutte-Khadka Waterfall</li>
                        <li>Cherbeda Waterfall</li>
                    </ul>

                    <h5>Caves</h5>
                    <ul>
                        <li>Alor cave</li>
                        <li>Bijkudum cave</li>
                        <li>Katthan-gundi cave</li>
                    </ul>

                    <h5>Valleys</h5>
                    <ul>
                        <li>Keshkal Valley</li>
                    </ul>

                    <h5>Keshkal Valley</h5>
                    <ul>
                        <li>Gobrahin</li>
                        <li>Garh-dhanora</li>
                        <li>Amrawati</li>
                    </ul>

                    <h5>Megalithic sites</h5>
                    <ul>
                        <li>Umradah (Here rock paintings have been found)</li>
                        <li>Hata Pathra (Here rock paintings have been found)</li>
                        <li>Ling-Darha Waterfall (Here rock paintings have been found)</li>
                    </ul>
                
                
                </Container>
            </section>
            <Footer />
        </>
    )

}