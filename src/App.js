import React from 'react';
import './App.css';
import { Navigation } from './widgets/nav';
import { Footer } from './widgets/footer';
import { NavAdopt } from './widgets/NavAdopt';
import Home from './pages/Home/Home';
import ItemList from './pages/ItemPage/List/ItemList';
import LK from './pages/User/Lk';
import {Header} from './widgets/header'
import {AdminPage} from './pages/Admin/Admin';
// import Author from './pages/author'; 
import Item from './pages/ItemPage/Card/Item';
import MapList from './pages/MapPage/List/Map_list'
import Map from './pages/MapPage/Card/Map';
import PokemonList from './pages/PokemonPage/List/PokemonList';
import Pokemon from './pages/PokemonPage/Card/Pokemon';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './features/User/AuthContext';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { store } from './store';
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
                <Route path="/map_list" element={<MapList />} />
                <Route path="/map_list/map" element={<Map />} />
                <Route path="/pokemons" element={<PokemonList />}/>
                <Route path="/pokemon/:ident" element={<Pokemon />} />
                <Route path="/items" element={<ItemList />} />
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