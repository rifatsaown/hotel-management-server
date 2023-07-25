const getHotelInfo = async (req, res) => {
    const result = req.db.collection('hotelInfo').find({}).toArray();
    res.send(await result);
}

const getHeroDetails = async (req, res) => {
    const result = req.db.collection('heroDetails').find({}).toArray();
    res.send(await result);
};

module.exports = { getHotelInfo ,getHeroDetails};