import { defineConfig } from "cf/config";

export default defineConfig({
	worker: {
		name: "party_neraka",
		compatibilityDate: "2026-10-30",
		assets: {
			notFoundHandling: "single-page-application",
		},
		domains: [
			"pt.hapnanarsad.id",
		],
		observability: {
			enabled: true,
			logs: {
				enabled: true,
				persist: true,
			}
		},
	},
});
