import type { AnyRootRoute } from '@tanstack/react-router';
import { createRoute } from '@tanstack/react-router';

export default function createTanStackQueryDemoRoute(parentRoute: AnyRootRoute) {
  return createRoute({
    path: '/query-demo',
    getParentRoute: () => parentRoute,
  }).lazy(() => import('./queryDemo.lazy').then((d) => d.Route));
}
