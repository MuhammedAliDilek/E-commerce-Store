// /api/orders/:id

const { getSession } = require("next-auth/react");
const { default: Order } = require("../../../../models/Order");
const { default: db } = require("../../../../utils/db");

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(402).send("sign in required --- orders/[id].js");
  }

  await db.connect();

  const order = await Order.findById(req.query.id);
  await db.disconnect();
  res.send(order);
};
export default handler;
