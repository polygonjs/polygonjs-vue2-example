import {SceneDataManifestImporter} from '@polygonjs/polygonjs/dist/src/engine/io/manifest/import/SceneData';
const manifest = {
	properties: '1652116991479',
	root: '1652116991479',
	nodes: {
		geo1: '1652116991479',
		'geo1/COP': '1652116991479',
		'geo1/MAT': '1652116991479',
		perspectiveCamera1: '1652116991479',
		'perspectiveCamera1/events1': '1652116991479',
		ocean: '1652116991479',
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
