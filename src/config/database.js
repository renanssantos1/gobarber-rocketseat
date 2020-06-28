module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  password: 'docker',
  username: 'postgres',
  database: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
