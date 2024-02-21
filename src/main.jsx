import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/Home.jsx";
import AdelPage from "./pages/Member/AdelPage";
import AlyaPage from "./pages/Member/AlyaPage";
import AnindyaPage from "./pages/Member/AnindyaPage";
import AmandaPage from "./pages/Member/AmandaPage";
import AziziPage from "./pages/Member/AziziPage";
import CalliePage from "./pages/Member/CalliePage";
import CathyPage from "./pages/Member/CathyPage";
import ChelseaPage from "./pages/Member/ChelseaPage";
import ChikaPage from "./pages/Member/ChikaPage";
import ChristyPage from "./pages/Member/ChristyPage";
import CynthiaPage from "./pages/Member/CynthiaPage";
import DaisyPage from "./pages/Member/DaisyPage";
import DenaPage from "./pages/Member/DanellaPage";
import ElinPage from "./pages/Member/ElinPage";
import HelismaPage from "./pages/Member/EliPage";
import EllaPage from "./pages/Member/EllaPage";
import FeniPage from "./pages/Member/FeniPage";
import FionyPage from "./pages/Member/FionyPage";
import FloraPage from "./pages/Member/FloraPage";
import FreyaPage from "./pages/Member/FreyaPage";
import GendisPage from "./pages/Member/GendisPage";
import GitaPage from "./pages/Member/GitaPage";
import GracePage from "./pages/Member/GraciePage";
import GraciaPage from "./pages/Member/Gracia";
import GreeselPage from "./pages/Member/GreeselPage";
import IndahPage from "./pages/Member/IndahPage";
import IndiraPage from "./pages/Member/IndiraPage";
import JeanePage from "./pages/Member/JeanePage";
import JessiPage from "./pages/Member/JessiPage";
import KathrinaPage from "./pages/Member/KathrinaPage";
import LiaPage from "./pages/Member/LiaPage";
import LuluPage from "./pages/Member/LuluPage";
import MarshaPage from "./pages/Member/MarshaPage";
import MichiePage from "./pages/Member/MichiePage";
import FebriolaPage from "./pages/Member/OllaPage";
import OnielPage from "./pages/Member/OnielPage";
import RaishaPage from "./pages/Member/RaishaPage";
import ShaniPage from "./pages/Member/ShaniPage";
import LynPage from "./pages/Member/LynPage";
import MuthePage from "./pages/Member/MuthePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/adel",
    element: <AdelPage />,
  },
  {
    path: "/alya",
    element: <AlyaPage />,
  },
  {
    path: "/amanda",
    element: <AmandaPage />,
  },
  {
    path: "/anindya",
    element: <AnindyaPage />,
  },
  {
    path: "/zee",
    element: <AziziPage />,
  },
  {
    path: "/callie",
    element: <CalliePage />,
  },
  {
    path: "/cathy",
    element: <CathyPage />,
  },
  {
    path: "/chelsea",
    element: <ChelseaPage />,
  },
  {
    path: "/chika",
    element: <ChikaPage />,
  },
  {
    path: "/christy",
    element: <ChristyPage />,
  },
  {
    path: "/cynthia",
    element: <CynthiaPage />,
  },
  {
    path: "/daisy",
    element: <DaisyPage />,
  },
  {
    path: "/danella",
    element: <DenaPage />,
  },
  {
    path: "/elin",
    element: <ElinPage />,
  },
  {
    path: "/eli",
    element: <HelismaPage />,
  },
  {
    path: "/ella",
    element: <EllaPage />,
  },
  {
    path: "/feni",
    element: <FeniPage />,
  },
  {
    path: "/fiony",
    element: <FionyPage />,
  },
  {
    path: "/flora",
    element: <FloraPage />,
  },
  {
    path: "/freya",
    element: <FreyaPage />,
  },
  {
    path: "/gendis",
    element: <GendisPage />,
  },
  {
    path: "/gita",
    element: <GitaPage />,
  },
  {
    path: "/gracia",
    element: <GraciaPage />,
  },
  {
    path: "/gracie",
    element: <GracePage />,
  },
  {
    path: "/greesel",
    element: <GreeselPage />,
  },
  {
    path: "/indah",
    element: <IndahPage />,
  },
  {
    path: "/indira",
    element: <IndiraPage />,
  },
  {
    path: "/jeane",
    element: <JeanePage />,
  },
  {
    path: "/jessi",
    element: <JessiPage />,
  },
  {
    path: "/kathrina",
    element: <KathrinaPage />,
  },
  {
    path: "/lia",
    element: <LiaPage />,
  },
  {
    path: "/lulu",
    element: <LuluPage />,
  },
  {
    path: "/lyn",
    element: <LynPage />,
  },
  {
    path: "/marsha",
    element: <MarshaPage />,
  },
  {
    path: "/michie",
    element: <MichiePage />,
  },
  {
    path: "/muthe",
    element: <MuthePage />,
  },
  {
    path: "/olla",
    element: <FebriolaPage />,
  },
  {
    path: "/oniel",
    element: <OnielPage />,
  },
  {
    path: "/raisha",
    element: <RaishaPage />,
  },
  {
    path: "/shani",
    element: <ShaniPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
