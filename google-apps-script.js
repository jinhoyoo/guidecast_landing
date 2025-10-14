/**
 * Google Apps Script for Guidecast Early Bird Form
 *
 * Setup Instructions:
 * 1. Create a new Google Spreadsheet
 * 2. Add headers in first row: Name | Email | Phone | Company | Feedback | Privacy Consent | Language | Timestamp
 * 3. Go to Extensions > Apps Script
 * 4. Paste this code
 * 5. Deploy > New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the deployment URL
 * 7. Add the URL to your main.js as GOOGLE_SCRIPT_URL
 */

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
      data.feedback || '',
      data.privacy || 'No',
      data.language || 'ko',
      data.timestamp || new Date().toISOString()
    ];

    // Append the data to the sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Data saved successfully',
        row: sheet.getLastRow()
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
        phone: '010-1234-5678',
        company: 'Test Company',
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
