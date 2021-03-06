import {uuid} from '../help/util.js'
import {dragWapper,dragTargetWapper,createFaceDomWapper} from '../help/util.js';


const div = {
	id:"div",
	name : "层",
	nameEN : "div",
	type:"container",
	createFaceDom : function(){
		const faceDom = $("<div></div>");
		createFaceDomWapper(faceDom[0]);

		faceDom.attr('style','margin:3px;border:1px dashed #aaa;padding:5px');
		faceDom.html("");
		//faceDom[0].id = uuid();
		dragWapper(faceDom[0]);
		dragTargetWapper(faceDom[0]);

		return faceDom[0];
	}
}
export default div;