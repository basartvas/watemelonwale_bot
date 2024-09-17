/*global fetch*/

export const handler = async (event) => {

    // Bot's API token
    const token = '7416634871:AAFOW_Z0BgVoq2JJPiN-jtbEi987WAnOnFY';

    // Chat ID or your own Telegram user ID
    const chatId = '258432167';

    // Message you want to send
    const message = 'Hello, this is a message from my bot!';
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = {
        chat_id: chatId,
        text: message
    };

    let response;
    try {
        // Send a request to the Telegram API
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',},
            body: JSON.stringify(params),
        });

        const data = res.json();
        response = {
            statusCode: 200,
            body: data,
        };
    } catch (e) {
        response = {
            statusCode: 500,
            body: e.message,
        };
    }

    return response;
};