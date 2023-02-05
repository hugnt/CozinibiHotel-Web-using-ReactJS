//routes
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './utils';


import {publicRoutes} from '~/routes'
import { DefaultLayout } from '~/layouts';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, i) => {
              let Layout = DefaultLayout;
              const Page = route.component;
              var namePage = route.name;
              return <Route key={i} path={route.path} element={<Layout bannerName={namePage}><Page/></Layout>}/>
  
            })}
          </Routes>
        </div>
      </Router>
    </Provider>
  ); 
}

export default App;
