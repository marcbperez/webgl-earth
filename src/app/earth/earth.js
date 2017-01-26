var earth = function() {
  var geometry = new THREE.SphereGeometry(15, 60, 60);

  var texture = new THREE.Texture();
  loadTexture(texture, 'app/earth/earth-map-2k.jpg');

  var normalTexture = new THREE.Texture();
  loadTexture(normalTexture, 'app/earth/earth-normal-2k.jpg');

  var specularTexture = new THREE.Texture();
  loadTexture(specularTexture, 'app/earth/earth-specular-2k.jpg');

  var material = new THREE.MeshPhongMaterial();
  material.map = texture;
  material.normalMap = normalTexture;
  material.normalScale = new THREE.Vector2(0.7, 0.7);
  material.specularMap = specularTexture;
  material.specular = new THREE.Color(0x262626);

  var mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'earthMesh';

  return mesh;
};
