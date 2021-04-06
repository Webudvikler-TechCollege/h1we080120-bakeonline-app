import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { Menu } from './components/partials/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Login } from './pages/Login';
import { Products } from './pages/Products';
import { Product } from './pages/Product';
import { AppContextProvider } from './Auth/AuthContextProvider';

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <IonApp>
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">

              <Route path="/page/Home" exact={true} component={Home} />
              <Route path="/page/Categories" exact={true} component={Categories} />
              <Route path="/page/Products/:categoryId" exact={true} component={Products} /> 
              <Route path="/page/Product/:productId" component={Product} />
              <Route path="/page/Login" exact={true} component={Login} />
              <Route path="/" exact={true}>
                <Redirect to="/page/Home" />
              </Route>

            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </AppContextProvider>
  );
};

export default App;
