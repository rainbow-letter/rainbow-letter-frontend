/* eslint-disable @typescript-eslint/no-var-requires */
const { google } = require('googleapis');
const fs = require('fs-extra');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const fetchShowcaseLetters = async () => {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, '../keys/google-service-account.json'), // 경로를 다운로드한 JSON 키 파일로 변경
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const spreadsheetId = process.env.REACT_APP_GOOGLE_SPREADSHEET_ID;
  const range = 'Sheet1!A1:D'; // 범위를 필요에 따라 변경

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    const filteredRow = rows.filter((item) => item.length >= 4);
    if (filteredRow.length) {
      const processedData = filteredRow.map((row) => ({
        id: row[0],
        type: row[1],
        petName: row[2],
        content: row[3],
      }));

      const dataPath = path.join(__dirname, '../public/showcaseLetters.json'); // 파일을 public 폴더에 저장
      await fs.outputJson(dataPath, processedData);

      console.log('📥 Data fetched and saved successfully');
    } else {
      console.log('No data found');
    }
  } catch (error) {
    console.error('📥 Error fetching data:', error.message);
  }
};

fetchShowcaseLetters();
