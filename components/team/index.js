import styles from './team.module.scss';
import Image from 'next/image';
import Phat from '../../public/avatar/engineer/Phat.svg';
import Alvin from '../../public/avatar/engineer/Alvin.svg';
import Bogdan from '../../public/avatar/engineer/Bogdan.svg';
import Kevin from '../../public/avatar/engineer/Kevin.svg';
import Owais from '../../public/avatar/engineer/Owais.svg';
import Trinh from '../../public/avatar/engineer/Trinh.svg';
import Yannis from '../../public/avatar/engineer/Yannis.svg';
import Erfan from '../../public/avatar/machine-learning/Erfan.svg';
import Pankhuri from '../../public/avatar/design/Pankhuri.svg';
import Erik from '../../public/avatar/design/Erik.svg';
import Winson from '../../public/avatar/user-experience/Winson.svg';
import Bankston from '../../public/avatar/advisor/Bankston.svg';
import Heather from '../../public/avatar/advisor/Heather.svg';
import Dan from '../../public/avatar/advisor/Dan.svg';
import Yossi from '../../public/avatar/advisor/Yossi.svg';
import Todd from '../../public/avatar/advisor/Todd.svg';
import Rocco from '../../public/avatar/founder/rocco.svg';
import Muthu from '../../public/avatar/engineer/Muthu.svg';
import Accordion from '../according';

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
  {
    avatar: Kevin,
    name: 'Kelvin Yankey',
    position: 'Software Engineer',
    published: false,
  },
  {
    avatar: Yannis,
    name: 'Yannis Mekaouche',
    position: 'Infrastructure Engineer',
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
    <div className={styles.infoWrraperView}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoContent}>
          <div className={styles.imageContent}>
            <Image
              layout='fill'
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
  return (
    <div id='meetView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>{'Meet the Team'}</span>
          <div className={styles.questionItem}>
            <Accordion title={`Engineers (${engineerPeopleData.length})`}>
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
            >
              <div className={styles.content}>
                {userExperienceAndDesignPeopleData.map((item, index) => (
                  <PeopleInformation key={index} data={item} position='right' />
                ))}
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion title={`Advisor (${advisorPeopleData.length})`}>
              <div className={styles.content}>
                {advisorPeopleData.map((item, index) => (
                  <PeopleInformation key={index} data={item} />
                ))}
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion title={`Founder (${founder.length})`}>
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
