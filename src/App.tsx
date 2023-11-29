import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SampleTestComponent from './components/SampleTestComponent';
import './App.css';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <SampleTestComponent />
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/details" exact element={<Details />} />
            <Route path="/details/:id" exact element={<Details />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
