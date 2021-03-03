
//Admin Controller
const homeController = require('../app/http/controller/admin/homeController')

function initRoutes(app) {

	app.get('/', homeController().index)
}

module.exports = initRoutes