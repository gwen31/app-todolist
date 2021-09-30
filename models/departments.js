const connection = require("../db-config");

const getDepartments = () => {
    return connection.query("SELECT * FROM departement");
};

module.exports = {getDepartments};