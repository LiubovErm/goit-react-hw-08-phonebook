import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { Wrapper, Username, Button } from './UserMenu.styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const { user } = useAuth();
  const onLogOut = () => {
        dispatch(logOut());
        // navigate('/login');
    }
    
  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button type="button" onClick={onLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};