import { useState,useEffect } from "react"
import { fetchDataFromApi } from './utils/api';

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch();

   useEffect(() => {
    fetchApiConfig();
   },[])
   
   const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
        console.log(res);

        const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url + "original",
        };

        dispatch(getApiConfiguration(url));
    });
};

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
