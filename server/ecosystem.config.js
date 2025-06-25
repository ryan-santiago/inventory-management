module.exports = {
	app: [
		{
			name: 'inventory-management',
			script: '/usr/bin/npm',
			args: 'run dev',
			interpreter: 'none',
			env: {
				NODE_ENV: 'development',
				ENV_VAR1: 'environment-variable',
			},
		},
	],
}
