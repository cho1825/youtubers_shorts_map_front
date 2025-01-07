import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0으로 바인딩하여 네트워크 전체에서 접근 가능
    port: 5173  // 필요에 따라 포트 설정
  }
})
