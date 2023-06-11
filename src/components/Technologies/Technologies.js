import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {FaErlang} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
    I have hands-on experience with a wide range of technologies, including React.js for front-end development, C++ for projects, and Erlang for functional programming. My diverse skill set allows me to tackle various challenges and deliver innovative solutions.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>
            Front-end
          </ListTitle>
          <ListParagraph>Internship experience with react.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>
           Back-end
          </ListTitle>
          <ListParagraph>Experience with node.js and C++ for backend development</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaErlang size="3rem"/>
        <ListContainer>
          <ListTitle>
            Functional Programming
          </ListTitle>
          <ListParagraph>Experience with erlang</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
