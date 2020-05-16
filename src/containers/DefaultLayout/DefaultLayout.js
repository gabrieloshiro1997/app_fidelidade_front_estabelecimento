import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';

// configuração de navegação da barra lateral
import navigation from '../../_nav';
import navigationEstabelecimento from '../../_navEstabelecimento';
import navigationCliente from '../../_navCliente';
// configoração das rotas
import routes from '../../routes';

import { isAuthenticated } from '../../../src/config/services/Autenticação';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
            <DefaultHeader />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
				{ localStorage.getItem("TIPO_ACESSO") == 1 &&
		            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
				}

				{ localStorage.getItem("TIPO_ACESSO") == 2  &&
		            <AppSidebarNav navConfig={navigationEstabelecimento} {...this.props} router={router}/>
				}
				{ localStorage.getItem("TIPO_ACESSO") == 3  &&
		            <AppSidebarNav navConfig={navigationCliente} {...this.props} router={router}/>
				}
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
                <Switch>
                  {
                    isAuthenticated() ? (
                      routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : this.props.history.push('/404')
                      })
                    ) : this.props.history.push('/login')
                  }
                </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
            <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;


