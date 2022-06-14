import dbConnect from '../../../util/mongo';
import Order from '../../../models/Order';

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const order = await Order.findById(id);
        res.status(200).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'PUT':
      try {
        const order = await Order.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json(order);
      } catch (err) {
        res.status(500).json(err);
      }
      break;
    case 'DELETE':
      break;
    default:
      res.status(500).json({ success: false });
      break;
  }
};

export default handler;
