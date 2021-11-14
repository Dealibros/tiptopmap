// import axios from 'axios';
// import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getRestaurantsData } from '../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const updateList = await getRestaurantsData();
    console.log('updateList', updateList);

    return res.status(200).json(updateList);
  } else if (req.method === 'POST') {
    const body = req.body;
    console.log('checkthis', body);

    // database : onlyMaps
    // chek with the database or onlymap
    // const createRestaurantsData = await createRestaurants({
    //   restaurantname: body.restaurantName,
    //   addressplace: body.addressPlace,
    //   descriptionplace: body.descriptionpPlace,
    //   photo: body.phoTo,
    //   rating: body.raTing,
    //   price: body.priCe,
    //   website: body.websiTe,
    //   latitude: body.latituDe,
    //   longitude: body.longituDe,
    // });

    // return res.status(200).json(createRestaurantsData);
    return res.status(200).json(getRestaurantsData);
  }
  return res.status(405);
}
