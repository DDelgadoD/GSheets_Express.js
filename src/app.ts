import express, { Express } from "express";
import { Compute } from "google-auth-library/build/src/auth/computeclient";
import { JSONClient } from "google-auth-library/build/src/auth/googleauth";
import { google, sheets_v4 } from "googleapis";

async function getAuthToken(): Promise<JSONClient | Compute> {
  const auth = new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    keyFilename: "./auth.json",
  });
  return auth.getClient();
}

async function getMyValues(
  spreadsheetId: string,
  range: string
): Promise<sheets_v4.Schema$ValueRange> {
  try {
    const auth = await getAuthToken();
    const response = await google.sheets("v4").spreadsheets.values.get({
      spreadsheetId,
      auth,
      range,
    });

    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      e.message = `Unexpected error determining execution: ${e.message}`;
    }

    throw e;
  }
}

async function postMyValues(
  spreadsheetId: string,
  range: string,
  req: any[]
): Promise<sheets_v4.Schema$UpdateValuesResponse> {
  try {
    const auth = await getAuthToken();
    const request = {
      spreadsheetId,
      range,
      auth,
      valueInputOption: "RAW",
      includeValuesInResponse: true,
      requestBody: {
        range: range,
        values: req,
      },
    };

    const response = await google
      .sheets("v4")
      .spreadsheets.values.update(request);

    return response.data;
  } catch (e) {
    if (e instanceof Error) {
      e.message = `Unexpected error determining execution: ${e.message}`;
    }

    throw e;
  }
}

const spreadsheetId: string | undefined =
  "13lXhzTe6B5tzlqYEentKuw3qCiIye78_6Sae-No1vZ4";
const rangeGet: string = "Sheet1";
const BitcoinRange: string = "B1";
const app: Express = express();

if (typeof require !== "undefined" && require.main === module) {
  const port: number = 4000;

  app.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/google-sheet", async function (_req: any, res: any) {
  res.send(await getMyValues(spreadsheetId, rangeGet));
  console.log(`[server]: GET /google-sheet`);
});

app.post("/bitcoin", async function (req: any, res: any) {
  console.log(`[server]: POST /bitcoin with value: ${req.body.Bitcoin}`);
  res.send(
    await postMyValues(spreadsheetId, BitcoinRange, [[req.body.Bitcoin]])
  );
});

export default app;
