import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1652116974774',
	root: '1652116974774',
	nodes: {
		geo1: '1652116974774',
		'geo1/actor1': '1652116974774',
		'geo1/MAT': '1652116974774',
		perspectiveCamera1: '1652116974774',
		'perspectiveCamera1/events1': '1652116974774',
		positionalAudio1: '1652116974774',
	},
};

export const loadSceneData_scene_03 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_03',
		urlPrefix: sceneDataRoot + '/' + 'scene_03',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
