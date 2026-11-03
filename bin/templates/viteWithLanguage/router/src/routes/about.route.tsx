import type { AnyRootRoute } from "@tanstack/react-router";
import { createRoute } from "@tanstack/react-router";
import { metaDataDefinition } from "@/utils/metaDataDefinition";

export default function createAboutRoute(parentRoute: AnyRootRoute) {
	return createRoute({
		path: "/about",
		head: ({ params }) =>
			metaDataDefinition({
				path: "/about",
				locale: params.locale,
			}),
		getParentRoute: () => parentRoute,
	}).lazy(() => import("./about.lazy").then((d) => d.Route));
}
