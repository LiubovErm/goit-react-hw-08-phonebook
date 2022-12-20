import { Box } from '../../components/Box/Box'
import { MessageBox, Message} from './HomePage.styled';


const HomePage = () => {

  return (
    <Box>
      <MessageBox>
        <Message>{`Welcome to Phonebook!`}</Message>
      </MessageBox>
    </Box>
  );
};

export default HomePage;
