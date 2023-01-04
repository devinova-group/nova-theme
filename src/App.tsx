/** @jsxImportSource theme-ui */
import "./App.css";
import { useColorMode, Box } from "theme-ui";
import Badges from "./components/Badges";
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
import Cards from "./components/Cards";
import Tables from "./components/Tables";

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
        <Box className="test"></Box>
        <h1>Tables</h1>
        <Box>
          <Tables />
        </Box>
        {/*  <h1>Spinner</h1>
       <Loading /> */}
        <Box className="test"></Box>
        <h1>Cards</h1>
        <Box>
          <Cards />
        </Box>
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
