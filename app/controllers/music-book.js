import Ember from 'ember';

export default Ember.Controller.extend({
	actions :{
		editarTemplate(music){
			music.save().then(()=>{
				alert("Elemento actualizado correctamente");
			})
		},
		eliminarTemplate(music){
			music.destroyRecord().then(()=>{
				alert("Elemento eliminado correctamente");
			})
		},
			addMusic(){
			this.store.createRecord('music-book',{
				title: this.get('title'),
				author_id: this.get('id'),
				price: this.get('price'),
				img_url: this.get('img')
			}).save().then(()=>{
				this.set('title', ""),
				this.set('id', ""),
				this.set('price', ""),
				this.set('img', "")
			})
		},
	}
});
