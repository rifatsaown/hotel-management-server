// Add item to menu
const addRoom = async (req, res) => {
    try {
        const menuCollection = req.db.collection("rooms");
        const item = {
            name: "Chicken Burger",
            price: 250,
            description: "A delicious chicken burger with cheese and fries",
            image: "https://i.imgur.com/5ktcSzF.jpg",
        };

        const result = await menuCollection.insertOne(item);
        console.log("Room Added");
        res.send(result);
        
    } catch (error) {
        console.error('Error adding item to the menu:', error);
        res.status(500).send({ status: 'error', message: 'Server Error' });
    }
};

module.exports = { addRoom };
