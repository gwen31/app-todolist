
const departmentRouter = require("./departments");

module.exports = (app) => {

    app.use('/departements', departmentRouter);
}
