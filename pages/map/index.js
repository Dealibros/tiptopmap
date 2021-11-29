import { css } from '@emotion/react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import InfoCard from '../../components/InfoCard.js';
import Layout from '../../components/Layout';

const title = css`
  font-family: 'New Tegomin';
  margin-top: 0.2rem;
  color: black;
  font-weight: 700;
  font-size: 4.6rem;
  text-align: center;
  margin-bottom: -5.8rem;

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 3rem;
  }
  @media (min-width: 601px) and (max-width: 800px) {
  }
  @media (min-width: 801px) and (max-width: 1100px) {
  }
`;

const secondTitle = css`
  visibility: hidden;

  @media (min-width: 601px) and (max-width: 800px) {
    visibility: visible;
    text-align: center;
    margin-top: 6rem;
    font-size: 2.5rem;
  }

  @media (min-width: 801px) and (max-width: 1100px) {
    visibility: visible;
    text-align: center;
    font-family: 'New Tegomin';
    margin-bottom: 4rem;
    font-size: 3.3rem;
    margin-top: 5rem;
  }
`;
const secondMain = css`
  display: flex;
  width: 100%;
  height: 85vh;

  @media (min-width: 400px) and (max-width: 600px) {
  }
  @media (min-width: 601px) and (max-width: 800px) {
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    height: 84vh;
  }
`;

const leftMain = css`
  font-family: 'New Tegomin';
  width: 40vw;
  padding: 0 0 0 20px;
  margin: 0 0 0 30px;

  @media (min-width: 400px) and (max-width: 600px) {
    margin-left: -0.7rem;
    margin-right: 0rem;
  }
`;

const rightMain = css`
  object-fit: contain;
  width: 56.9vw;
  text-align: right;
  padding: 0.8rem;

  @media (min-width: 400px) and (max-width: 600px) {
    width: 250px;
    margin-right: -5rem !important;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    height: 770px !important;
    margin-top: 1rem;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    height: 770px !important;
    margin-top: 4rem;
  }
`;

const mapDiv = css`
  width: 50vw;
  object-fit: contain;

  @media (min-width: 400px) and (max-width: 600px) {
  }
  @media (min-width: 601px) and (max-width: 800px) {
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    height: 60vh !important;
  }
`;

const infoCard = css`
  height: 75vh;
  overflow-x: hidden !important;

  @media (min-width: 400px) and (max-width: 600px) {
    padding-left: 1rem;
    margin-left: 0rem;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    height: 78vh !important;
    margin-top: 1.5rem;
    margin-left: -2.2rem;
  }
  @media (min-width: 801px) and (max-width: 1100px) {
    height: 82vh !important;
  }
`;

const titleCard = css`
  margin: 0 0 1rem 0;
  text-align: center;

  @media (min-width: 400px) and (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (min-width: 601px) and (max-width: 800px) {
    display: none;
  }

  @media (min-width: 801px) and (max-width: 1100px) {
    display: none;
  }
`;

const a = css`
  :link {
    color: green;
  }
`;

export default function Home(props) {
  const [updateList, setUpdateList] = useState(props.restaurants);
  // const [getCity, setGetCity] = useState();

  // const catchingTheAddress = getParsedCookie('address');
  // const catchingCity = getParsedCookie('city');
  // console.log('catchyouaddress', catchingCity);

  // function getLastWord(words) {
  //   var n = words.split(' ');
  //   return n[n.length - 4];
  // }

  // if (catchingTheAddress) {
  // var str =  catchingTheAddress[0].formatted_address;
  // console.log('cathchingTheAddress', catchingTheAddress[0].formatted_address);
  // const grabcityName = getLastWord(catchingCity);
  // }

  const Map = dynamic(() => import('../../components/onlyMap'), {
    ssr: false,
    isloading: 'Loading',
  });

  function fetchList() {
    const refreshList = async () => {
      const response = await fetch('/api/updatelist');
      const newList = await response.json();

      setUpdateList(newList);

      if ('errors' in newList) {
        console.log(newList.errors);
        return newList;
      }
    };
    refreshList();
  }
  // Maybe in Geocode
  // console.log('list?', updateList);
  // const city = updateList[0].addressplace;
  // const theCity = city.split(' ').slice(-2)[0];
  // const theRealCity = theCity.slice(0, -1);

  // console.log(city);
  // console.log(theCity);

  return (
    <div>
      <Head>
        <title>TopTip Map</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout username={props.username}>
        <p css={title}>TopTip Map</p>
        <h1 css={secondTitle}>Your favourite Spots</h1>
        <main css={secondMain}>
          <section css={leftMain}>
            <h1 css={titleCard}> Your favourite Spots</h1>
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

  const { getRestaurantsData } = await import('../../util/database');
  const restaurants = await getRestaurantsData();

  return {
    props: {
      restaurants,
    },
  };
}
