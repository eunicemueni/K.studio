const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.createOrderWebhook = functions.https.onRequest(async (req, res) => {
  // PAYLOAD should contain { userId, plan, email, txId, amount }
  const { userId, plan, email, txId, amount } = req.body || {};
  if (!userId || !plan || !txId) return res.status(400).send("Missing fields");

  const order = {
    userId, plan, email, txId, amount, status: "pending", createdAt: admin.firestore.FieldValue.serverTimestamp()
  };

  const docRef = await admin.firestore().collection("orders").add(order);
  return res.status(200).json({ success: true, orderId: docRef.id });
});
