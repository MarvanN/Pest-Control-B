module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
        url: '/',
        auth: {
            secret: env('ADMIN_JWT_SECRET', '75c3a0bf67887387cab546471abcc8e7'),
        },
    },
});
