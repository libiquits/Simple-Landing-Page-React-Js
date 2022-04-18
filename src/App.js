import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className ="main">
       <div className="center">

        <div className="menu">
          <div className="logo">
            <h3>Kakas's Code</h3>
          </div>
          <div className="item-menu">
            <a href="#">Login</a>
          </div>
        </div>
        <div className="form">
          <form>
            <h2>Contact us!</h2>
            <div className="items-form">
              <input placeholder='Your name' type="text"/>
              <input placeholder='Your E-mail' type="text"/>
              <input placeholder='Your Phone'type="text"/>
              <input placeholder='Your CPF'type="text"/>
              <input type="submit"/>
            </div>
          </form>
        </div>
        </div>
      </div>

      <div className='conteudo'>
        <div className='center'>
          <div className='conteudo-single'>
            <h3>Título da chamada</h3>
            <p>Aqui é o meu conteúdo de exemplo</p>
          </div>
          <div className='conteudo-single'>
            <h3>Título da chamada</h3>
            <p>Aqui é o meu conteúdo de exemplo</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
