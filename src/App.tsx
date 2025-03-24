import { BrowserRouter } from "react-router"
import YourRoute from "./routes"
import { I18nextProvider } from "react-i18next"
import i18n from "./contexts/translate"

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <YourRoute />
      </BrowserRouter>
    </I18nextProvider>
  )
}

export default App
