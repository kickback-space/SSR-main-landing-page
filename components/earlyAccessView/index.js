import styles from './earlyAccess.module.scss';
import React from 'react';
import axios from 'axios';

const FORM_STATE = {
  INIT: 'INIT',
  SUCCESS: 'SUCCESS',
  EMAIL_VALID: 'EMAIL_VALID',
  ALREADY_SIGNUP: 'ALREADY_SIGNUP',
};

const FORM_MESSAGE = {
  SUCCESS: {
    title: 'Successfully subscribed.',
    detail: 'Invitation will sent to your email',
  },
  EMAIL_VALID: {
    title: 'Invalid email. ',
    detail: 'Double check your email and try again',
  },
  ALREADY_SIGNUP: {
    title: 'Already registered. ',
    detail: 'Looks like you already signed up!',
  },
};

function isEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function SubmitForm(props) {
  const [email, setEmail] = React.useState('');
  const [formState, setFormState] = React.useState(FORM_STATE.INIT);

  function handleOnChange(e) {
    setEmail(e.target.value);
    if (!e.target.value) setFormState(FORM_STATE.INIT);
  }

  function handleCloseForm() {
    setEmail('');
    props.hiddenForm();
  }

  function handleSubmit() {
    if (!email || formState !== FORM_STATE.INIT) return;
    if (!isEmail(email)) {
      setFormState(FORM_STATE.EMAIL_VALID);
      return;
    }
    axios
      .put(
        `https://api.kickback.space/api/v0/register/subscribe_request`,
        null,
        {
          params: {
            email: email,
          },
        }
      )
      .then((res) => {
        if (res.data.data.message === 'already subscribed') {
          setFormState(FORM_STATE.ALREADY_SIGNUP);
        } else {
          setFormState(FORM_STATE.SUCCESS);
        }
      })
      .catch((e) => {
        setFormState(FORM_STATE.EMAIL_VALID);
      });
  }

  return (
    <div className={styles.wrapperForm}>
      <div className={styles.headerForm}>
        <span>{`Sign up for beta access`}</span>
        <img
          onClick={handleCloseForm}
          alt='earlyAccessIcon'
          src={'/icon/earlyAccessForm.svg'}
        />
      </div>
      <span className={styles.emailLabel}>{`Email`}</span>
      <input
        className={`${styles.inputView} ${
          formState !== FORM_STATE.INIT
            ? formState === FORM_STATE.SUCCESS
              ? styles.inputSuccess
              : styles.inputError
            : null
        }`}
        value={email}
        onChange={handleOnChange}
        placeholder='your@email.com'
      />
      {formState !== FORM_STATE.INIT && (
        <div
          className={`${styles.messageView} ${
            formState === FORM_STATE.SUCCESS
              ? styles.successState
              : styles.errorState
          }`}
        >
          <span className={styles.title}>{FORM_MESSAGE[formState].title}</span>
          <span>{FORM_MESSAGE[formState].detail}</span>
        </div>
      )}
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
      >{`Sign up`}</button>
    </div>
  );
}
function EarlyAccessView() {
  const [isOpenForm, setIsOpenFrom] = React.useState(false);

  function openForm() {
    setIsOpenFrom(true);
  }
  function hideForm() {
    setIsOpenFrom(false);
  }
  return (
    <div id='earlyAccessView' className={styles.wrapperView}>
      {isOpenForm ? (
        <SubmitForm hiddenForm={hideForm} />
      ) : (
        <div className={styles.button} onClick={openForm} />
      )}
    </div>
  );
}

export default EarlyAccessView;
