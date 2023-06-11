import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle fontsize={'4rem'}>
        Software Developer, Certified Ethical hacker & an eternal learner <br/>
      </SectionTitle>
      <SectionText>
      Transforming Complexity into Simplicity. Unleashing Creativity, One Line of Code at a Time.
      </SectionText>
      <Button onClick={()=>window.location="https:"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;