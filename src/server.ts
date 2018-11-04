import app from "./app";

const server = app.listen(app.get("port"), () => {
  // tslint:disable-next-line
  console.log("Application is running on port %s", app.get("port"));
});
export default server;
