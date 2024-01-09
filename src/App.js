import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import MyPage from "./pages/MyPage";
import Navigator from "./components/Navigator/Navigator";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <NavWrapper>
        <Navigator />
      </NavWrapper>
    </BrowserRouter>
  );
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;
