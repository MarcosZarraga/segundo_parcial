import DS from 'ember-data';

export default DS.Model.extend({
	title:DS.attr('string'),
	author_id:DS.attr('number'),
	price:DS.attr('number'),
	img_url:DS.attr('string'),
	



});
