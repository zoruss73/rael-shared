import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import ParticipantIDGeneratorSingle from "./pages/PariticipantId";
import AlldigitalID from "./pages/AlldigitalID";
import ParticipantCertificateGeneratorSingle from "./pages/CertificateofAppearance";
function App() {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />}></Route>
          <Route path="/id/:userId" element={< ParticipantIDGeneratorSingle/>}></Route>
          <Route path="/all-id" element={< AlldigitalID/>}></Route>
          <Route path="/certificate" element={< ParticipantCertificateGeneratorSingle/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
