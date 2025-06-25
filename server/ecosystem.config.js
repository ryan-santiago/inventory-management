module.exports = {
	app: [
		{
			name: 'inventory-management',
			script: 'npm',
			args: 'run dev',
			interpreter: 'none',
			env: {
				NODE_ENV: 'development',
				ENV_VAR1: 'environment-variable',
			},
		},
	],
}
