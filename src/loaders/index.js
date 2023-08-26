class DbSync {
  constructor() {
    this.sequelize;
  }

  set(sequelize) {
    this.sequelize = sequelize;
  }

  get() {
    return this.sequelize;
  }
}

export default DbSync;
