const jwt = require('jsonwebtoken');

class UsersService {

	massive(){
    	return {
			"items": [
				{
					id: 0,
					name: "Max",
					surname: "Baz",
					age: "19",
					gender: "male",
					state: "Ukraine"
				},
				{
					id: 1,
					name: "Petro",
					surname: "Dzdril",
					age: "24",
					gender: "male",
					state: "Ukraine"
				},
				{
					id: 2,
					name: "Alex",
					surname: "Vanderlinde",
					age: "26",
					gender: "male",
					state: "USA"
				},
				{
					id: 3,
					name: "Pedro",
					surname: "Pascal",
					age: "47",
					gender: "male",
					state: "Chile"
				}
			]
		}
	}

	generateJWT(id, identity) {
		
		const token = jwt.sign({
			uid: id, 
			identity: identity
		}, "$SECRET$", { 
			algorithm: 'HS256' 
		})
	  	return { token: token };
	}

	getItem(id) {
		const data = this.massive();

		const result = data["items"].filter( (item) => {
			return item.id == id;
		});

		const jwt = this.generateJWT(result[0].id, result[0].state);
		
		return { 
			"items" : result, 
			"token" : jwt
		};
	}
}

module.exports = new UsersService()