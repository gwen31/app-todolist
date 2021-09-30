const Department = require("../models/departments");

const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.getDepartments();
        res.status(200).json(departments)
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occured while retrieving departements" );
    }
};
module.exports = { getAllDepartments };