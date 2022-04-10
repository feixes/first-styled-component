import styled from 'styled-components'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import Button from '@mui/material/Button';

const StyledBtn = styled(Button)`
  background: red !important; /* DO NOT FUCKING DO THIS SHIT AGAIN! */
  margin-left: 5px !important;
`

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'pink' }}>
      <div className="border">
        <BasicTitle special>styled component</BasicTitle>
        <BasicTitle>styled component</BasicTitle>
        <DefaultButton>click me!</DefaultButton>
        <HipsterButton>click me too!</HipsterButton>
      </div>
      <div className='border'>
        <h2>extend material-ui button</h2>
        <Button color='primary' variant='contained'>Hello world</Button>
        <StyledBtn variant='contained'>Hello world</StyledBtn>
      </div>
    </div>
  );
}

export default App;
