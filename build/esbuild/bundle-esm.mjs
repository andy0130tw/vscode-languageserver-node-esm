// @ts-check

import * as esbuild from 'esbuild';
import { fixImportsPlugin, writeFilePlugin } from 'esbuild-fix-imports-plugin';

const result = await esbuild.build({
	entryPoints: ["src/**/*.ts"],
	bundle: false,
	platform: 'node',
	format: 'esm',
	target: 'node22',
	outbase: 'src',
	outdir: 'lib',
	packages: 'external',
	sourcemap: 'linked',
	write: false,
	outExtension: { '.js': '.mjs' },
	resolveExtensions: ['.mjs'],
	plugins: [fixImportsPlugin(), writeFilePlugin()],
});
