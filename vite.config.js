import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://RLCASTRO.github.io/hacker-stories",
  plugins: [react()],
})
