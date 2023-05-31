import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Registration from "./components/registration/registration";
import Profile from "./components/profile/profile";

function App() {

  axios.interceptors.request.use(config => {
        config.headers['Origin'] = 'http://localhost:3001';
        return config;
      });
  return (
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Registration />} />
      <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;