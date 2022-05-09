import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1652116983270',
	root: '1652116983270',
	nodes: {
		perspectiveCamera1: '1652116983270',
		'perspectiveCamera1/events1': '1652116983270',
		floor: '1652116983270',
		COP: '1652116983270',
		geo2: '1652116983270',
		'geo2/MAT': '1652116983270',
		rhino: '1652116983270',
		'rhino/MAT': '1652116983270',
		'rhino/MAT/meshPhysicalBuilder1': '1652116983270',
		'rhino/MAT/meshLambertBuilder_INSTANCES': '1652116983270',
		'rhino/MAT/meshPhysicalBuilder_INSTANCES': '1652116983270',
	},
};

export const loadSceneData_scene_02 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_02',
		urlPrefix: sceneDataRoot + '/' + 'scene_02',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
