import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import DisqusThread from '../../components/disqusThread';
import Layout from '../../components/Layout';
import StarRating from '../../components/StarRating';

const title = css`
  font-family: 'New Tegomin';
  margin-top: 0.2rem;
  color: black;
  font-weight: 700;
  font-size: 4.3rem;
  text-align: center;
  margin-bottom: 0;
`;

// positions the yellow card
const secondMain = css`
  display: flex;
  width: 100%;
  height: 95vh;
  margin-right: 0 auto;
  margin-left: 0 auto;
  justify-content: center;
`;

const restaurantCard = css`
  display: flex;
  position: relative;
  margin: 0 0 0.7rem 0;
  padding: 10px 0 0 1rem;
  border-bottom: 1px, solid lightgray;
  opacity: 1;
  height: 40vh;
`;

const img = css`
  margin-top: 1.5rem !important;
  border-radius: 0.2rem;

  /* margin-left: 1.2rem !important; */
`;

const restaurantCardInfoRight = css`
  width: 54%;
  margin: 0 1rem 0 1rem;
  font-family: 'New Tegomin';
  p {
    margin: 0.3rem 0 0 1.6rem;
    padding-bottom: 0.1rem;
    padding-top: 0.3rem;
    font-weight: 600;
    font-size: 1.2rem;
  }

  h3 {
    font-size: 0.5rem;
    font-weight: 300;
  }
  h4 {
    margin-top: 0.6rem;
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 0.2rem;
  }

  h5,
  h6 {
    font-family: 'New Tegomin';
    text-align: center;
    font-size: 1rem;
    margin: 0.2rem 1rem 0.3rem 0.3rem;
    padding: 0;
    color: gray;
  }
`;

const titleCard = css`
  font-family: 'New Tegomin';
  text-align: center;
  margin: 1.2rem 0 0.3rem 0;
`;

const infoCard = css`
  height: 60vh;
  width: 50vw;
  background-color: beige;
  border-radius: 1.6rem;
  margin-top: 0.7rem;
`;

// to change the starIcon and price to the bottom take out the flex-column

const allInfoCard = css`
  background-color: beige;
  position: relative;
  padding: 0 0.5rem 2.2rem 0.5rem;
  border-radius: 1.6rem;

  input {
    border-radius: 2rem;
  }
`;

const space = css`
  border-top: 1px dashed lightgray;
  margin: 0.3rem;
  padding: 0;
`;

const description = css`
  font-family: 0.7rem;
  margin-top: 1rem !important;
`;

const rating = css`
  text-align: center;
`;

const lineInfoCard = css`
  color: lightgray;
  width: 65%;
  margin-top: 2rem;
  margin-bottom: 0.4rem;
`;

const mainChat = css`
  margin-right: auto;
  margin-left: auto;
  font-family: 'New Tegomin' !important;
  max-width: 46rem !important;
  margin: 0.9rem, 0.4rem 1.9rem 1.9rem !important;
  padding: 2.1rem 2rem 2rem 2.2rem !important;
  max-height: 30vh !important;
  overflow-y: scroll;
  border-radius: 0.6rem !important;
`;

export default function Card(props) {
  const [userId, setUserId] = useState(props.userId);
  const [restaurantId, setRestaurantId] = useState(props.restaurantId);
  console.log('mapId page props', props.userId);
  console.log('mapId page userId state', userId);
  console.log('restaurantId mapId page', restaurantId); // number
  const showComments = () => {
    return (
      <div>
        <DisqusThread
          id={props.restaurant.id}
          title={props.restaurant.restaurantname}
          path={`/map/${props.restaurant.id}`}
        />
      </div>
    );
  };
  return (
    <div>
      <Head>
        <title>TopTip Map</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Layout username={props.username}>
        <p css={title}>TopTip Map</p>

        <main css={secondMain}>
          <div css={infoCard}>
            {' '}
            <h1 css={titleCard}>{props.restaurant[0].restaurantname}</h1>
            <div css={allInfoCard}>
              <div css={restaurantCard}>
                <div className="item">
                  <div className="polaroid">
                    {' '}
                    <Image
                      css={img}
                      className="images"
                      src={props.restaurant[0].photo}
                      alt="restaurant-place"
                      height="273px"
                      width="247px"
                    />
                    <div className="caption">
                      {props.restaurant[0].restaurantname}
                    </div>
                  </div>
                </div>
                <div css={restaurantCardInfoRight}>
                  <h4>{props.restaurant[0].addressplace}</h4>
                  <h5>
                    <Link href={props.restaurant[0].website}>
                      <a>{props.restaurant[0].website}</a>
                    </Link>
                  </h5>
                  <hr css={space} />
                  <p css={description}>
                    {props.restaurant[0].descriptionplace}
                  </p>
                  <StarRating
                    restaurantId={restaurantId}
                    setRestaurantId={setRestaurantId}
                    userId={userId}
                    setUserId={setUserId}
                    css={rating}
                  />
                </div>
              </div>
              <hr css={lineInfoCard} />
              <div css={mainChat}>
                <div>{showComments()}</div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
}

export async function getServerSideProps(context, props) {
  const { getValidSessionByToken } = await import('../../util/database');
  const sessionToken = context.req.cookies.sessionToken;
  const session = await getValidSessionByToken(sessionToken);
  console.log('sessionuser?', session);
  // need to get the userId  from inside session.

  if (!session) {
    // Redirect the user when they have a session
    // token by returning an object with the `redirect` prop
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering

    return {
      redirect: {
        destination: '/login?returnTo=/map',
        permanent: false,
      },
    };
  }

  const { getRestaurant } = await import('../../util/database');
  const restaurant = await getRestaurant(context.query.mapId);
  const restaurantId = Number(context.query.mapId);
  const userId = session.userId;
  console.log('restaurantId  gssp', restaurantId);
  console.log('userId  gssp', userId);
  return {
    props: {
      restaurant,
      restaurantId,
      userId,
    },
  };
}
