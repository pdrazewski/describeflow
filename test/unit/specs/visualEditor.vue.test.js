import test from 'ava';
import _ from 'underscore';
import Vue from 'vue'
import visualEditor from '../../../src/components/visualEditor.vue'


/**
* visualEditor should have default data defined
* colorPicker initialize correctly
* range slider ininitalize correctly
* firebase connection works correctly
* no-internet firebase fallback?
* saving method work correct
* creating new firebase key works ok
* change width in editor affect scene div
* change height in editor affect scene div
* change border-radius in editor affect scene div
* change background-color in editor affect scene div
* data-validation in input forms works ok (0 not allowed for width and height)
* test picker on drag method?
*/

/**
* visualEditor should have default data defined
*/

test('visualEditor should have default data defined', t => {
	const partString = 'property should be defined';
  	t.not(visualEditor.data().name, undefined, `name ${partString}`)
  	t.not(visualEditor.data().bgcolor, undefined, `background color ${partString}`)
  	t.not(visualEditor.data().width, undefined, `width ${partString}`)
  	t.not(visualEditor.data().height, undefined, `height ${partString}`)
  	t.not(visualEditor.data().radius, undefined, `border-radius ${partString}`)
  	t.not(visualEditor.data().newKey, undefined, `newKey ${partString}`)
  	t.not(visualEditor.data().saved, undefined, `saved ${partString}`)
})
