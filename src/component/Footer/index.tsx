import  {Container, Logo} from '../Footer/style';
import github from '../../github.svg';

const Footer = () => { 
      return (
        <Container>
          <p><a href='https://github.com/Johjoh-6'><Logo src={github} alt="github" />Johjoh-6</a></p>
        </Container>
      );
  }

  export default Footer;