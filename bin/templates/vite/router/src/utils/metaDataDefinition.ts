const SITE_URL = "SITE_URL";
const SITE_NAME = "SITE_NAME";
const DEFAULT_DESC = "DEFAULT_SITE_DESCRIPTION";

interface Arg {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
	imageAlt?: string;
	imageWidth?: number;
	imageHeight?: number;
}

export function metaDataDefinition({
	title,
	description = DEFAULT_DESC,
	path = "/",
	image = `${SITE_URL}/imgs/og-image.jpg`,
	imageAlt = SITE_NAME,
	imageHeight = 483,
	imageWidth = 862,
}: Arg = {}) {
	return {
		meta: [
			{ title: title ?? SITE_NAME },
			{ name: "description", content: description },
			{ property: "og:type", content: "website" },
			{ property: "og:site_name", content: SITE_NAME },
			{ property: "og:title", content: title ?? SITE_NAME },
			{ property: "og:description", content: description },
			{ property: "og:url", content: `${SITE_URL}${path}` },
			{ property: "og:image", content: image },
			{ property: "og:image:width", content: `${imageWidth}` },
			{ property: "og:image:height", content: `${imageHeight}` },
			{ property: "og:image:alt", content: imageAlt },
			{ property: "og:locale", content: "en_US" },
			{ name: "twitter:card", content: "summary_large_image" },
		],
		links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
	};
}
