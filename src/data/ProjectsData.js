const Projects = [
    {
        id: 0,
        name: 'Portfolio',
        description: 'Portfolio to showcase skills and projects.',
        tech: [
            'nodejs',
            'javascript',
            'reactjs',
            'html5',
            'styled-components',
            'css',
        ],
        skills: [
            'front-end',
            'responsive'
        ],
        images: [
            "https://i.ibb.co/VJsxDBN/port7-2.png",
            "https://i.ibb.co/cbP4D6M/port1-3.png",
            "https://i.ibb.co/yYzGVDH/port2-2.png",
            "https://i.ibb.co/CzgrH0y/port3-2.png",
            "https://i.ibb.co/gW4YTqv/port4-2.png",
        ],
        demo: 'https://bufige.github.io/portfolio/',
        github: 'https://www.github.com/bufige',
    },
    {
        id: 1,
        name: 'Buvie',
        description: 'A movie app to search for movies and its details.',
        tech: [
            'nodejs',
            'javascript',
            'reactjs',
            'html5',
            'styled-components',
            'css',
            'api'
        ],
        skills: [
            'front-end',
            'responsive'
        ],
        images: [
            "https://i.ibb.co/HCvJF06/buvie2-2.png",
            "https://i.ibb.co/mzj3xTN/buvie4-2.png",
            "https://i.ibb.co/gy4vt6Q/buvie1-2.png",
        ],
        demo: 'https://bufige.github.io/buvie/',
        github: 'https://www.github.com/bufige/buvie',
	}, 
	{
        id: 2,
        name: 'Twitch App frontend',
        description: 'A copycat app of twitch using react native.',
        tech: [
            'nodejs',
            'react-native',
            'styled-components',
            'css',
        ],
        skills: [
            'front-end',
			'responsive',
			'mobile'
        ],
        images: [
            'https://i.ibb.co/ggwLdYQ/screenshot-2020-09-22-22-48-51-933.png',
			'https://i.ibb.co/TLDryj6/screenshot-2020-09-22-22-49-25-843.png',
        ],
        demo: '',
        github: 'https://github.com/outbreakx/twitch-app',
	}, 
	{
        id: 3,
        name: 'Ecommerce frontend',
        description: 'A frontend with basic ecommerce features and design.',
        tech: [
            'nodejs',
            'react-native',
            'styled-components',
			'css',
			'reactjs'
        ],
        skills: [
            'front-end',
			'responsive',
			'mobile first'
        ],
        images: [
            'https://i.ibb.co/XFK0DM7/ecommerce1.png',
			'https://i.ibb.co/6BHcFzD/ecommerce2.png'
        ],
        demo: 'https://ecommerce-react-nine.vercel.app',
        github: 'https://github.com/Bufige/ecommerce-react',
	}, 
	{
        id: 4,
        name: 'Ecommerce backend api',
        description: 'api with basic ecommerce features',
        tech: [
			'nodejs',
			'adonisjs'
        ],
        skills: [
			'back-end',
			'api'
        ],
        images: [
            'https://i.ibb.co/Mks7YK0/ecommerce3.png',
        ],
        demo: 'https://bufige-ecommerce-api.herokuapp.com/products',
        github: 'https://github.com/Bufige/ecommerce-api',
	}, 
	{
        id: 5,
        name: 'Webchat frontend with svelte',
        description: 'basic webchat with svelte, learning how svelte works.',
        tech: [
			'nodejs',
			'svelte'
        ],
        skills: [
			'front-end',
			'sockets'
        ],
        images: [
            'https://i.ibb.co/t47gYRd/webchat1.png',
        ],
        demo: 'https://chat-svelte-frontend.vercel.app',
        github: 'https://github.com/Bufige/chat-svelte-frontend',
	}, 
	
].reverse();
export default Projects;