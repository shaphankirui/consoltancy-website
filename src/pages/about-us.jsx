import SEO from "../components/seo";
import { Wrapper } from "../layout";
import AboutUsAgencyMain from '../components/about-agency';

export default function AboutUsAgency() {
  return (
    <Wrapper>
      <SEO pageTitle={'About Us'} />
      <AboutUsAgencyMain/>
    </Wrapper>
  )
}
