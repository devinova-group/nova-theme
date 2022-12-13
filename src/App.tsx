/** @jsxImportSource theme-ui */
import "./App.css";
import { useColorMode, Box, Switch, Avatar } from "theme-ui";
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



function App() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Box
      className="App"
      sx={{
        color: "default.black",
      }}
    >
       <Switch
        variant="switchs.toggleV2Small"
        sx={{
          position: "fixed",
          top: 10,
          right: 10,
        }}
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      ></Switch>
      <h1>Avatar</h1>
      <Avatars/>
      <h1>Toaster</h1>
      <Box className="test">
        <Toasters />
      </Box>
      <h1>Cards</h1>
      <Box className="test">
        <CardPrimary />
        <CardExp />
        <CardNoImg />
        <CardOnlyText />
      </Box>

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
  );
}

export default App;
