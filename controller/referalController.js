const { ObjectId } = require("bson");
const referalCollection = require("../model/collections/referalDb");
async function showAllReferalOffer(req, res) {
  //   await new referalCollection({
  //     offeramount: 200,
  //     updatedDate: Date.now(),
  //     status: true,
  //     joinedUser: [],
  //     invitedUser: [],
  //   }).save()
  const referalData = await referalCollection.find();
  res.render("admins/offer", { referalData });
}
function addreferalOffer(req, res) {
  console.log(req.body);
  res.json({ message: "Success!!!!!!!!!!!" });
}
async function editOfferGet(req, res) {
  try {
    const offerId = req.query.offerId;
    const editData = await referalCollection.findOne({
      _id: new ObjectId(offerId),
    });
    res.json({ editData });
  } catch (err) {
    console.log("error found in update offer" + err);
    res.json({ err: "err founded" + err });
  }
}
async function editOfferPost(req, res) {
  const offerId = req.query.offerId;
  const { offeramount } = req.body;
  await referalCollection.updateOne(
    { _id: new ObjectId(offerId) },
    { $set: { offeramount: offeramount } }
  );
  res.json({status:true})
}
module.exports = {
  showAllReferalOffer,
  addreferalOffer,
  editOfferGet,
  editOfferPost,
};