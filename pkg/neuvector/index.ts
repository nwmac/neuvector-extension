import { IPlugin } from '@shell/core/types';
import Test from './components/Test.vue';

// Init the package
export default function(plugin: IPlugin): void {
  // Provide plugin metadata from package.json
  plugin.metadata = require('./package.json');

  // --- Changes to replace the NV nav item and have it always shown ----

  // Update the existing Neu Vector product so that it is always shown
  plugin.addProduct(require('./product'));

  // Replace the existing NV route to use our component
  plugin.addRoute({
    name: 'c-cluster-neuvector',
    path: '/c/:cluster/neuvector',
    component: Test
  });

  // ---- End changes ----
}
