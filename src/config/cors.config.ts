const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your client's origin or an array of origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // If you need to handle cookies
    optionsSuccessStatus: 204,
};

export default corsOptions;