
const divforImg = css`
  display: inline-block;
  margin-top: 1 rem;
  filter: grayscale(70%);
  text-shadow: 0.075em 0.08em 0.1em rgb(0 0 0);
  color: white;

  display: flex;
  position: relative;
  height: 240px;
  width: 200px;
  margin-left: 3rem;
  margin-top: auto;
  margin-bottom: auto;

  :nth-of-type(4n + 3) {
    transform: scale(0.8, 0.8) rotate(-5deg);
    transition: all 0.35s;
    /* height: 20%;
    width: 47%;
    bottom: 30px;
    right: 12px; */
    box-shadow: 0 2.1rem 2rem rgb(0 0 0 / 40%);
  }
`;

const polaroid = css`
  background: rgb(255, 255, 255);
  padding: 3 rem;
  box-shadow: 30px 20px 30px rgb(92 87 87);
  height: 80%;
  margin-left: 5 rem;
  ::before {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.35s;
  }
  :before {
    transform: rotate(-6deg);
    height: 20%;
    width: 47%;
    bottom: 30px;
    right: 12px;
    box-shadow: 0 2.1rem 2rem rgb(0 0 0 / 40%);
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.35s;
  }
`;

const img = css`
  /* display: block; */
  border-radius: 10px;
  overflow: hidden;
  a:after {
    content: attr(title);
  }
`;

const caption = css`
  font-size: 6rem;
  text-align: center;
  line-height: 2rem;
`;




















// // from indide infoCard
// from mini card

// export function InfoCard(props, { restaurant }) {
//   console.log('check3', restaurant);
//   return (
//     <div>
//       {/* <div css={searchResult}> */}
//       <div css={divforImg}>
//         <Image
//           className="images"
//           src={props.restaurant.photo}
//           alt="restaurant-place"
//           layout="fill"
//           objectFit="cover"
//         />
//         ;
//         {/* <Image src="/../public/pizza2.jpg" layout="fill" objectFit="cover" /> */}
//       </div>
//       {/* <HeartIcon /> */}

//       <div css={searchResultInfo}>
//         <div css={searchResultInfoTop}>
//           <h3>{props.restaurant.restaurantname}Hola</h3>
//           <p>{props.restaurant.addressplace}</p>
//           <h5>{props.restaurant.website}</h5>
//           <hr css={space} />
//           <p css={description}>{props.restaurant.descriptionplace}</p>
//         </div>

//         <div css={searchResultInfoBottom}>
//           <h3 css={searchResultStars}>
//             <span>⭐</span>
//             <p css={rating}>
//               <strong>{props.restaurant.rating}</strong>
//             </p>
//           </h3>
//           <h3 css={searchResultPrice}>
//             <p css={price}>
//               <br />
//               {props.restaurant.price}
//             </p>
//           </h3>
//         </div>
//       </div>
//       {/* </div> */}
//       <hr css={lineInfoCard} />
//     </div>
//   );
// }
















{props.restaurants.map(
        (restaurant) => (
          console.log('main maps', props.restaurants),
          console.log('map-restaurants', restaurant),
          (
            <Marker
              key={`id-list-${restaurant.id}`}
              position={{
                lat: restaurant.latitude,
                lng: restaurant.longitude,
              }}
              icon={{
                // url: '/marker.png',
                // url:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                // url: '/../public/Marker.png', //not working for some reason
                // to load here a svg instead of the boring google one
                scaledSize: new window.google.maps.Size(parseFloat(32, 27)), // for size
                origin: new window.google.maps.Point(parseFloat(0, 0)),
                anchor: new window.google.maps.Point(parseFloat(15, 15)), // not working?
              }}
              onClick={() => {
                setSelectedPlaces(restaurant);
                // {
                //   selected ? (
                //     <InfoWindow
                //       onCloseClick={() => setInfoOpen(true)}
                //       //look into this property
                //       // css={infowindow}
                //       position={{
                //         lat: Number(selected.lat),
                //         lng: Number(selected.lng),
                //       }}
                //       clickable={true}
                //       // setSelected={!null}
                //       infoWindow={open}
                //       // anchor={null}
                //       // disableAutoPan
                //       onCloseClick={() => {
                //         setSelected(null);
                //       }}
                //     >
                //       <div css={infoWindow}>
                //         <label css={titleSearch}>{restaurantname}</label>
                //         <br />
                //         <label css={addressSearch} htmlFor>
                //           {addressplace}
                //         </label>
                //         <br />
                //         <label css={descriptionSearch} htmlFor>
                //           {descriptionplace}
                //         </label>
                //         <br />
                //         <h4 css={h4}>
                //           Picture ♥ <br />
                //           <span role="img" l css={foodIcon}>
                //             🌮
                //           </span>
                //         </h4>
                //         <label css={ratingSearch} htmlFor>
                //           ⭐{rating}
                //         </label>
                //         <br />
                //       </div>
                //     </InfoWindow>
                //   ) : null;
                // }
              }}
            />
          )
        ),
      )}
      ;
      {/* if(typeof(InfoWindow) != 'undefined') {
                      InfoWindow.close();
                  }
                  infowindow.open(map, marker);
                  InfoWindow = infowindow;  */}
      {/* <Marker
          // position={{ panTo }}
          icon={{
            url: image,
            // anchor: new google.maps.Point(5, 58),
          }}
        /> */}
      {selectedPlaces && (
        <infoWindow
          position={{
            lat: selectedPlaces.latitude,
            lng: selectedPlaces.longitude,
          }}
        >
          <div>hello</div>
        </infoWindow>
      )}
    </GoogleMap>
  );
}// {/* <Locate panTo={panTo} />;
// {
//   // icon={{
//   //   // url: '/marker.png',
//   //   // url:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//   //   // url: '/../public/Marker.png', //not working for some reason
//   //   // to load here a svg instead of the boring google one
//   //   scaledSize: new window.google.maps.Size(parseFloat(32, 27)), // for size
//   //   origin: new window.google.maps.Point(parseFloat(0, 0)),
//   //   anchor: new window.google.maps.Point(parseFloat(15, 15)), // not working?
//   // }}

//   props.restaurants.map(
//     (restaurant) => (
//       console.log('insideMarker', props.restaurants),
//       console.log('insideMarker2', restaurant),
//       (console.log('insideMarker3', restaurant.latitude),
//       (
//         <Marker
//           key={`${restaurant.id}`}
//           position={{
//             lat: Number(restaurant.latitude),
//             lng: Number(restaurant.longitude),
//           }}
//           icon={{
//             url: '/../Marker.png',
//             // url:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//             // url: '/../public/Marker.png', //not working for some reason
//             // to load here a svg instead of the boring google one
//             scaledSize: new window.google.maps.Size(parseFloat(32, 27)), // for size
//             origin: new window.google.maps.Point(parseFloat(20, 20)),
//             anchor: new window.google.maps.Point(parseFloat(15, 15)), // not working?
//           }}
//           onClick={() => {
//             setSelected(marker);
//           }}
//         />
//       ))
//     ),
//   );
// }

// {
//   props.restaurants.map(
//     (restaurant) => (
//       console.log('insideMarker', props.restaurants),
//       console.log('insideMarker2', restaurant),
//       (console.log('insideMarker3', restaurant.latitude),
//       (
//         <Marker
//           key={`${restaurant.id}`}
//           position={{
//             lat: Number(restaurant.latitude),
//             lng: Number(restaurant.longitude),
//           }}
//           icon={{
//             // url: '/../Marker.png',
//             // url:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
//             // url: '/../public/Marker.png', //not working for some reason
//             // to load here a svg instead of the boring google one
//             scaledSize: new window.google.maps.Size(parseFloat(32, 27)), // for size
//             origin: new window.google.maps.Point(parseFloat(20, 20)),
//             anchor: new window.google.maps.Point(parseFloat(15, 15)), // not working?
//           }}
//           onClick={() => {
//             setSelected(marker);
//           }}
//         />
//       ))
//     ),
//   );
// }

// <Image key="someUrl" src={url} alt="images text" layout="fixed" />;

// {
//   <img
//     className="images"
//     src={`/images/${student.src ? student.src : 'noimage.png'}`}
//     alt={student.firstname}
//   />;
// }
// {
//   /* {src && (
//             <Image
//               className={url}
//               width={50}
//               height={50}
//               src={src}
//               alt="Avatar"
//             />
//           )} */
// }
// {
//   /* <Image src={url} alt="images text" layout="fixed" /> */
// }
// {
//   /* <Image
//             src={post.images[0].url}
//             alt={post.images[0].alternativeText}
//             width={376}
//             height={190}
//             layout="fixed"
//           /> */
// }

// // Database for Restaurants
// // Restaurant Id
// // Restaurant Name
// // Address
// // Description
// // Photo
// // Rating
// // Price
// // Website
// // Opening Hours
// // import '@reach/combobox/styles.css';
// // import { css } from '@emotion/react';
// // import {
// //   Combobox,
// //   ComboboxInput,
// //   ComboboxList,
// //   ComboboxOption,
// //   ComboboxPopover,
// // } from '@reach/combobox';
// // import {
// //   GoogleMap,
// //   InfoWindow,
// //   LoadScript,
// //   Marker,
// //   useJsApiLoader,
// //   useLoadScript,
// // } from '@react-google-maps/api';
// // import axios from 'axios';
// // import React, { useCallback, useEffect, useRef, useState } from 'react';
// // import { RiContactsBookLine } from 'react-icons/ri';
// // import usePlacesAutocomplete, {
// //   getDetails,
// //   getGeocode,
// //   getLatLng,
// // } from 'use-places-autocomplete';
// // import mapStyles from './mapStyles';
// // import SearchForm from './searchForm';

// // ///////////////////////////////////////////////////////
// // const { getTours } = await import('../../util/database');

// // const tours = await getTours();

// // // console.log(tours);
// // // const reqCookie = JSON.parse(context.req.cookies.toursSelected);
// // // console.log(reqCookie);

// // return {
// //   props: {
// //     tours,
// //   },
// // };

// // return {
// //   props: {
// //     restaurants,
// //   },
// // };

// // export function GetMainApi() {
// //   useEffect(() => {
// //     const myData = async () => {
// //       const url =
// //         'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJc-yoiAcHbUcR3YoJUXXn4B4&fields=name%2Crating%2Cformatted_address%2Ctypes%2Cphoto&key=AIzaSyAWCz-geuuBdQaGkXM9OnFdvW0e9jIfwYM&';
// //       const res = await fetch(url);
// //       const resJson = await res.json();
// //       const data = {
// //         status: resJson.status,
// //         result: resJson.result,
// //       };
// //       console.log(data);
// //       return {
// //         props: {
// //           data,
// //         },
// //       };
// //     };
// //   });
// // }

// // const onMapClick = useCallback((e) => {
// //   setMarkers((current) => [
// //     ...current,
// //     {
// //       lat: e.latLng.lat(),
// //       lng: e.latLng.lng(),
// //     },
// //   ]);
// // }, []);

// // useEffect(() => {
// //   navigator.geolocation.getCurrentPosition(
// //     (position) => {
// //       panTo({
// //         lat: position.coords.latitude,
// //         lng: position.coords.longitude,
// //       });
// //     },
// //     () => null,
// //     options,
// //   );
// // }, []);

// {
//   /* <Marker
//           position={{ lat: 48.2042154830387, lng: 16.368015018501982 }}
//           icon={{
//             url: image,
//             anchor: new google.maps.Point(5, 58),
//           }}
//         /> */
// }

// //   return (
// //     <Layout username={props.username}>
// //       <Head>
// //         <title>Logout</title>
// //       </Head>
// //       <div>
// //         <div>
// //           <h1 css={logoutStyle}>You have been logged out!</h1>
// //         </div>
// //         <div>
// //           <h3 css={logoutStyle}>Thank you for visiting!!</h3>
// //         </div>
// //         <div>
// //           <Link href="/">
// //             <a css={linkStyle}>Home</a>
// //           </Link>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // }

// // export default React.memo(Map);
// // import { useCallback, useRef, useState } from 'react';
// // import {
// //   GoogleMap,
// //   Marker,
// //   withGoogleMap,
// //   withScriptjs,
// // } from 'react-google-maps';
// // import SearchForm from './searchForm';

// // const defaultCenter = { lat: 48.2042154830387, lng: 16.368015018501982 };

// // const defaultOptions = { scrollwheel: false };

// // const RegularMap = withScriptjs(
// //   withGoogleMap((props) => (
// //     <GoogleMap
// //       defaultZoom={20}
// //       defaultCenter={defaultCenter}
// //       defaultOptions={defaultOptions}
// //       zoom={14}
// //     >
// //       <Marker position={defaultCenter} />
// //     </GoogleMap>
// //   ))
// // );

// // //  map = new google.maps.Map(googlemap.current, {
// // //         center: {lat: -34.397, lng: 150.644},
// // //         zoom: 8,
// // //         fullscreenControl: false, // remove the top-right button
// // //         mapTypeControl: false, // remove the top-left buttons
// // //         streetViewControl: false, // remove the pegman
// // //         zoomControl: false, // remove the bottom-right buttons
// // //       });
// // const loadingElementStyle = { height: "100%" };
// // const containerElementStyle = { height: "570px" };
// // const mapElementStyle = { height: "100%" };

// // export default function GoogleMaps() {
// //   return (

// //     <RegularMap
// //       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNUiZqrIsqP9MiPrVoqjil8Oz8Nah2CVo"
// //       loadingElement={<div style={loadingElementStyle} />}
// //       containerElement={<div style={containerElementStyle} />}
// //       mapElement={<div style={mapElementStyle} />}

// //     />

// //   );
// // }

// // import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// // import React from 'react';

// // const containerStyle = {
// //   width: '1020px',
// //   height: '570px'
// // };

// // const center = {
// //   lat: 48.2042154830387,
// //   lng: 16.368015018501982
// // };

// // function Map() {
// //   const { isLoaded } = useJsApiLoader({
// //     id: 'google-map-script',
// //     googleMapsApiKey: process.env.API_KEY,
// //   })

// //   const [map, setMap] = React.useState(null)

// //   const onLoad = React.useCallback(function callback(map) {
// //     const bounds = new window.google.maps.LatLngBounds();
// //     map.fitBounds(bounds);
// //     setMap(map)
// //   }, [])

// //   const onUnmount = React.useCallback(function callback(map) {
// //     setMap(null)
// //   }, [])

// //   return isLoaded ? (
// //       <GoogleMap
// //         mapContainerStyle={containerStyle}
// //         center={center}
// //         zoom={10}
// //         onLoad={onLoad}
// //         onUnmount={onUnmount}
// //         googleMapURL=`https://maps.googleapis.com/maps/api/js?key=${}process.env.API_KEY}&v=3.exp&libraries=geometry,drawing,places`
// //       >
// //         <Marker
// //         position={{lat: 48.2042154830387, lng: 16.368015018501982 }}
// //         // icon={{
// //         //     url:image,
// //         //     anchor: new google.mapsPoint(5,58)}}
// //         />
// //       </GoogleMap>
// //   ) : <></>
// // }

// // export default React.memo(Map)

// // const MapComponent = withScriptjs(withGoogleMap((props) => (
// //     <GoogleMap
// //     defaultZoom={14}
// //     defaultCenter={{ lat: props.lat, lng: props.long }}
// //     center={{ lat: props.lat, lng: props.long }}
// //     >
// //         {props.isMarkerShown && <Marker shape="rectangle" position={{ lat: props.lat, lng: props.long }} />}
// //         {props.attractions.length > 1 && props.attractions.map((attraction, i) => {
// //             return <Marker
// //                 key={`${attraction.location_id}-${i}`}
// //                 position={{lat: Number(attraction.latitude),lng: Number(attraction.longitude)}}
// //                 label={attraction.name}
// //                 title={attraction.name}
// //                 />
// //         })}
// //     </GoogleMap>
// // )))
// // const Main = () => {
// //     // initializes state
// //     let [latitude, setLatitude] = React.useState(-33.7560119)
// //     let [longitude, setLongitude] = React.useState(150.6038367)
// //     let [attractions, setAttractions] = React.useState([])
// //     let [address, setAddress] = React.useState('')
// //     let [message, setMessage] = React.useState({})
// //     // searchs for new locations
// //     const updateCoordinates = (e) => {
// //         e.preventDefault()
// //         setMessage({text: 'Loading..', variant: 'info'})
// //         const data = {
// //             address
// //         }
// //         // fetches data from our api
// //         fetch('/api/geocoding', {
// //             method: 'POST',
// //             mode: 'cors',
// //             cache: 'no-cache',
// //             headers: {
// //                 'Content-Type': 'application/json'
// //             },
// //             body: JSON.stringify(data)
// //         })
// //         .then(response => response.json())
// //         .then(response => {
// //             // add data to state
// //             setAttractions(response.attractionsList)
// //             setLatitude(response.lat)
// //             setLongitude(response.long)
// //             setMessage({})
// //         })
// //         .catch(() => setMessage({text: 'Something went wrong..', variant: 'danger'})
// //         )
// //     }
// //     return (
// //         <div>
// //             <p className={`alert alert-${message.variant}`}>{message.text}</p>
// //             <form onSubmit={(e) => updateCoordinates(e)}>
// //                 <div className="form-group">
// //                     <label htmlFor="address">Address</label>
// //                     <input
// //                         type="text"
// //                         className="form-control"
// //                         id="address"
// //                         required
// //                         aria-describedby="addressHelp"
// //                         placeholder="42 Wallaby Way, Sydney"
// //                         value={address}
// //                         onChange={(e) => setAddress(e.target.value)}
// //                         />
// //                     <small id="addressHelp" className="form-text text-muted">The street address that you want to look-up, in the format used by the national postal service of the country concerned. Additional address elements such as business names and unit, suite or floor numbers should be avoided.</small>
// //                 </div>
// //                 <button className="btn mb-4 btn-primary" type='submit'>Search Location</button>
// //             </form>
// //             <MapComponent
// //                 lat={latitude}
// //                 long={longitude}
// //                 attractions={attractions}
// //                 isMarkerShown
// //                 googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
// //                 loadingElement={<div style={{ height: `100%` }} />}
// //                 containerElement={<div style={{ height: `400px` }} />}
// //                 mapElement={<div style={{ height: `100%` }} />}
// //                 />
// //             <style jsx>{`
// //                 form {
// //                     margin: 2rem;
// //                     background: white;
// //                     border-radius: 5px;
// //                     padding: 1rem;
// //                 }
// //                 p {
// //                     margin-left: 1rem;
// //                     margin-right: 1rem;
// //                 }
// //             `}</style>
// //         </div>
// //     )
// // }
// // export default Main

// // googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCNUiZqrIsqP9MiPrVoqjil8Oz8Nah2CVo"

// // from mapStyles.js
// {
//   /*
//           <SearchForm action="/search" />

//           { data.status === 'OK' && (
//             <div className="list">
//               { data.candidates.map((place, i) => (
//                 <map place={place} key={place.place_id} />
//               )) }
//             </div>
//           )}

//           { data.status === 'ZERO_RESULTS' && (
//             <h2 class="text-2xl font-bold text-center">No Place found, please try refine your search query</h2>
//           )}
//            </div>
//       </div> */
// }

// // /////////////////////////DECLARATIONS///////////////////////////////////
// const search = css`
//   position: absolute;
//   padding-top: 1rem;
//   padding-left: 15rem;
//   transform: translateX(-50%);
//   width: 100%;
//   max-width: 400px;
//   z-index: 10;
// `;

// const libraries = ['places'];
// const mapContainerStyle = {
//   width: '100%',
//   height: '570px',
// };
// // this centers the map to this coordinates. Vienna
// const center = {
//   lat: 48.2042154830387,
//   lng: 16.368015018501982,
// };
// const options = {
//   styles: mapStyles,
//   disableDefaultUI: false,
//   zoomControl: true,
//   streetViewControl: false,
//   mapTypeControl: false,
//   // zoomControl: false, // remove the bottom-right buttons look how to make them smaller
//   // fullscreenControl: false, // remove the top-right button
//   //
// };

// // /////////////////////////MAIN FUNCTION MAP///////////////////////////////////

// export default function Map(props) {
//   const extra = props.extra;
//   console.log(props.extra);
//   const { isLoaded, loadError } = useLoadScript({
//     id: 'google-map-script',
//     googleMapsApiKey: 'AIzaSyCNUiZqrIsqP9MiPrVoqjil8Oz8Nah2CVo',
//     libraries,
//   });

//   // To set up the much needed Markers
//   const [markers, setMarkers] = useState([]);
//   const [selected, setSelected] = useState(null);

//   const onMapClick = useCallback((e) => {
//     setMarkers((current) => [
//       ...current,
//       {
//         lat: e.latLng.lat(),
//         lng: e.latLng.lng(),
//       },
//     ]);
//   }, []);

//   const mapRef = useRef();
//   const onMapLoad = useCallback((map) => {
//     mapRef.current = map;
//   }, []);

//   const panTo = useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(10);
//   }, []);

//   if (loadError) return 'Error loading Maps';
//   if (!isLoaded) return 'Loading Maps';

//   const image =
//     'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

//   // /////////////////////////GOOGLE MAP///////////////////////////////////

//   return (
//     <div>
//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={13}
//         options={options}
//         onClick={onMapClick}
//         onLoad={onMapLoad}
//         center={center}
//       >
//         <Search panTo={panTo} setMarkers={setMarkers} />
//         <Locate panTo={panTo} />
//         {markers.map((marker) => (
//           <Marker
//             key={`${marker.lat}-${marker.lng}`}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             onClick={() => {
//               setSelected(marker);
//             }}
//             icon={{
//               // url:'' to load here a svg instead of the boring google one
//               scaledSize: new window.google.maps.Size(30, 30), // for size
//               origin: new window.google.maps.Point(0, 0),
//               anchor: new window.google.maps.Point(15, 15),
//             }}
//           />
//         ))}
//         {selected ? (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => {
//               setSelected(null);
//             }}
//           >
//             <div>
//               <label htmlFor>Title</label>
//               <br />
//               <label htmlFor>Information</label>
//               <h4>Picture ♥!</h4>
//               <label htmlFor>Rating</label>
//               <br />
//             </div>
//           </InfoWindow>
//         ) : null}
//         <Marker
//           position={{ panTo }}
//           icon={{
//             url: image,
//             // anchor: new google.maps.Point(5, 58),
//           }}
//         />
//       </GoogleMap>
//     </div>
//   );
// }

// // /////////////////////////Function SEARCH///////////////////////////////////

// export function Search({ panTo, setMarkers }, props) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 48.2042154830387, lng: () => 16.368015018501982 },
//       radius: 200 * 1000,
//     },
//     debounce: 300,
//   });

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);

//     clearSuggestions();
//     // A try / catch block is basically used to handle errors in JavaScript. You use this when you don't want an error in your script to break your code. ... You put your code in the try block, and immediately if there is an error, JavaScript gives the catch statement control and it just does whatever you say.
//     try {
//       const results = await getGeocode({ address });

//       let idPlace = results[0].place_id;
//       // I need to take this value to the map page, to be able to call the API there with this value. Afterwards I need to bring all this information back here to be able to display it on the map
//       // Why I can't put the place_Id into state?
//       // Because setState is asynchronous?
//       // setIdPlace = results[0].place_id;
//       // setExtra(idPlace);

//       console.log('idPlacenumber', idPlace);
//       console.log(results); // gives dirrection from place and other properties
//       // getLatlng shows the needed coordinates
//       const { lat, lng } = await getLatLng(results[0]);
//       let clat = lat;
//       let clng = lng;
//       setMarkers((current) => [
//         ...current,
//         {
//           lat: clat,
//           lng: clng,
//         },
//       ]);

//       // after address position 48.1946826 16.3938677
//     } catch (error) {
//       console.log(address);
//     }
//   };

//   return (
//     <div css={search}>
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Enter an address"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === 'OK' &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//           <Marker>Here!</Marker>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }

// // /////////////////////////Function LOCATE///////////////////////////////////

// // This seems only be useful to center where we are. No much needed
// function Locate({ panTo }) {
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null,
//         );
//       }}
//     >
//       <img src="/images/compass.png" alt="compass" />
//     </button>
//   );
// }

// // for the infowindow

// +0.0055; */}
