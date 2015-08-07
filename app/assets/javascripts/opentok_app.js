// get the APIKEY and TOKEN
$(document).ready(function() {
    getApiAndToken();
});


function getApiAndToken() {
    // make an Ajax Request to get the apiKey, sessionId and token from the server
    $.get(SAMPLE_SERVER_BASE_URL + '/home/get_session_token', function(data) {
        console.log(data['token']);
        apiKey = data['apiKey'];
        sessionId = data['sessionId'];
        token = data['token'];

        initializeSession();
    });

}


function initializeSession() {
    // Initialize Session Object
    var session = OT.initSession(apiKey, sessionId);

    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
        });
    });

    // Handler for sessionDisconnected event
    session.on('sessionDisconnected', function(event) {
        console.log('You were disconnected from the session.', event.reason);
    });

    // Connect to the Session
    session.connect(token, function(error) {
        // If the connection is successful, initialize a publisher and publish to the session
        if (!error) {
            var publisher = OT.initPublisher('publisher', {
                insertMode: 'append',
                width: '100%',
                height: '100%'
            });

            session.publish(publisher);

        } else {
            console.log('There was an error connecting to the session:', error.code, error.message);
        }

    });

}
