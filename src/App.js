import Navbar from './common/Navbar';
import Home from './common/core/Home';
import About from './common/About';
import Contact from './common/Contact';
import { Route, Routes } from 'react-router-dom';
import OpenRoute from './common/core/OpenRoute';
import Signup from './common/Signup';
import './App.css';
import Login from './common/Login';
import PrivateRoute from './common/core/PrivateRoute';
import MyProfile from './common/Dashboard/MyProfile';
import Dashboard from './common/Dashboard';
import AllTodos from './common/Dashboard/AllTodos';
import Settings from './common/Dashboard/Settings';
import CreateTodo from './common/Dashboard/CreateTodo';

function App() {
  return (
    <div className="h-screen w-screen bg-richblack-10">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>

          <Route 
              path='/about' 
              element={<OpenRoute>
                        <About/>
                      </OpenRoute>
          }/>

          <Route 
              path='/contact' 
              element={<OpenRoute>
                        <Contact/>
                      </OpenRoute>
          }/>

          <Route 
              path='/signup' 
              element={<OpenRoute>
                        <Signup/>
                      </OpenRoute>
          }/>

          <Route 
              path='/login' 
              element={<OpenRoute>
                        <Login/>
                      </OpenRoute>
          }/>

          <Route
            element={<PrivateRoute>
                <Dashboard/>
              </PrivateRoute>}>

              <Route path="/dashboard/my-profile" 
              element={<MyProfile/>}/>

              <Route path="/dashboard/allTodos" 
              element={<AllTodos/>}/>

              <Route path="/dashboard/settings" 
              element={<Settings/>}/>

              <Route path="/dashboard/createTodo" 
              element={<CreateTodo/>}/>
              
          </Route>
          
        </Routes>
    </div>
  );
}

export default App;
