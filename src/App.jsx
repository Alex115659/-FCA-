import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages/Main";
import BecomeTutor from "./pages/BecomeTutor";
import Answers from "./pages/Answers";
import Goal from "./pages/Goal";
import Explanation from "./pages/SystemExplanation";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/become-tutor" element={<BecomeTutor />} />
          <Route path="/questions-answer" element={<Answers />} />
          <Route path='/ourGoal' element={<Goal />} />
          <Route path='/howItWorks' element={<Explanation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
