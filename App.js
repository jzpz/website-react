import './App.css';
import { Root } from './Pages/Root';
import { Home } from './Pages/Home'
import React, { createContext, useContext, useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  createRoutesFromElements,
  BrowserRouter
} from "react-router-dom";
import { Project } from './Pages/Project';
import { ErrorPage } from './Pages/ErrorPage';
import { Projects } from './Pages/Projects';
import { CV } from './CV';
import { Links } from './Pages/Links';
import { AdminPanel } from './Pages/Admin/AdminPanel';
import { EditProject } from './Pages/Admin/EditProject';
import { Signin } from './Pages/Admin/Signin';

export const LocalizationContext = createContext();


export default function App() {
  const [localization, setLocalization] = useState("en")
  return (
    <React.StrictMode>
      <LocalizationContext.Provider value={[localization, setLocalization]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:projectName" element={<Project />} />
              <Route path="links" element={<Links />} />
              <Route path="cv" element={<CV />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="admin">
                <Route path="signin" element={<Signin />} />
                <Route path="panel" element={<AdminPanel />} />
                <Route path="edit" element={<EditProject />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LocalizationContext.Provider>
    </React.StrictMode>
  );
}
