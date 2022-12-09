/** @jsxImportSource theme-ui */
import './App.css';
import { Card, Image, Badge , useColorMode, Button, Box, Text, Label, Switch, Checkbox, Radio, Field  } from 'theme-ui'
import CardEx from './components/CardEx';
import CardTest from './components/CardTest';

function App() {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div className="App">
      <div className="test">
      <Card variant='cards.primary' >
      <Image src='https://i.ibb.co/dBdCVQq/Rectangle-143.jpg'/>
      <Text variant='overline.notoSans'>Overline</Text>
      <Text variant='h5.quicksand'sx={{ fontWeight: 700,}}>Starting?</Text>
      <Text variant='caption.quicksand' sx={{lineHeight: '26.4px'}} >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
      <Button variant='learnMore'>Learn More</Button>
      </Card>
      <CardTest />
      </div>
      <div>
        <button onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }} >
          Toggle {colorMode === 'default' ? 'Dark' : 'Light'}</button>
          <div className="test">
          </div>
          <div className='test' style={{margin: '20px'}} >
          <Badge variant='inActive'>inActive</Badge>
          <Badge variant='error'>Error</Badge>
          <Badge variant='disabled'>Disabled</Badge>
          <Badge variant='active'>Active</Badge>
          <Badge variant='default'>Default</Badge>
          <Badge variant='primary'>Primary</Badge>
          <Badge variant='selected'>Selected</Badge>
          <Badge variant='secondary'>Secondary</Badge>
          </div>
        <div className='test' >
        

        <Field  variant='field.text' name="email" defaultValue="" placeholder='Placeholder Text' />
        <Field  disabled variant='field.text' name="email" defaultValue="" placeholder='Placeholder Text' />
        <Field  variant='field.textError' name="email" defaultValue="" placeholder='Placeholder Text' />


        
        </div>
        <div className='test'>
            <Field  variant='field.search' name="email" defaultValue="" placeholder='Search' />
        <Field  disabled variant='field.search' name="email" defaultValue="" placeholder='Search' />
 
        </div>
     <div className='test'>
       <Label ><Checkbox /></Label>
        <Label><Checkbox /></Label>
        <Label><Checkbox disabled /></Label>
     </div>
       
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
        <br />
        <br />
        <Text variant='display.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='title1.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='title2.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='subhead.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='body1.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='body2.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='body3.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='caption.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='button.notoSans'>Noto Sans</Text>
        <br />
        <Text variant='overline.notoSans'>Noto Sans</Text>
        <br />
        <br />
        <Text variant='display.quicksand'>Quicksand</Text>
        <br />
        <Text variant='title1.quicksand'>Quicksand</Text>
        <br />
        <Text variant='title2.quicksand'>Quicksand</Text>
        <br />
        <Text variant='subhead.quicksand'>Quicksand</Text>
        <br />
        <Text variant='body1.quicksand'>Quicksand</Text>
        <br />
        <Text variant='body2.quicksand'>Quicksand</Text>
        <br />
        <Text variant='body3.quicksand'>Quicksand</Text>
        <br />
        <Text variant='caption.quicksand'>Quicksand</Text>
        <br />
        <Text variant='button.quicksand'>Quicksand</Text>
        <br />
        <Text variant='overline.quicksand'>Quicksand</Text>
        <br />
      </div>
    </div>
  );
}

export default App;
