module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '55ce7957c112216b81d27dde980847cf'),
  },
});
