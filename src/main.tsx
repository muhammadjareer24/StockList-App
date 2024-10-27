import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StockList from './StockList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StockList />
  </StrictMode>,
)
