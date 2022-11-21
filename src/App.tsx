/** @jsxImportSource theme-ui */
import './App.css';
import { useColorMode, Button, Box, Text, Label, Switch, Checkbox, Radio, Avatar } from 'theme-ui'




function App() {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div className="App">
      <div className="test">
      </div>
      <div>
        <button onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }} >
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}</button>
        <div className='test' >
          <Text>Hello</Text>
        </div>

        <Label><Checkbox /></Label>
        <Label><Checkbox /></Label>
        <Label><Checkbox disabled /></Label>
      </div>
      <div className='test'>
        <Label><Radio name='test' value='true' /></Label>
        <Label><Radio name='test' value='true' /></Label>
        <Label><Radio name='test' disabled /></Label>
      </div>
      <div className='test' >
        <Button variant='primary' disabled >+ Button</Button>
        <Button variant='activeMedium' >+ Button</Button>
        <Button variant='activeSmall' >$ Button</Button>
      </div>

      <div className='test' >
        <Button variant='error'>$ Button</Button>
        <Button variant='errorMedium' disabled>$ Button</Button>
        <Button variant='errorSmall'>$ Button</Button>
      </div>
      <div className='test' >

        <Button variant='success'>+ Button</Button>
        <Button variant='successMedium' >+ Button</Button>
        <Button variant='successSmall' disabled >$ Button</Button>
      </div>

      <div className='test' >
        <Button variant='mobile' disabled>+</Button>
        <Button variant='mobileMedium' >+</Button>
        <Button variant='mobileSmall' >+</Button>
      </div>

      <div className='test' >
        <Button variant='mobileError'>+</Button>
        <Button variant='mobileErrorMedium' >+</Button>
        <Button variant='mobileErrorSmall' >+</Button>
      </div>
      <div className='test' >
        <Button variant='mobileSuccess'>+</Button>
        <Button variant='mobileSuccessMedium' >+</Button>
        <Button variant='mobileSuccessSmall' >+</Button>
      </div>

      <div className='test'>
        <Box>
          <Switch variant='switchs.toggleBig'></Switch>
          <Switch variant='switchs.toggleSmall' sx={{ margin: '30px' }}></Switch>
          <Switch variant='switchs.toggleBigDayNight' sx={{ margin: '30px' }}></Switch>
          <Switch variant='switchs.toggleSmallDayNight' sx={{ margin: '30px' }}></Switch>
        </Box>
      </div>
      <div>
        <Text variant='h1.neucha'>H1- Neucha</Text>
        <br />
        <Text variant='h2.neucha'>H2- Neucha</Text>
        <br />
        <Text variant='h3.neucha'>H3- Neucha</Text>
        <br />
        <Text variant='h4.neucha'>H4- Neucha</Text>
        <br />
        <Text variant='h5.neucha'>H5- Neucha</Text>
        <br />
        <Text variant='h6.neucha'>H6- Neucha</Text>
        <br />
        <Text variant='h1.quicksand'>H1- Quicksand</Text>
        <br />
        <Text variant='h2.quicksand'>H2- Quicksand</Text>
        <br />
        <Text variant='h3.quicksand'>H3- Quicksand</Text>
        <br />
        <Text variant='h4.quicksand'>H4- Quicksand</Text>
        <br />
        <Text variant='h5.quicksand'>H5- Quicksand</Text>
        <br />
        <Text variant='h6.quicksand'>H6- Quicksand</Text>
        <br />

      </div>
    </div>
  );
}

export default App;
