import { useEffect } from 'react';
import styles from './meet.module.scss';
import Image from 'next/image';
import Phat from '../../public/avatar/engineer/Phat.svg';
import Alvin from '../../public/avatar/engineer/Alvin.svg';
import Bogdan from '../../public/avatar/engineer/Bogdan.svg';
import Muthu from '../../public/avatar/engineer/Muthu.svg';
import Owais from '../../public/avatar/engineer/Owais.svg';
import Trinh from '../../public/avatar/engineer/Trinh.svg';
import Yannis from '../../public/avatar/engineer/Yannis.svg';
import Sgadou from '../../public/avatar/machine-learning/Sgadou.svg';
import Ramalingam from '../../public/avatar/machine-learning/Ramalingam.svg';
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

const engineerPeopleData = [
  {
    avatar: Phat,
    name: 'Phat Trinh Chan',
    position: 'Frontend Engineer',
    published: false,
  },
  {
    avatar: Bogdan,
    name: 'Bogdan Marin',
    position: 'Cloud Engineer',
    published: false,
  },
  {
    avatar: Yannis,
    name: 'Yannis Mekaouche',
    position: 'Infrastructure Engineer',
    published: false,
  },
  {
    avatar: Owais,
    name: 'Owais Nasir',
    position: 'Game Developer',
    published: false,
  },
  {
    avatar: Alvin,
    name: 'Alvin Shaita',
    position: 'Software Enginer',
    published: false,
  },
  {
    avatar: Trinh,
    name: 'Trinh Dong',
    position: 'Frontend Engineer',
    published: false,
  },
  {
    avatar: Muthu,
    name: 'Muthu Samy',
    position: 'Software Engineer',
    published: false,
  },
];
const machineLearningPeopleData = [
  {
    avatar: Sgadou,
    name: 'Sgadou Tienn',
    position: 'Applied Machine Learning Engineer',
    published: false,
  },
  {
    avatar: Ramalingam,
    name: 'Dr. Muthu Ramalingam',
    position: 'Applied Machine Learning Engineer',
    published: true,
  },
  {
    avatar: Erfan,
    name: 'Erfan Eshratifar',
    position: 'Applied Machine Learning Engineer',
    published: false,
  },
];
const designPeopleData = [
  {
    avatar: Pankhuri,
    name: 'Pankhuri Badal',
    position: 'Designer',
    published: false,
  },
  {
    avatar: Erik,
    name: 'Erik Nanda',
    position: 'Lead Designer',
    published: false,
  },
];
const userExperiencePeopleData = [
  {
    avatar: Winson,
    name: 'Winson Teo',
    position: 'Architect & CGI Artist',
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
];

function PeopleInfomation(props) {
  return (
    <div className={styles.infoWrraperView}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoContent}>
          <div className={styles.imageContent}>
            <Image
              width={47}
              height={47}
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

function Meet() {
  useEffect(() => {
    var coll = document.getElementsByClassName('meet_collapsible__Re2R7');
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  }, []);
  return (
    <div className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>{'Meet the Team'}</span>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{`Engineers (${engineerPeopleData.length})`}</span>
            </button>
            <div className={styles.content}>
              {engineerPeopleData.map((item, index) => (
                <PeopleInfomation key={index} data={item} />
              ))}
            </div>
          </div>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{`Machine learning (${machineLearningPeopleData.length})`}</span>
            </button>
            <div className={styles.content}>
              {machineLearningPeopleData.map((item, index) => (
                <PeopleInfomation key={index} data={item} />
              ))}
            </div>
          </div>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{`Design (${designPeopleData.length})`}</span>
            </button>
            <div className={styles.content}>
              {designPeopleData.map((item, index) => (
                <PeopleInfomation key={index} data={item} />
              ))}
            </div>
          </div>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{`User Experience (${userExperiencePeopleData.length})`}</span>
            </button>
            <div className={styles.content}>
              {userExperiencePeopleData.map((item, index) => (
                <PeopleInfomation key={index} data={item} />
              ))}
            </div>
          </div>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{`Advisor (${advisorPeopleData.length})`}</span>
            </button>
            <div className={styles.content}>
              {advisorPeopleData.map((item, index) => (
                <PeopleInfomation key={index} data={item} />
              ))}
            </div>
          </div>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{`Founder`}</span>
            </button>
            <div className={styles.content}>
              {founder.map((item, index) => (
                <PeopleInfomation key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meet;
