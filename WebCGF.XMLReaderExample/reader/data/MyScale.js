function MyScale(scene, x, y, z) {
 	CGFobject.call(this,scene);

 	this.x = x;
 	this.y = y;
 	this.z = z;
	
 };

 MyScale.prototype = Object.create(MyTransformation.prototype);
 MyScale.prototype.constructor = MyScale;

 MyScale.prototype.apply = function(){
 	this.scene.scale(x,y,z);
 };