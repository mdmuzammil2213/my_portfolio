import "./App.css";
import "./Component/Common.css";
import "./Component/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Component/Navbar";
import { Counter } from "./Component/Counter";
import { Todolist } from "./Component/Todolist";
import { API } from "./Component/API";
import { Idman } from "./Component/Idman";
import { Tabales } from "./Component/Tabales";
import { Login } from "./Component/Login";
import { Eshop } from "./Component/Eshop";
import { Animalpic } from "./Component/Animalpic";
import { Animal } from "./Component/Animal";
import { Chat } from "./Component/Chat";
import { FormLog } from "./Component/FormLog";
import { FunctionLog } from "./Component/FuntionLog";
import { DataForm } from "./Component/DataForm";
import { UserData } from "./Component/UserData";
import{ ProjectApi} from "./Component/ProjectApi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Todolist" element={<Todolist />} />
          <Route path="/API" element={<API />} />
          <Route path="Idman" element={<Idman />} />
          <Route path="Tabales" element={<Tabales />} />
          <Route path="Login" element={<Login />} />
          <Route path="Eshop" element={<Eshop />} />
          <Route path="Animalpic" element={<Animalpic />} />
          <Route path="Animal" element={<Animal />} />
          <Route path="Chat" element={<Chat />} />
          <Route path="FormLog" element={<FormLog />} />
          <Route path="FunctionLog" element={<FunctionLog/>}/>
          <Route path="DataForm" element={<DataForm/>}/>
          <Route path="UserData" element={<UserData/>}/>
          <Route path="ProjectApi" element={<ProjectApi/>}/>
         
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
