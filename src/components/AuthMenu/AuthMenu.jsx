import { AuthLink } from './AuthMenu.styled';

const navLinks = [
  { href: 'logIn', text: 'Login' },
  { href: 'register', text: 'Registration' },
];

export const AuthMenu = () => {
  return (
    <>
      {navLinks.map(({ href, text }) => (
        <AuthLink to={href} key={text} >
          {text}
        </AuthLink>
      ))}
    </>
  );
};