import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './components/pages/intro';
import Abstraction from './components/pages/Abstraction';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro key={'intro'} />} />
          <Route path='/abstraction' element={<Abstraction key={'abstraction'} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
