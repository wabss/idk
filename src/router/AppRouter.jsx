import {Routes, BrowserRouter, Route} from 'react-router'
import { MainPage, DragGame, HangMan } from '../pages'
import { Layout } from './Layout'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/draggame' element={<DragGame />} />
          <Route path='/hangman' element={<HangMan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
