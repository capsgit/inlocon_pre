import "./App.css";

import { Header } from "./modules/Header/Header.js";
import { SearchSection } from "./modules/Search/SearchSection.js";
import { OffersSection } from "./modules/Offers/Offers.js";
import { InfoSection } from "./modules/Info/InfoSection.js";
import { Footer } from "./modules/Footer/Footer.js";

function App() {
  return (
    <>
      <Header />
      <SearchSection />
      <OffersSection />
      <InfoSection />
      {<Footer />}
    </>
  );
}

export default App;
