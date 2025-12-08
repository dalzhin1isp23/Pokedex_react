import React from 'react';
import './App.css';
import { Header } from './components/index';
import { Navigation } from './components/nav';
import { Footer } from './components/footer';
import { NavAdopt } from './components/nav_adopt';
import Home from './pages/home';
import Item_list from './pages/item_list';
import LK from './pages/lk';
import {AdminPage} from './pages/Admin';
// import Author from './pages/author'; 
import Item from './pages/item';
import Map_list from './pages/map_list';
import Map from './pages/map';
import Pokemon_list from './pages/pokemon_list';
import Pokemon from './pages/pokemon';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { store } from './store/store';
import { Provider } from 'react-redux';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}> 
        <AuthProvider>
          <div className="wrapper">
            <Router>
              <NavAdopt />
              <Header />
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map_list" element={<Map_list />} />
                <Route path="/map_list/map" element={<Map />} />
                <Route path="/pokemons" element={<Pokemon_list />}/>
                <Route path="/pokemon/:ident" element={<Pokemon />} />
                <Route path="/items" element={<Item_list />} />
                <Route path="/items/:id" element={<Item />} />
                <Route path="/lk" element={<LK />} />
                {/* <Route path="/author" element={<Author />} /> */}
                <Route path='/rooot' Component={AdminPage}/>
              </Routes>
              <Footer />
            </Router>
          </div>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={true} /> 
      </QueryClientProvider>
    </Provider>
      
  );
};

export default App;