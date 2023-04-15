function showProps(obj, objKeyName) {
  return objKeyName in obj;
}

const magicwand = {
  model: "black-magic",
  vein: "dragon root",
  element: "Terra",
  owner: "you",
};

console.log(showProps(magicwand, "owner"));
console.log(showProps(magicwand, "onwer"));
console.log(showProps(magicwand, "element"));
console.log(showProps(magicwand, "mdl"));
