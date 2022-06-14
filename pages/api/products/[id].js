import dbConnect from '../../../util/mongo';
import Product from '../../../models/Product';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  const token = cookies.token;

  dbConnect();

  switch (method) {
    case 'GET':
      try {
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case 'PUT':
      if (!token || token !== process.env.TOKEN) {
        res.status(401).json('Not Authenticated');
      }
      try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    case 'DELETE':
      if (!token || token !== process.env.TOKEN) {
        res.status(401).json('Not Authenticated');
      }
      try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Delete product success' });
      } catch (error) {
        res.status(500).json(error);
      }
      break;
    default:
      res.status(500).json({ success: false });
      break;
  }
}
