import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './components/pages/intro';
import Abstraction from './components/pages/Abstraction';
import { ErrorBoundary } from 'react-error-boundary';
import AbstractionSecond from './components/pages/AbstractionSecond';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro key={'intro'} />} />
          <Route path='/abstraction' element={<Abstraction key={'abstraction'} />} />
          <Route path='/abstraction-second' element={<AbstractionSecond key={'abstraction-second'} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
