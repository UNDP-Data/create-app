import type { AnyRootRoute } from "@tanstack/react-router";
import { createRoute } from "@tanstack/react-router";
import { metaDataDefinition } from "@/utils/metaDataDefinition";

export default function createTanStackQueryDemoRoute(
	parentRoute: AnyRootRoute,
) {
	return createRoute({
		path: "/query-demo",
		head: ({ params }) =>
			metaDataDefinition({
				path: "/query-demo",
				locale: params.locale,
			}),
		getParentRoute: () => parentRoute,
	}).lazy(() => import("./queryDemo.lazy").then((d) => d.Route));
}
