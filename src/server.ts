import app from "./app";

const server = app.listen(app.get("port"), () => {
  // tslint:disable-next-line
  console.log(
    "Application is running on port %s, in mode %s",
    app.get("port", app.get("env"))
  );
});
export default server;
