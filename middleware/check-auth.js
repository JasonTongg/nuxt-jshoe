export default function (context) {
  console.log("jalan");
  context.store.dispatch("initAuth", context.req);
}
