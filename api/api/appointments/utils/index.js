const getAuthorization = (request) =>{
	auth = request.get("authorization")
	return auth ? auth : false 
}

module.exports = {
	getAuthorization
}