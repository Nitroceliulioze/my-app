import TopBar from '../../components/topBar/TopBar';
import Auth from '../../components/auth/Auth';
import Footer from '../../components/footer/Footer';
import './loginPage.css';

const LoginPage = () => {
  return (
    <>
    <TopBar />
    <Auth username={'User name'} password={'Password'} email={'Email'} buttonText={'LOGIN'}/>
    <Footer />
    </>
  )
}

export default LoginPage
