import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-awesome-styled-grid';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';
import siteConfig from '../../data/siteConfig';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SEO from '../components/SEO';
import Wrapper from '../components/wrapper';
import RequestForm from '../components/request_form';

class Home extends React.Component {
  render() {
    const { keywords } = siteConfig;

    return (
      <Layout location={this.props.location}>
        <SEO
          title={siteConfig.siteTitle}
          keywords={keywords}
        />

        <Hero
          heroImg={siteConfig.siteCover}
          title={siteConfig.homeTitle}
        />

        <Wrapper className={this.props.className}>
          <Container className="page-content" fluid>
            <Row>
              <Col xs={12}>
                <h2>{siteConfig.formTitle}</h2>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <RequestForm />
              </Col>
            </Row>
            <Row>
              <Col xs={12} className='social-container'>
                <div className="social">
                  {siteConfig.social.github &&
                  <a className="social-link github" href={siteConfig.social.github}>
                    <FaGithub className="social-icon" size="32"/>
                  </a>}
                  {siteConfig.social.linkedin &&
                  <a className="social-link linkedin" href={siteConfig.social.linkedin}>
                    <FaLinkedin className="social-icon" size="32"/>
                  </a>}
                  {siteConfig.social.twitter &&
                  <a className="social-link twitter" href={siteConfig.social.twitter}>
                    <FaTwitter className="social-icon" size="32"/>
                  </a>}
                  {siteConfig.social.email &&
                  <a className="social-link email" href={`mailto:${siteConfig.social.email}`}>
                    <FaEnvelope className="social-icon" size="32"/>
                  </a>}
                </div>
              </Col>
            </Row>
          </Container>
        </Wrapper>
      </Layout>
    );
  }
}

export default styled(Home)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
  
  .social-container {
    display: flex;
    justify-content: center;
  }

  .social {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  .social-link {
    padding: 8px;
    color: #555;
    transition: color 200ms;
  }

  a.social-link.twitter:hover {
    color: #1da1f2;
  }

  a.social-link.github:hover {
    color: #24292e;
  }

  a.social-link.linkedin:hover {
    color: #0077B5;
  }

  a.social-link.email:hover {
    color: #c23a2b;
  }
`;
