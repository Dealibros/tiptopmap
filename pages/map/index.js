import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
// import InfoCard from '../../components/InfoCard.js';
import Layout from '../../components/Layout';

const title = css`
  font-family: 'New Tegomin';
  margin-top: 1rem;
  color: black;
  font-weight: 700;
  font-size: 4.6rem;
  text-align: center;
  margin-bottom: 0;
`;

const secondMain = css`
  display: flex;
  width: 100%;
`;

const leftMain = css`
  font-family: 'New Tegomin';
  width: 40vw;
  padding: 0 0 0 20px;
  margin: 0 0 0 30px;
`;

const rightMain = css`
  object-fit: contain;
  width: 56.9vw;
  text-align: right;
  padding: 0.8rem;
`;

const mapDiv = css`
  width: 50vw;
  object-fit: contain;
`;

const searchResult = css`
  display: flex;
  position: relative;
  margin: 6px 0 0 0;
  padding: 10px 0 0 0;
  border-bottom: 1px, solid lightgray;
  opacity: 1;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  img {
    overflow: hidden;
  }
`;

const divforImg = css`
  position: relative;
  height: 165px;
  width: 200px;
  margin-top: auto;
  margin-bottom: auto;
`;

const column = css`
  text-align: center;
`;

const rateButton = css`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid rgb(176, 176, 176);
  background-color: rgb(255, 255, 255);
  outline: none;
  margin: 0px;
  line-height: 18px;
  padding: 6px 16px;
  border-radius: 17px;
  margin: 0 0.7rem 0 0.7rem;
  cursor: pointer;
`;

const infoCard = css`
  height: 60vh;
  overflow: auto;
`;

const titleCard = css`
  margin: 0 0 0.4rem 0;
  text-align: center;
`;

// to change the staricon and price to the bottom take out the flex-column
const searchResultInfo = css`
  width: 23vw;
`;

const searchResultInfoTop = css`
  p {
    margin: 0 0 0 0.9rem;
    padding-bottom: 0.1rem;
    padding-top: 0;
    font-weight: 300;
    font-size: 13px;
    color: gray;
  }
  h3 {
    font-size: 1.3rem;
    margin: 0 0 0 0.9rem;
    font-weight: 300;
  }
  h5,
  h6 {
    font-size: 0.7rem;
    margin: 0 0 0 0.9rem;
    padding: 0;
  }
`;

const searchResultInfoBottom = css`
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  p {
    margin: 0 0 0 0;
    font-size: 0.6rem;
  }
  h3 {
    margin: 0 0 0 0.7rem;
    font-size: 0.5rem;
    span {
      margin: 0 0 0 0;
      font-size: 0.5rem;
    }
  }
`;

const space = css`
  border-top: 1px dashed lightgray;
  margin: 0.3rem;
  padding: 0;
`;

const searchResultStars = css`
  /* display: flex;
  align-items: center; */
  font-size: 0.5rem;
`;
const searchResultPrice = css`
  font-size: 0.5rem;
  text-align: right;
`;

const description = css`
  color: gray;
`;

const rating = css`
  font-size: 1.3rem;
  font-weight: 600;
`;

const price = css`
  font-size: 0.7rem !important;
  font-weight: 600;
`;

const lineInfoCard = css`
  margin-bottom: 0;
`;

const a = css`
  :link {
    color: green;
  }
`;

export default function Home(props, { restaurants }) {
  const [updateList, setUpdateList] = useState(props.restaurants);

  const Map = dynamic(() => import('../../components/onlyMap'), {
    ssr: false,
    isloading: 'Loading',
  });

  function fetchList() {
    const refreshList = async () => {
      const response = await fetch('/api/updatelist');
      const newList = await response.json();

      console.log('are you working updatedList?', newList);
      setUpdateList(newList);

      if ('errors' in newList) {
        console.log(newList.errors);
        return newList;
      }
    };
    refreshList();
  }

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
          <section css={leftMain}>
            <h1 css={titleCard}> Restaurants </h1>
            <div css={column}>
              <button css={rateButton}>Rating</button>
              <button css={rateButton}>Type of Place</button>
              <button css={rateButton}>Price</button>
            </div>
            <div css={infoCard}>
              {updateList.map((restaurant) => {
                return (
                  <div key={restaurant.id}>
                    <Link href={`/map/${restaurant.id}`}>
                      <a css={a}>
                        <InfoCard
                          key={restaurant.id}
                          restaurants={restaurant}
                        />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
          <section css={rightMain}>
            <Map
              fetchList={fetchList}
              updateList={updateList}
              coordinates={props.coordinates}
              restaurants={props.restaurants}
              css={mapDiv}
            />
          </section>
        </main>
      </Layout>
      {/* <onlyMap extra={extra} /> */}
    </div>
  );
}

export function InfoCard(props, { restaurants }) {
  // const router = useRouter();

  // destructuring from URL and  combine start and end Date
  // for displaying dynamic  info from search bar and  format the data
  // const { restaurant } = router.query;
  return (
    <div>
      <div css={searchResult}>
        <div css={divforImg}>
          <Image
            src={props.restaurants.photo}
            alt="restaurant-place"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* <HeartIcon /> */}

        <div css={searchResultInfo}>
          <div css={searchResultInfoTop}>
            <h3>{props.restaurants.restaurantname}</h3>
            <p>{props.restaurants.addressplace}</p>
            <h5>{props.restaurants.website}</h5>

            <hr css={space} />
            <p css={description}>{props.restaurants.descriptionplace}</p>
          </div>

          <div css={searchResultInfoBottom}>
            <h3 css={searchResultStars}>
              <span role="img" aria-label="Star">
                ⭐
              </span>
              <p css={rating}>
                <strong>{props.restaurants.rating}</strong>
              </p>
            </h3>
            <h3 css={searchResultPrice}>
              <p css={price}>
                <br />
                {props.restaurants.price}
              </p>
            </h3>
          </div>
        </div>
      </div>
      <hr css={lineInfoCard} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { getValidSessionByToken } = await import('../../util/database');
  const sessionToken = context.req.cookies.sessionToken;
  const session = await getValidSessionByToken(sessionToken);
  // console.log(session);
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

  // await fetch('http://localhost:3000/map', {
  //   method: 'GET',
  //   headers: {
  //     // This forwards the cookie to the API route
  //     cookie: context.req.headers.cookie || '',
  //   },
  // });
  // console.log(context.req.headers.cookie);

  const { getRestaurantsData } = await import('../../util/database');
  const restaurants = await getRestaurantsData();
  // console.log('aha', restaurants);
  return {
    props: {
      restaurants,
    },
  };
}
