/* eslint-disable */
/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [vue(), eslint(), tailwindcss()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	build: {
		target: 'esnext',
	},
	server: {
		host: 'localhost',
		port: 5137,
		headers: {
			'Content-Security-Policy': "frame-ancestors 'self'",
			'X-Frame-Options': 'SAMEORIGIN',
		},
	},
})
