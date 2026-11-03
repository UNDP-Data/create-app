import type { AnyRootRoute } from "@tanstack/react-router";
import { createRoute } from "@tanstack/react-router";
import { metaDataDefinition } from "@/utils/metaDataDefinition";

export default function createAboutRoute(parentRoute: AnyRootRoute) {
	return createRoute({
		path: "/about",
		getParentRoute: () => parentRoute,
		head: () =>
			metaDataDefinition({
				path: "/about",
			}),
	}).lazy(() => import("./about.lazy").then((d) => d.Route));
}
