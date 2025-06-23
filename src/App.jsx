import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing";
import RootLayouts from "./layouts/RootLayouts";
import Headphones from "./Pages/Headphones";
import Speakers from "./Pages/Speakers";
import Earphones from "./Pages/Earphones";
import HeadphoneDetail from "./Pages/HeadphoneDetail";
import MarkHeadphonesDetail from "./Pages/MarkHeadphonesDetail";
import XX59SectionDetail from "./Pages/XX59SectionDetail";
import ZX7SpeakerDetail from "./Pages/ZX7SpeakerDetail";
import ZX9SpeakerDetail from "./Pages/ZX9SpeakerDetail";
import EarphonesDetail from "./Pages/EarphonesDetail";
import CheckoutPage from "./Pages/CheckoutPage";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index={true} element={<Landing />} />
            <Route path="/headphones" element={<Headphones />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/headphoneDetail" element={<HeadphoneDetail />} />
            <Route
              path="/markheadphoneDetail"
              element={<MarkHeadphonesDetail />}
            />
            <Route path="/XX59DetailedPage" element={<XX59SectionDetail />} />
            <Route path="/ZX7SpeakerDetail" element={<ZX7SpeakerDetail />} />
            <Route path="/ZX9SpeakerDetail" element={<ZX9SpeakerDetail />} />
            <Route path="/earphoneDetail" element={<EarphonesDetail />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;