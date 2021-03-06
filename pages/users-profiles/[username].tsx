import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import Layout from '../../components/Layout';
import { Errors, User } from '../../util/types';

const contentContainer = css`
  background-image: url('./public/images/backgroundProfile/2.jpg');
  text-align: center;
  display: flex;
  flex-direction: row;
  height: 86.5vh;
  justify-content: center;
  background-color: #e4e9f7;
  font-family: 'Caveat', cursive;
  font-size: 1.5rem;
  --paper-shadow: #c9bf8d;

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 1rem;
    height: 78vh;
    padding-top: 2rem;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    font-size: 1.5rem;
    padding-top: 2rem;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    font-size: 1.7rem;
    padding-top: 7rem;
  }
`;

const container = css`
  margin-right: auto 0 !important;
  margin-left: auto 0 !important;
  margin-top: 2rem;

  h1 {
    font-family: 'New Tegomin';
    margin: 1rem 0 0.9rem 0;
    color: gray;
  }
  h3 {
    margin-bottom: 6px;
  }
  @media (min-width: 400px) and (max-width: 600px) {
  }
`;

const userInformation = css`
  margin-top: -6rem;
  margin-bottom: 2rem;
  font-family: 'New Tegomin';
  line-height: 50px;
  font-size: 1.6rem;
  font-weight: 700;
  justify-content: center;
  text-align: center;
  z-index: 4;

  @media (min-width: 400px) and (max-width: 600px) {
    text-align: center;
  }

  p {
    margin: 3.5px 0;
    text-align: center;
  }
  input {
    outline: none !important;
    border-radius: 0.3rem;
    font-family: 'New Tegomin';
    color: #beb0b0;
    font-size: 1.7rem;
    background-color: transparent;
    border: none;
    width: 12rem;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 1.3rem;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    font-size: 1.4rem;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    font-size: 1.9rem;
    text-align: left !important;
  }
`;

const theDiv = css`
  text-align: center;
  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    font-size: 2rem;
  }
`;

export const pageContainer = css`
  font-family: 'New Tegomin';
  text-align: center;
  background-color: #fcfcfc;
  border-radius: 2rem;
  width: 38vw;
  max-height: 35rem;
  box-shadow: 3px 3px 2px var(--paper-shadow);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0;
  margin-left: auto 0 !important;
  margin-left: auto 0 !important;
  justify-content: center;
  text-align: center;

  @media (min-width: 400px) and (max-width: 600px) {
    width: 89vw;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    width: 80vw;
    padding-top: 2rem;
    margin-top: 3rem;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    width: 60vw;
    height: 40rem !important;
    padding-top: 3rem;
    margin-top: 5rem;
  }
`;

const button = css`
  background-color: #e4dcd1;
  width: 9.4rem;
  font-family: 'New Tegomin';
  padding: 0.5rem 0 0.5rem 0;
  margin: 2.2rem 1rem 2.8rem 1rem !important;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media (min-width: 801px) and (max-width: 1100px) {
    width: 11rem;
    height: 3.5rem;
    font-size: 1.2rem;
  }
`;

const emailstyle = css`
  margin-left: -2.7rem !important;
`;
// ///////////////////////////////////////////////////////

const paper = css`
  --paper-shadow: #c9bf8d;
  text-align: center;
  --paper-dark: #e5c93d;
  --paper-color: #ffed87;
  position: relative;
  top: 4rem;
  left: 5rem;
  display: flex;
  justify-content: center;
  max-width: 140px;
  min-height: 142px;
  background: linear-gradient(
    135deg,
    var(--paper-dark),
    30%,
    var(--paper-color)
  );
  box-shadow: 3px 3px 2px var(--paper-shadow);
  transform: rotate(-30deg);
  transform-origin: top left;
  @media (min-width: 400px) and (max-width: 601px) {
    position: relative;
    display: flex;
    left: 14rem;
    max-width: 110px !important;
    min-height: 122px !important;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    left: 25rem;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    left: 25rem;
  }
  p {
    margin: auto;
    @media (min-width: 400px) and (max-width: 601px) {
      font-size: 0.8rem;
    }
  }

  paper {
    margin: 3rem;
  }
  @media (min-width: 400px) and (max-width: 600px) {
    max-width: 120px;
    min-height: 122px;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    max-width: 120px;
    min-height: 122px;
  }
`;

const paper2 = css`
  text-align: center;
  --paper-dark: #e5c93d;
  --paper-color: #e3ccee;
  position: relative;
  bottom: -3rem;
  left: 29rem;
  display: flex;
  justify-content: center;
  max-width: 135px;
  min-height: 135px;
  background: linear-gradient(
    -135deg,
    var(--paper-dark),
    -30%,
    var(--paper-color)
  );

  @media (min-width: 400px) and (max-width: 601px) {
    display: none;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    display: none;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    display: none;
  }
  @media (min-width: 1100px) and (max-width: 1300px) {
    left: 22rem;
  }

  box-shadow: 3px 3px 2px var(--paper-shadow);
  transform: rotate(10deg);
  transform-origin: top right;

  p {
    margin: auto;
  }

  paper {
    margin: 3rem;
  }
`;

const pin = css`
  --pin-color: #d02627;
  --pin-dark: #a54b4d;
  --pin-light: #fc7e7d;

  position: absolute;
  left: 20px;
  width: 60px;
  height: 50px;
`;

const pin2 = css`
  --pin-color: #d02627;
  --pin-dark: #a54b4d;
  --pin-light: #fc7e7d;

  position: absolute;
  left: 50px;
  width: 60px;
  height: 50px;
`;

const shadow = css`
  position: absolute;
  top: 18px;
  left: -8px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: radial-gradient(var(--paper-shadow), 20%, rgba(201, 191, 141, 0));
`;

const metal = css`
  position: absolute;
  width: 5px;
  height: 20px;
  background: linear-gradient(to right, #808080, 40%, #eae8e8, 50%, #808080);
  border-radius: 0 0 30% 30%;
  transform: rotate(50deg);
  transform-origin: bottom left;
  top: 15px;
  border-bottom: 1px solid #808080;
`;

const bottomCircle = css`
  position: absolute;
  right: 15px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--pin-color);
  background: radial-gradient(
    circle at bottom right,
    var(--pin-light),
    25%,
    var(--pin-dark),
    90%,
    var(--pin-color)
  );

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 20px;
    height: 30px;
    transform: rotate(55deg);
    transform-origin: 100% 100%;
    border-radius: 0 0 40% 40%;
    background: linear-gradient(
      to right,
      var(--pin-dark),
      30%,
      var(--pin-color),
      90%,
      var(--pin-light)
    );

    bottomCircle::after {
      content: '';
      position: absolute;
      right: -10px;
      top: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: radial-gradient(
        circle at right,
        var(--pin-light),
        30%,
        var(--pin-color),
        var(--pin-dark) 80%
      );
    }
  }
`;

const beCool = css`
  text-align: center;
  font-size: 0.3rem;
  width: 75px;
  height: 85px;
  padding-bottom: 7px;
  padding-top: 9px;
  border: 1px solid #ddd;
  background-size: cover;
  background-clip: content-box;
  background-color: #f66f6f;
  box-sizing: border-box;
  position: absolute;
  right: 73rem;
  bottom: -23rem;
  margin: auto;
  top: 1px;
  font: 50 0.9em/30px 'Oswald', sans-serif;
  color: #fbfbfb;
  text-indent: 20px;
  transform: rotate(-10deg);
  transform-origin: top left;

  @media (min-width: 400px) and (max-width: 600px) {
    display: none;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    display: none;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    display: none;
  }
  @media (min-width: 1100px) and (max-width: 1300px) {
    display: none;
  }

  :after {
    content: '';
    display: block;
    position: absolute;
    border: 40px solid transparent;
    border-bottom: 50px solid #fefefe;
    bottom: -69px;
    right: -60px;
    box-shadow: 0px 7px 6px -9px black;
    transform: rotate(135deg);
  }

  :before {
    content: '';
    display: block;
    position: absolute;
    border: 50px solid transparent;
    border-top: 50px solid #fefefe;
    top: -90px;
    left: -60px;
    box-shadow: 0px -5px 6px -9px black;
    transform: rotate(135deg);
  }
`;

type Props = {
  user: User;
  username?: string;
  errors?: Errors[];
};

export type SingleUserResponseType = { user: User } | { errors: Errors[] };
export default function SingleUserProfile(props: Props) {
  const router = useRouter();

  const [disable, setDisable] = useState(false);

  const [firstname, setFirstname] = useState(props.user.firstname);
  const [lastname, setLastname] = useState(props.user.lastname);
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);

  const handleFirstnameChange = (event: React.FormEvent<HTMLInputElement>) =>
    setFirstname(event.currentTarget.value);
  const handleLastnameChange = (event: React.FormEvent<HTMLInputElement>) =>
    setLastname(event.currentTarget.value);
  const handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) =>
    setUsername(event.currentTarget.value);
  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) =>
    setEmail(event.currentTarget.value);

  // Show message if user not allowed
  const errors = props.errors;

  if (errors) {
    return (
      <Layout username={props.username}>
        <Head>
          <title>Error</title>
        </Head>
        <div css={pageContainer}>
          <h1>Error: {errors[0]}</h1>
        </div>
      </Layout>
    );
  }

  // Show message if user does not exist
  if (!props.user) {
    return (
      <Layout username={props.username}>
        <Head>
          <title>User not found!</title>
        </Head>
        <div css={pageContainer}>
          <h1>User not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout username={props.username}>
      <Head>
        <title>
          Profile page for {props.user.firstname} {props.user.lastname}
        </title>
      </Head>

      <div css={contentContainer}>
        <div css={container}>
          <h1>Welcome, {props.user.firstname}!</h1>

          <div css={pageContainer}>
            <div css={paper}>
              <div css={pin}>
                <div css={shadow} />
                <div css={metal} />
                <div css={bottomCircle} />
              </div>
              <p>zoom call @9am</p>
            </div>

            <div css={paper2}>
              <div css={pin2}>
                <div css={shadow} />
                <div css={metal} />
                <div css={bottomCircle} />
              </div>
              <p>
                Finish <br />
                Project
              </p>
            </div>

            <div css={beCool}>Be cool.</div>
            <div css={userInformation}>
              <div css={theDiv}>
                <p>
                  Username:
                  <span>
                    <input
                      onChange={handleUsernameChange}
                      value={username}
                      disabled={disable}
                    />
                  </span>
                </p>
              </div>
              <div css={theDiv}>
                <p>
                  Firstname:
                  <span>
                    <input
                      onChange={handleFirstnameChange}
                      value={firstname}
                      disabled={disable}
                    />
                  </span>
                </p>
              </div>
              <div css={theDiv}>
                <p>
                  Lastname:
                  <span>
                    <input
                      onChange={handleLastnameChange}
                      value={lastname}
                      disabled={disable}
                    />
                  </span>
                </p>
              </div>
              <div css={theDiv}>
                <p css={emailstyle}>
                  Email:
                  <span>
                    <input
                      onChange={handleEmailChange}
                      value={email}
                      disabled={disable}
                      // maybe an onclick button, when click edit to change when not not.
                    />
                  </span>
                </p>
              </div>
            </div>

            <button
              css={button}
              onClick={async () => {
                if (disable) {
                  // This is to allow changes
                  setDisable(false);
                } else {
                  // This is to disable input and save changes
                  setDisable(true);
                  const response = await fetch(
                    `/api/users/${props.user.username}`,
                    {
                      method: 'PUT',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        firstname: firstname,
                        lastname: lastname,
                        email: email,
                        username: username,
                        // csrfToken: props.csrfToken,
                      }),
                    },
                  );
                  await response.json();
                }
              }}
            >
              {disable ? 'Edit Details' : 'Save Changes'}
            </button>

            <button
              css={button}
              onClick={async (event) => {
                event.preventDefault();
                if (!window.confirm(`Do you want to delete your account?`)) {
                  return;
                }

                const response = await fetch(
                  `/api/users/${props.user.username}`,
                  {
                    method: 'DELETE',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      username: props.user.username,
                    }),
                  },
                );

                await response.json();

                router.push(`/`);
              }}
            >
              {' '}
              <RiDeleteBin5Line /> Delete account
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getUser } = await import('../../util/database');

  const user = await getUser(String(context.query.username));

  console.log('notworking?', context.query.username); // is working, shows the username of the user

  return {
    props: {
      user,
    },
  };
}
