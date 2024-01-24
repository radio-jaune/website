

function postMessageToDiscord(message) {
    message = message || 'Hello World!';
  
    var discordUrl = 'https://discordapp.com/api/webhooks/labnol/123';
    var payload = JSON.stringify({ content: message });
  
    var params = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
      payload: payload,
      muteHttpExceptions: true,
    };
  
    var response = UrlFetchApp.fetch(discordUrl, params);
  
    Logger.log(response.getContentText());
  }




  fetch('https://quotes.toscrape.com/random')
    .then((response) => response.text())
    .then((body) => {
        console.log(body);
    }); 