const token = '1f90453a502c7f89f739df8afd4e97901570d877da1b8f1f'

export const server_calls = {
	get:async () => {
		const response = await fetch(`https://library-app-hbr4.onrender.com/api/books`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'x-access-token': `Bearer ${token}`
			}
		});

		if (!response.ok) {
			throw new Error('Falied to fetch data from the server.')
		}

		return await response.json()
	},

	create: async (data: any = {}) => {
		const response = await fetch(`https://library-app-hbr4.onrender.com/api/books`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'x-access-token': `Bearer ${token}`
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			throw new Error('Failed to create new data on the server.')
		}

		return await response.json()
	},

	update: async (id: string, data: any = {}) => {
		const response = await fetch (`https://library-app-hbr4.onrender.com/api/books${id}`,
		{
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'x-access-token': `Bearer ${token}`
			},
			body: JSON.stringify(data)
		})

		if (!response.ok) {
			throw new Error('Failed to update data on the server.')
		}

		return await response.json()
	},

	delete: async (id: string) => {
		const response = await fetch(`https://library-app-hbr4.onrender.com/api/books${id}`,
		{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'x-access-token': `Bearer ${token}`
			},
		})

		if (!response.ok) {
			throw new Error('Failed to delete data from the server.')
		}

		return;
	},
}