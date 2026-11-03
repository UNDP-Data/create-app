import type { AnyRootRoute } from "@tanstack/react-router";
import { createRoute } from "@tanstack/react-router";
import { metaDataDefinition } from "@/utils/metaDataDefinition";

export default function createTanStackQueryDemoRoute(
	parentRoute: AnyRootRoute,
) {
	return createRoute({
		path: "/query-demo",
		head: () =>
			metaDataDefinition({
				path: "/query-demo",
			}),
		getParentRoute: () => parentRoute,
	}).lazy(() => import("./queryDemo.lazy").then((d) => d.Route));
}
