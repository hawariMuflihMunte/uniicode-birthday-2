import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// Pages
import Intro from './components/pages/intro';
import Abstraction from './components/pages/Abstraction';
import AbstractionSecond from './components/pages/AbstractionSecond';
import AbstractionThird from './components/pages/AbstractionThird';

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Intro key={'intro'} />} />
          <Route path='/abstraction' element={<Abstraction key={'abstraction'} />} />
          <Route path='/abstraction-second' element={<AbstractionSecond key={'abstraction-second'} />} />
          <Route path='/abstraction-third' element={<AbstractionThird key={'abstraction-second'} />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
