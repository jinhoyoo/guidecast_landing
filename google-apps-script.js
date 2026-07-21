/**
 * Google Apps Script for Guidecast Early Bird Form
 *
 * Setup Instructions:
 * 1. Create a new Google Spreadsheet
 * 2. Add headers in first row: Name | Email | Phone | Company | Tour Method | Payment Willingness | Feedback | Privacy Consent | Language | Timestamp
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code
 * 5. Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL
 * 7. Add the URL to your main.js as GOOGLE_SCRIPT_URL
 *
 * IMPORTANT — updating an EXISTING deployment:
 * The live /exec URL runs the code of the DEPLOYED VERSION, not what you
 * last saved in the editor. After editing:
 *   Deploy > Manage deployments > pencil icon on the active deployment >
 *   Version: "New version" > Deploy.
 * (Do NOT use "New deployment" — that creates a different URL and the
 * website would keep calling the old one.)
 *
 * To verify which version is live: open the /exec URL in a browser —
 * doGet below returns the SCRIPT_VERSION marker.
 */

const SCRIPT_VERSION = 'v3-plaintext-phone';

// Opening the /exec URL in a browser hits doGet — use it to confirm the
// deployed version actually matches the code you just edited.
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, version: SCRIPT_VERSION }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Prepare the row data
    const rowData = [
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.tourMethod || '',
      data.paymentWillingness || '',
      data.feedback || '',
      data.privacy || 'No',
      data.language || 'ko',
      data.timestamp || new Date().toISOString()
    ];

    const targetRow = sheet.getLastRow() + 1;
    const range = sheet.getRange(targetRow, 1, 1, rowData.length);

    // Sheets auto-parses any cell value starting with =, +, -, or @ as a
    // formula (e.g. phone numbers like "+82 010-1234-5678" render as
    // #ERROR!). Setting the number format to plain text ("@") BEFORE
    // writing disables that auto-detection, so every value is stored
    // exactly as sent — this also closes off the classic CSV/spreadsheet
    // formula-injection vector for free-text fields.
    range.setNumberFormat('@');
    range.setValues([rowData]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        version: SCRIPT_VERSION,
        row: targetRow
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testDoPost() {
  const testEvent = {
    postData: {
      contents: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        phone: '(+82) 010-1234-5678',
        company: 'Test Company',
        tourMethod: 'dedicated_equipment',
        paymentWillingness: 'willing',
        feedback: 'This is a test feedback',
        privacy: 'Yes',
        language: 'ko',
        timestamp: new Date().toISOString()
      })
    }
  };

  const result = doPost(testEvent);
  Logger.log(result.getContent());
}
