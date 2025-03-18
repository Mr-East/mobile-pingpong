import { computed } from 'vue'
 
 
 export let getAssetsImages = computed(() => (name:string|undefined, type = 'png') => {
	/**
	 * 获取本地图
	 * @param name // 文件名 如 home-bg
	 * @param type // 文件类型 如 png jpg
	 * @returns {*|string}
	 */
	const path = `/src/static/images/${name}.${type}`
	const modules = import.meta.globEager('/src/static/images/*')
	return modules[path].default
})