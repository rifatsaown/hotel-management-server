const getHotelInfo = async (req, res) => {
    res.send({
        name: "Hotel Galaxies",
        frontImg: "https://i.ibb.co/fv0w1Yg/front-img.jpg",
        insideImg: "https://i.ibb.co/VVPG08b/inside-img.jpg",
        logo: "https://i.ibb.co/ct9t1KT/10235253-18062654-removebg-preview.png",
        address: "Uttara-10, Dhaka 1230",
        phone: "01234567890",
        email: "info@galaxies.com",
        website: "www.hotelgalaxies.com",
    })
}

const getHeroDetails = async (req, res) => {
    res.send([
        {
            title: "Enjoy A Luxury Experience",
            description: "Immerse yourself in a world of luxury and elegance at Galaxies Fancy Hotel, where every guest is treated like a star. From its celestial-inspired decor to impeccable service, prepare for an unforgettable stay.",
        },
        {
            title: "In The Heart Of The City",
            description: "Located in the heart of the city, Galaxies Fancy Hotel is the perfect base for exploring the city’s most iconic attractions. The hotel is just a short walk from the city’s main shopping district, and a 10-minute drive from the airport.",
        },
        {
            title: "With A Beautiful View",
            description: "Enjoy a relaxing stay in one of our 5-star rooms and suites, each with a private balcony and stunning views of the city. The hotel also features a rooftop pool and bar, a luxury spa, and a fitness center.",
        }
    ])
};

module.exports = { getHotelInfo ,getHeroDetails};