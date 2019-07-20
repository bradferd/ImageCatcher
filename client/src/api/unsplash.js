import axios from 'axios'

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 118e6a1daadf348c064cbda1bbe9bb810f84472728bcc0e89180ef73c98259e3'
	}
})
