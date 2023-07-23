const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const { connectToDatabase, getdatabase } = require('./mongo')

// Middleware
app.use(cors()) // Allow Cross Origin Resource Sharing
app.use(express.json()) // Parse JSON bodies into JS objects

// Default Route
app.get('/', (req, res) => res.send('Hotel Server is Running!'))


// Database Connection
connectToDatabase().then(() => {
    // Middleware to inject database instance to the request object
    app.use(async (req, res, next) => {
        try {
            const database = getdatabase() // Access the database instance directly from the request object
            req.db = database; 
            next();
        } catch (error) {
            console.error('Error connecting to the database:', error);
            res.status(500).send({ status: 'error', message: 'Server Error' });
        }
    });

    // Routes Import
    const openRoutes = require('./src/routes/openRoutes')
    const adminRoutes = require('./src/routes/adminRoutes')

    // Routes Use 
    app.use('/api', openRoutes)
    app.use('/admin', adminRoutes)
    // Server Start
    app.listen(port, () => console.log(`app listening on port http://localhost:${port}`))
})
