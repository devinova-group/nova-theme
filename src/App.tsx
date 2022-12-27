/** @jsxImportSource theme-ui */
import "./App.css";
import { useColorMode, Box } from "theme-ui";
import CardExp from "./components/Cards/CardExpandable";
import Badges from "./components/Badges";
import CardPrimary from "./components/Cards/CardPrimary";
import CardNoImg from "./components/Cards/CardNoImg";
import CardOnlyText from "./components/Cards/CardOnlyText";
import Fields from "./components/Fields";
import Checksboxes from "./components/Checksboxes";
import Radios from "./components/Radios";
import Buttons from "./components/Buttons";
import Headings from "./components/Headings";
import BodyText from "./components/BodyText";
import Toasters from "./components/Toasters";
import Avatars from "./components/Avatars";
import Modal from "./components/Modal";
import Loading from "./components/Loading";
import Switches from "./components/Switches";
import Switch from "./library/Switch";

function App() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <>
      <Box
        className="App"
        sx={{
          color: "default.black",
        }}
      >
        <Box
          className="text"
          sx={{
            position: "fixed",
            top: 10,
            right: 20,
          }}
        >
          <Switch
            variant="smallV1"
            onClick={() => {
              setColorMode(colorMode === "default" ? "dark" : "default");
            }}
          />
        </Box>
        {/*  <h1>Spinner</h1>
       <Loading /> */}
        <Box className="test"></Box>
        <h1>Modal</h1>
        <Box className="test">
          <Modal />
        </Box>
        <h1>Avatar</h1>
        <Avatars />
        <h1>Toaster</h1>
        <Box className="test">
          <Toasters />
        </Box>
        <h1>Cards</h1>
        <Box className="test">
          <CardPrimary />
          <CardNoImg />
        </Box>
        <Box className="test">
          <CardExp />
          <CardOnlyText />
        </Box>
        <h1>Switch</h1>
        <Switches />
        <h1>Badges</h1>
        <Badges />

        <h1>Fields</h1>
        <Fields />

        <h1>Check Box</h1>
        <Checksboxes />

        <h1>Radios</h1>
        <Radios />

        <h1>Buttons</h1>
        <Buttons />

        <h1>-----Headings-----</h1>
        <Headings />

        <h1>-----BodyText-----</h1>
        <BodyText />
      </Box>
    </>
  );
}

export default App;
