import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Image from "gatsby-image"
import { graphql } from "gatsby"

import { css } from "@emotion/react"
import styled from "@emotion/styled"
import {spacing, color} from "../constants"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Person from "../components/person"


const PartnerWrapper = styled.div`
  display: flex; 
  background-color: ${color.BGLIGHT}; 
  margin-bottom: 2em;
  transition: all 0.3s ease-in-out;
  

  & img {
    -webkit-filter: grayscale(100%) invert(100%) contrast(200%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%) invert(100%) contrast(200%);
  }

  &:hover{
    background-color: white;

    & img {
      -webkit-filter: grayscale(0%) invert(0%) contrast(100%);
      filter: grayscale(0%) invert(0%) contrast(100%);
    }
  }
`

const LogoWrapper = styled.div`
  display: flex; 
  flex-direction: row; 
  flex-wrap: wrap; 
  align-items: center; 
  justify-content: center; 
  //background-color: green; 
  width: 100%;


  
`

const PartnerLabel = styled.div`
  background-color: ${color.BGDARK};
  color: ${color.WHITE};
  position: relative;
  width: 50px;
  min-height: 150px;

  transition: all 0.5s ease-in-out;  
  
  & > span {
    -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    transform:  translateX(-50%) translateY(-50%) rotate(-90deg); 
    position: absolute;
    top: 50%;
    left: 50%;
  }
`
const TeamGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  
  //flex: 1 1 auto;
  background-color: white;
  min-height: 150px;

  & > div {
    flex: 1 0 auto;
    flex-direction: row;
  }

  & img {
    max-height:150px;
    height:auto;
    width:auto;
    //background-color: green;
  }

  & > div:nth-child(1) {
    background-color: blue;
    text-align: center;
    position: relative;
    height: auto;
    width: 50px;
    flex-grow: 0;
    /* flex: 0 1 50px; */

    & > p {
      -moz-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
      -webkit-transform: translateX(-50%) translateY(-50%) rotate(-90deg);
      transform:  translateX(-50%) translateY(-50%) rotate(-90deg); 
            
      color: red;
      position: absolute;
      top: 50%;
      left: 50%;
    }
  } 
`


const DivisionWrapper = styled.div`
  padding: ${spacing.DOUBLE};
`

const PartnersPage = ({data}) => {
  const partnerMainImages = data.partnerMainImages.edges
  const partnerPlatinumImages = data.partnerPlatinumImages.edges
  const partnerGoldImages = data.partnerGoldImages.edges
  const partnerSilverImages = data.partnerSilverImages.edges
  const partnerBronzeImages = data.partnerBronzeImages.edges
  const partnerPatronImages = data.partnerPatronImages.edges

  
  const meta = {
    "swissloop_sponsor_logos_01-eth-zurich": {"url" : "https://ethz.ch/de.html"},
    "swissloop_sponsor_logos_01-hagenbuch": {"url" : "http://www.hagenbuch.ch/de"},
    "swissloop_sponsor_logos_01-jackcontrol": {"url" : "https://www.jackcontrol.com/index.php/de/"},
    "swissloop_sponsor_logos_01-rollstar": {"url" : "https://www.rollstar.com/en/"},
    "swissloop_sponsor_logos_01-rothpletz-lienhard": {"url" : "https://www.rothpletz.ch/"},
    "swissloop_sponsor_logos_01-seal-able": {"url" : "https://seal-able.com/"},
    "swissloop_sponsor_logos_02-empa": {"url" : "https://www.empa.ch/"},
    "swissloop_sponsor_logos_02-ibag": {"url" : "http://ibag.ch/de/"},
    "swissloop_sponsor_logos_02-lastech-ag": {"url" : "https://www.lastech.ch/site/index.cfm"},
    "swissloop_sponsor_logos_02-sfs": {"url" : "https://www.sfs.ch/?gclid=Cj0KCQiA88X_BRDUARIsACVMYD97L8FDW0dfHZFs8xOQ-0KPVpy6yQbiWAP9xm5QrPyY02EWkNHmtcsaAoa-EALw_wcB"},
    "swissloop_sponsor_logos_02-skf": {"url" : "https://www.skf.com/group"},
    "swissloop_sponsor_logos_03-eth-student-project-house": {"url" : "https://sph.ethz.ch/"},
    "swissloop_sponsor_logos_03-infra-suisse": {"url" : "https://infra-suisse.ch/"},
    "swissloop_sponsor_logos_03-jumbo": {"url" : "https://www.jumbo.ch/de/"},
    "swissloop_sponsor_logos_03-laser-lab": {"url" : ""},
    "swissloop_sponsor_logos_04-afry": {"url" : "https://afry.com/de-ch/uber-uns"},
    "swissloop_sponsor_logos_04-chopfab": {"url" : "https://www.doppelleuboxer.ch/de/"},
    "swissloop_sponsor_logos_04-infra-tunnel": {"url" : "http://www.infratunnel.ch/"},
    "swissloop_sponsor_logos_04-obb-infra": {"url" : "https://infrastruktur.oebb.at/"},
    "swissloop_sponsor_logos_05-ea": {"url" : "https://www.eunda.ch/"},
    "swissloop_sponsor_logos_05-faserplast": {"url" : "https://faserplast.ch/?keyword=faserplast&device=c&network=g&gclid=Cj0KCQjwrsGCBhD1ARIsALILBYobrdWmHLHJ-7xGY6ahSk571I77yInJybGKXqnGVKvknOU-nsRiNdYaAtJFEALw_wcB"},
    "swissloop_sponsor_logos_05-krohne": {"url" : "https://krohne.com/en/"},
    "swissloop_sponsor_logos_05-perforator": {"url" : "http://www.perforator.de/de/"},
    "swissloop_sponsor_logos_06-implenia": {"url" : "https://implenia.com/"},
    "swissloop_sponsor_logos_06-kluber-lubrication": {"url" : "https://www.klueber.com/ch/de/"},
    "swissloop_sponsor_logos_06-vivi-kola": {"url" : "https://vivikola.ch/en/"},
    "swissloop_sponsor_logos_07-nespresso": {"url" : "https://www.nespresso.com/pro"},
    "swissloop_sponsor_logos_07-stickerei-stoiber": {"url" : "https://www.stickerei-stoiber.ch/"},
    "swissloop_sponsor_logos_07-swissrail": {"url" : "https://www.swissrail.com/"},
    "swissloop_sponsor_logos_08-hasler": {"url" : "https://www.hasler.ch/"},
    "swissloop_sponsor_logos_08-murr-elektronik": {"url" : "https://www.murrelektronik.com/"},
    "swissloop_sponsor_logos_09-astra": {"url" : "https://www.astra.admin.ch/astra/de/home.html"},
    "swissloop_sponsor_logos_09-liebherr": {"url" : "https://www.liebherr.com/"},
    "swissloop_sponsor_logos_10-kindlimann": {"url" : "https://www.kindlimann.ch/"},
    "swissloop_sponsor_logos_10-maedler": {"url" : "https://www.maedler.ch/"},
    "swissloop_sponsor_logos_11-spraying-systems": {"url" : "https://www.ssco.ch/"},
    "swissloop_sponsor_logos_11-twing": {"url" : "https://www.twing.swiss/"},
    "swissloop_sponsor_logos_11-schilliger-holz": {"url" : "https://www.schilliger.ch/"},
    "swissloop_sponsor_logos_12-nikon": {"url" : "https://www.nikon.ch/"},
    "swissloop_sponsor_logos_08-alpha-associates": {"url" : "https://alpha-associates.ch/"}
    

    }
  

  return (
  <Layout headerImg={"team"}>
    <SEO title="Partners" />
    <h1>Why we should work together</h1>
    <h4>Challenging the status quo</h4>
    <p css={css`margin-bottom: 4em;`}>
      Swissloop Tunneling is creating synergies with industry and university partners to build a network in order to revolutionize the tunneling industry.
      <br/>Are you interested in a partnership? Contact us for more information: <a href="info@swisslooptunneling.ch">info@swisslooptunneling.ch</a>
    </p>

    <h1>Founding Partners</h1>
    <PartnerWrapper css={css`
      min-height: 200px;
      margin-bottom: 4em;
    `}>
      <PartnerLabel><span>Founding&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerPlatinumImages.map((element) => (
          <a css={css`flex: 0 1 300px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <Image css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} fluid={element.node.childImageSharp.fluid} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <h1>Partners</h1>
    <PartnerWrapper>
      <PartnerLabel><span>Main&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerMainImages.map((element) => (
          <a css={css`flex: 0 1 500px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <Image css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} fluid={element.node.childImageSharp.fluid} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    {/* <PartnerWrapper css={css`
      min-height: 200px;
      &:hover {
        & > :first-child {
          background-color: #E5E4E2;
          color: black;
          
        } 
      }
    `}>
      <PartnerLabel><span>Platinum&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerPlatinumImages.map((element) => (
          <a css={css`flex: 0 1 300px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <Image css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} fluid={element.node.childImageSharp.fluid} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper> */}

    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
          background-color: gold;
          color: black;
        } 
      }
    `}>
      <PartnerLabel><span>Gold&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerGoldImages.map((element) => (
          <a css={css`flex: 0 1 200px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <Image css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} fluid={element.node.childImageSharp.fluid} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
          background-color: silver;
          color: black;
        } 
      }
    `}>
      <PartnerLabel><span>Silver&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerSilverImages.map((element) => (
          <a css={css`flex: 0 1 180px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <Image css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} fluid={element.node.childImageSharp.fluid} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>
    
    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
          background-color: #cd7f32;
          color: white;
        } 
      }
    `}>
      <PartnerLabel><span>Bronze&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerBronzeImages.map((element) => (
          <a css={css`flex: 0 1 180px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <Image css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} fluid={element.node.childImageSharp.fluid} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

    <PartnerWrapper css={css`
      &:hover {
        & > :first-child {
        } 
      }
    `}>
      <PartnerLabel><span>Patron&nbsp;Partner</span></PartnerLabel>
      <LogoWrapper>
      {
        partnerPatronImages.map((element) => (
          <a css={css`flex: 0 1 180px;`} href={meta[element.node.name] ? meta[element.node.name].url : ''}>
            <Image css={css`margin: 2em 1em;`} alt={meta[element.node.name] ? meta[element.node.name].name : 'Swissloop Tunneling Partner'} fluid={element.node.childImageSharp.fluid} />
          </a>
        ))
      }
      </LogoWrapper>
    </PartnerWrapper>

  </Layout>
  )
}

export default PartnersPage
export const pageQuery = graphql`
  query {
    partnerMainImages: allFile(filter: {relativeDirectory: {eq: "partners/main"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
						fluid(quality: 90, maxWidth: 450) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					},
					name
				}
			}
		}
    partnerPlatinumImages: allFile(filter: {relativeDirectory: {eq: "partners/platinum"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
						fluid(quality: 90, maxWidth: 350) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					},
					name
				}
			}
		}
    partnerGoldImages: allFile(filter: {relativeDirectory: {eq: "partners/gold"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
						fluid(quality: 90, maxWidth: 250) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					},
					name
				}
			}
		}
    partnerSilverImages: allFile(filter: {relativeDirectory: {eq: "partners/silver"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
						fluid(quality: 90, maxWidth: 250) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					},
					name
				}
			}
		}
    partnerBronzeImages: allFile(filter: {relativeDirectory: {eq: "partners/bronze"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
						fluid(quality: 90, maxWidth: 250) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					},
					name
				}
			}
		}
    partnerPatronImages: allFile(filter: {relativeDirectory: {eq: "partners/patron"}}, sort: {order: ASC, fields: name}) {
			edges {
				node {
					childImageSharp {
						fluid(quality: 90, maxWidth: 250) {
							...GatsbyImageSharpFluid_tracedSVG
						}
					},
					name
				}
			}
		}
    headerImage: file(sourceInstanceName: {eq: "assets"}, relativePath: { eq: "bannau-misc-eingang.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  }
`