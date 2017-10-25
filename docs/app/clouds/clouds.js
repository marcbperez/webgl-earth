var clouds = function() {
  var geometry = new THREE.SphereGeometry(15.1, 60, 60);

  var texture = new THREE.Texture();
  loadTexture(texture, 'app/clouds/clouds-map-1k.png');

  var material = new THREE.MeshPhongMaterial();
  material.map = texture;
  material.transparent = true;

  var mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'cloudsMesh';

  return mesh;
};
