import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1651079787779',
	root: '1651079787779',
	nodes: {
		geo1: '1651079787779',
		'geo1/COP': '1651079787779',
		'geo1/MAT': '1651079787779',
		perspectiveCamera1: '1651079787779',
		'perspectiveCamera1/events1': '1651079787779',
		ocean: '1651079787779',
	},
};

export const loadSceneData_scene_01 = async (options = {}) => {
	const sceneDataRoot = options.sceneDataRoot || './polygonjs/scenes';
	return await SceneDataManifestImporter.importSceneData({
		sceneName: 'scene_01',
		urlPrefix: sceneDataRoot + '/' + 'scene_01',
		manifest: manifest,
		onProgress: options.onProgress,
	});
};
