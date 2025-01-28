

import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"
import { createStore, combineReducers } from 'redux'

import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { UserProvider } from "@auth/hooks"
import { appointmentReducer } from "@root/reducers/appointments"
import { AppRouter } from "@core/components/AppRouter"




const reducers = combineReducers({
  appointments: appointmentReducer
})

const store = createStore(reducers)

function App() {

  return (<>
    <Container>
      <BrowserRouter>
        <Provider store={store}>
          <UserProvider>
          
            <AppRouter />

            <footer className="footer mt-auto py-3">
              <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <Link to="/" className="nav-link px-2 text-body-secondary">Barbershop</Link>
              </ul>
              <p className="text-center text-body-secondary">© 2025</p>
            </footer>
          
          </UserProvider>
        </Provider>
      </BrowserRouter>
    </Container>
  </>)
}

export default App
