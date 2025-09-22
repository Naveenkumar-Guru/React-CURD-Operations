let GM = "Gm";
let GN = "GN";
let GmAction = () => {
  console.log("INSIDE GM ACTION");
  return { type: GM };
};

let GnAction = () => {
  console.log("INSIDE GN ");
  return { type: GN };
};

export { GmAction, GnAction, GM, GN };
