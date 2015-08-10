// //Declare variable
// var archiveID;

// // get the APIKEY and TOKEN
// $(document).ready(function() {
//     $('#stop').hide();
//     archiveID = null;
//     getApiAndToken();
// });


// function getApiAndToken() {
//     // make an Ajax Request to get the apiKey, sessionId and token from the server
//     $.get(SAMPLE_SERVER_BASE_URL + '/home/get_session_token', function(data) {
//         console.log(data['token']);
//         apiKey = data['apiKey'];
//         sessionId = data['sessionId'];
//         token = data['token'];

//         initializeSession();
//     });

// }


// function initializeSession() {
//     // Initialize Session Object
//     var session = OT.initSession(apiKey, sessionId);

//     // Subscribe to a newly created stream
//     session.on('streamCreated', function(event) {
//         session.subscribe(event.stream, 'subscriber', {
//             insertMode: 'append',
//             width: '100%',
//             height: '100%'
//         });
//     });
//     // Handler for sessionDisconnected event
//     session.on('sessionDisconnected', function(event) {
//         console.log('You were disconnected from the session.', event.reason);
//     });

//     // Connect to the Session
//     session.connect(token, function(error) {
//         // If the connection is successful, initialize a publisher and publish to the session
//         if (!error) {
//             var publisher = OT.initPublisher('publisher', {
//                 insertMode: 'append',
//                 width: '100%',
//                 height: '100%',
//                 name: "Kien",
//                 style: {nameDisplayMode: 'on'}
//             });

//             session.publish(publisher);

//         } else {
//             console.log('There was an error connecting to the session:', error.code, error.message);
//         }

//     });

//     // Handler for ArchiveStarted Event
//     session.on('archiveStarted', function(event){
//         archiveID = event.id;
//     })


// }
// //Function start record
// function startArchive() {
//     // Make ajax to request url start recording
//     $.post(SAMPLE_SERVER_BASE_URL + "/archives/start/" + sessionId);
//     $("#start").hide();
//     $("#stop").show();

// }
// //Function stop record
// function stopArchive() {
//     console.log(archiveID);
//     $.post(SAMPLE_SERVER_BASE_URL + "/archives/stop/" + archiveID);
//     $("#start").show();
//     $("#stop").hide();
//     $("#view").prop('disabled',false);
// }

// //View record
// function viewArchive() {
//     window.open(SAMPLE_SERVER_BASE_URL + "/archives/view/" + archiveID);
//     $("#view").prop('disabled',true);
// }
