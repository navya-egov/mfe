import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

//mount fn to startup the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

//develpment mode and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

//running thru container
export { mount };
