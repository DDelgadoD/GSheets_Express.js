import app from "./app";

const port: number = 4000;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
