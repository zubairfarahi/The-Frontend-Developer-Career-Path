import Header from '../components/Header'
import Main from "../components/Main";
import Footer from "../components/Footer";
// import '../styles/main.css'

export default function App(){
    return (
      <>
        <div className='main--page'>
          <Header />
          <Main />
          <Footer />
        </div>
      </>
    );
}
