const products = [{
	id: 111,
	name: 'Always Together Dress',
	desc: '',
	variants: {
		color: [
			{ display: 'pink', value: 'pink' },
			{ display: 'orange', value: 'orange' },
			{ display: 'gray', value: 'gray' },
			{ display: 'yellow', value: 'brown' },
		]
	},
	inventory: 5,
	media: {
		cover: 'diruno.jpg',
		images: [{
			variant: 'color',
			value: 'pink',
			list: ['mock-1.jpg', 'mock-2.jpg', 'mock-3.jpg', 'mock-4.jpg']
		}, {
			variant: 'color',
			value: 'orange',
			list: ['mock-4.jpg', 'mock-3.jpg', 'mock-1.jpg']
		}]
	},
	category: 'Blak'
},{
	id: 112,
	name: 'Checker Board Scarf Black',
	desc: '',
	variants: {
		color: [{
			display: 'pink',
			value: 'pink',
		}]
	},
	inventory: 5,
	media: {
		cover: 'diruno-1.jpg',
		images: [{
			variant: 'color',
			value: 'pink',
			list: ['mock-1.jpg', 'mock-2.jpg', 'mock-3.jpg']
		}]
	},
	category: 'LEO + BE'
},{
	id: 113,
	name: 'Huntington 2.0 Tee Black with',
	desc: '',
	variants: {
		color: [{
			display: 'pink',
			value: 'pink',
		}]
	},
	inventory: 5,
	media: {
		cover: 'diruno-3.jpg',
		images: [{
			variant: 'color',
			value: 'pink',
			list: ['mock-1.jpg', 'mock-2.jpg', 'mock-3.jpg']
		}]
	},
	category: 'Katz + ke'
}]

export default products