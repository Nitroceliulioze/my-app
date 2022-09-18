import TopBar from '../../components/topBar/TopBar';
import Auth from '../../components/auth/Auth';
import Footer from '../../components/footer/Footer';
import './registerPage.css';

const RegisterPage = () => {
  return (
    <>
    <TopBar />
    <Auth username={'New user name'} password={'New password'} email={'New email'} buttonText={'REGISTER'} isRegister={true}/>
    <Footer />
    </>
  )
}
export default RegisterPage