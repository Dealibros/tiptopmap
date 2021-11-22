import '../../../util/database';
import {
  createComment,
  deleteComment,
  getComment,
  updateComment,
} from '../../../util/database';

// GET
export default async function handler(req, res) {
  if (req.method === 'GET') {
    console.log('cookie?here', req.cookies);
    console.log('cookie??', req.body);
    const restaurantId = Number(req.query.comment);
    const commentsdata = await getComment(restaurantId);

    return res.status(200).json(commentsdata);

    // POST
  } else if (req.method === 'POST') {
    const body = req.body;
    console.log('bodyfromComment', body);
    const createCommentData = await createComment({
      comment: body.comment,
      restaurant_id: body.restaurant_id,
      user_id: body.user_id,
      username: body.username,
    });

    return res.status(200).json(createCommentData);

    // PUT
  } else if (req.method === 'PUT') {
    const body = req.body;
    console.log('bodyP', body);
    console.log('cookie?', req.cookies);
    const comment = await updateComment({
      comment: body.comment,
      id: body.id,
    });

    return res.status(200).json({ comment });

    // DELETE
  } else if (req.method === 'DELETE') {
    const body = req.body;
    const id = body.id;
    console.log('bodyrestaurant', body);
    if (id) {
      await deleteComment(id);
    }
  }

  if (Array.isArray()) {
    return res.status(405).json;
  }

  return res.status(200).json();
}
