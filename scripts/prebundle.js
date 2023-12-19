import { build } from 'esbuild';

const prebundleTargets = ['dist/utils.js', 'dist/gfm/index.js'];

Promise.all(
	prebundleTargets.map((target) => {
		console.log(`Prebundling ${target}`);
		return build({
			entryPoints: [target],
			bundle: true,
			outfile: target,
			allowOverwrite: true,
			format: 'esm'
		});
	})
);
