module.exports = {
	apps: [
		{
			name: 'inventory-management',
			script: './node_modules/.bin/ts-node',
			args: 'src/index.ts', // or server.ts depending on your structure
			env: {
				NODE_ENV: 'development',
			},
		},
	],
}
