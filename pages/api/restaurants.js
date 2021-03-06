import {
  createRestaurants,
  deleteRestaurant,
  getRestaurantsData,
} from '../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const restaurantsdata = await getRestaurantsData();

    return res.status(200).json(restaurantsdata);
  } else if (req.method === 'POST') {
    const body = req.body;

    console.log('bodyfromcreaterestaurantData', body);
    // this works, comes as an array

    const createRestaurantsData = await createRestaurants({
      restaurantname: body.restaurantName,
      addressplace: body.addressPlace,
      descriptionplace: body.descriptionpPlace,
      photo: body.phoTo,
      rating: body.raTing,
      price: body.priCe,
      website: body.websiTe,
      latitude: body.latituDe,
      longitude: body.longituDe,
    });

    // not working

    return res.status(200).json(createRestaurantsData);

    // eliminar restaurantes
  } else if (req.method === 'DELETE') {
    const body = req.body;
    const id = body.infoRestaurant.id;
    console.log('bodyrestaurant', body);
    console.log('bodyrestaurantId', body.infoRestaurant.id);
    if (id) {
      await deleteRestaurant(id);
    }
  }

  if (Array.isArray()) {
    return res.status(405).json;
  }

  return res.status(200).json();
}
