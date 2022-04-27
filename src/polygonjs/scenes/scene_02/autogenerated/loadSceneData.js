import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651079790951',
	root: '1651079790951',
	nodes: {
		perspectiveCamera1: '1651079790951',
		'perspectiveCamera1/events1': '1651079790951',
		floor: '1651079790951',
		COP: '1651079790951',
		geo2: '1651079790951',
		'geo2/MAT': '1651079790951',
		rhino: '1651079790951',
		'rhino/MAT': '1651079790951',
		'rhino/MAT/meshPhysicalBuilder1': '1651079790951',
		'rhino/MAT/meshLambertBuilder_INSTANCES': '1651079790951',
		'rhino/MAT/meshPhysicalBuilder_INSTANCES': '1651079790951',
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
