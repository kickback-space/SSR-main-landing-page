import styles from './team.module.scss';
import Image from 'next/image';
import Accordion from '../according';
// Engineer team
import Muthu from '../../public/team/engineerMuthu.png';
import Owais from '../../public/team/engineerOwais.png';
import Alvin from '../../public/team/engineerAlvin.png';
import Phat from '../../public/team/engineerPhat.png';
import Trinh from '../../public/team/engineerTrinh.png';
import Bogdan from '../../public/team/engineerBogdan.png';

// Designer an User Experience team
import Pankhuri from '../../public/team/designerPankhuri.png';
import Erik from '../../public/team/designerErik.png';
import Winson from '../../public/team/designerWinson.png';

// advisor team
import Bankston from '../../public/team/advisorBankston.png';
import Dan from '../../public/team/advisorDan.png';
import Heather from '../../public/team/advisorHeather.png';
import Todd from '../../public/team/advisorTodd.png';
import Yossi from '../../public/team/advisorYossi.png';

// founder team
import Rocco from '../../public/team/founderRocco.png';
import Erfan from '../../public/team/founderErfan.png';
import { useState } from 'react';

const engineerPeopleData = [
  {
    avatar: Phat,
    name: 'Phat Trinh Chan',
    position: 'Software Engineer',
    published: false,
  },
  {
    avatar: Bogdan,
    name: 'Bogdan Marin',
    position: 'Cloud Engineer',
    published: false,
  },
  {
    avatar: Alvin,
    name: 'Alvin Shaita',
    position: 'Software Enginer',
    published: false,
  },
  {
    avatar: Owais,
    name: 'Owais Nasir',
    position: 'Software Engineer',
    published: false,
  },
  {
    avatar: Muthu,
    name: 'Dr.Muthu Ramalingam',
    position: 'Applied Machine Learning Engineer',
    published: true,
  },
  {
    avatar: Trinh,
    name: 'Trinh Dong',
    position: 'Frontend Engineer',
    published: false,
  },
];
const userExperienceAndDesignPeopleData = [
  {
    avatar: Erik,
    name: 'Erik Nanda',
    position: 'Lead Designer',
    published: false,
  },
  {
    avatar: Winson,
    name: 'Winson Teo',
    position: 'Architect & CGI Artist',
    published: false,
  },
  {
    avatar: Pankhuri,
    name: 'Pankhuri Badal',
    position: 'Designer',
    published: false,
  },
];
const advisorPeopleData = [
  {
    avatar: Bankston,
    name: 'Mercedes Bankston',
    position: 'Sales, Startups, and Video Conferencing',
    published: false,
  },
  {
    avatar: Heather,
    name: 'Heather Holst-Knudsen',
    position: 'Startups, Events, and everything in-between',
    published: false,
  },
  {
    avatar: Dan,
    name: 'Dan Isla',
    position: 'VP of Product at Itopia',
    published: false,
  },
  {
    avatar: Yossi,
    name: 'Yossi Feinberg',
    position: 'Professor of Economics at Stanford University',
    published: false,
  },
  {
    avatar: Todd,
    name: 'Todd Nilson',
    position:
      'Digital Strategist, Online Community Professional and Entrepreneur',
    published: false,
  },
];
const founder = [
  {
    avatar: Rocco,
    name: 'Rocco Haro',
    position: 'Principal',
    published: true,
  },
  {
    avatar: Erfan,
    name: 'Erfan Eshratifar',
    position: 'Chief ML Scientists',
    published: false,
  },
];

function PeopleInformation(props) {
  return (
    <div className={styles.infoWrapperView}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoContent}>
          <div className={styles.imageContent}>
            <Image
              layout='fill'
              objectFit='fill'
              src={props.data.avatar}
              alt={props.data.name}
            />
          </div>
          <div className={styles.textContent}>
            <span className={styles.textUser}>{props.data.name}</span>
            <span className={styles.textPosition}>{props.data.position}</span>
            {props.data.published ? (
              <div className={styles.textPublished}>{'Published'}</div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function Team() {
  const [indexActive, setIndexActive] = useState(null);
  function updateStateAccordion(indexAccordion) {
    setIndexActive(indexAccordion);
  }
  return (
    <div id='teamView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>{'Meet the Team'}</span>
          <div className={styles.questionItem}>
            <Accordion
              title={`Engineers (${engineerPeopleData.length})`}
              toggleAccordion={updateStateAccordion}
              active={indexActive === 1}
              indexAccordion={1}
            >
              <div className={styles.content}>
                {engineerPeopleData.map((item, index) => (
                  <PeopleInformation key={index} data={item} position='left' />
                ))}
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion
              title={`User Experience & Designers (${userExperienceAndDesignPeopleData.length})`}
              toggleAccordion={updateStateAccordion}
              active={indexActive === 2}
              indexAccordion={2}
            >
              <div className={styles.content}>
                {userExperienceAndDesignPeopleData.map((item, index) => (
                  <PeopleInformation key={index} data={item} position='right' />
                ))}
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion
              title={`Advisor (${advisorPeopleData.length})`}
              toggleAccordion={updateStateAccordion}
              active={indexActive === 3}
              indexAccordion={3}
            >
              <div className={styles.content}>
                {advisorPeopleData.map((item, index) => (
                  <PeopleInformation key={index} data={item} />
                ))}
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion
              title={`Founder (${founder.length})`}
              toggleAccordion={updateStateAccordion}
              active={indexActive === 4}
              indexAccordion={4}
            >
              <div className={styles.content}>
                {founder.map((item, index) => (
                  <PeopleInformation key={index} data={item} />
                ))}
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
