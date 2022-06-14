import cookie from 'cookie';

const handler = (req, res) => {
  const { method, body } = req;
  const { username, password } = body;
  switch (method) {
    case 'POST':
      try {
        if (
          username === process.env.ADMIN_USERNAME &&
          password === process.env.ADMIN_PASSWORD
        ) {
          res.setHeader(
            'Set-Cookie',
            cookie.serialize('token', process.env.TOKEN, {
              maxAge: 60 * 60,
              sameSite: 'strict',
              path: '/',
            })
          );
          res.status(200).json({ message: 'success' });
        } else {
          res.status(400).json({ message: 'Invalid Credentials' });
        }
      } catch (error) {
        res.status(500).json({ success: false });
      }
      break;

    default:
      res.status(500).json({ success: false });
      break;
  }
};

export default handler;
