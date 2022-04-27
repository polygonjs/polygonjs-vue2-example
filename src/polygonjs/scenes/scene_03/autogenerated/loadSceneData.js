import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651079797492',
	root: '1651079797492',
	nodes: {
		geo1: '1651079797492',
		'geo1/actor1': '1651079797492',
		'geo1/MAT': '1651079797492',
		perspectiveCamera1: '1651079797492',
		'perspectiveCamera1/events1': '1651079797492',
		positionalAudio1: '1651079797492',
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
