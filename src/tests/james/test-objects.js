//////////////////////////////////// USERPROFILE //////////////////////////////////////////////////////////////////////////////


exports.userProfile = { id: 1, userid: 1, firstname: 'James', lastname: 'Daniels', gender: 'male', status: 'Single', bio: 'Learning web-dev in the blazing Haifa heat.', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4'] }


//////////////////////////////////// MESSAGES //////////////////////////////////////////////////////////////////////////////


exports.message1 = {
  id: 1,
  senderUserId: 1,
  recipUserId: 2,
  message: 'Hey there',
  timeAndDate: "2020-05-01T12:07:35.000Z"
}

exports.getChat = 
// [ { id: 2, senderUserId: 1, recipUserId: 2, message: 'How\'s tricks?', timeAndDate: new Date(new Date('Fri May 01 2020 13:08:29 GMT+0300 (Israel Daylight Time)').setHours(0,0,0,0)) }, { id: 4, senderUserId: 2, recipUserId: 1, message: 'Howdee', timeAndDate: new Date(new Date('Fri May 01 2020 13:08:15 GMT+0300 (Israel Daylight Time)').setHours(0,0,0,0)) }, { id: 1, senderUserId: 1, recipUserId: 2, message: 'Hey there', timeAndDate: new Date(new Date(' Fri May 01 2020 13:07:35 GMT+0300 (Israel Daylight Time)').setHours(0,0,0,0)) } ]
[
  {
    id: 2,
    senderUserId: 1,
    recipUserId: 2,
    message: "How's tricks?",
    timeAndDate: "2020-05-01T10:08:29.107Z"
  },
  {
    id: 4,
    senderUserId: 2,
    recipUserId: 1,
    message: 'Howdee',
    timeAndDate: "2020-05-01T10:08:15.375Z"
  },
  {
    id: 1,
    senderUserId: 1,
    recipUserId: 2,
    message: 'Hey there',
    timeAndDate: "2020-05-01T10:07:35.000Z"
  }
]

exports.getAllChatsWith =  [ { profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: [ 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4' ] }, lastMessage:  { id: 2, senderUserId: 1, recipUserId: 2, message: 'How\'s tricks?', timeAndDate: new Date('Fri May 01 2020 13:08:29 GMT+0300 (Israel Daylight Time)')} } ]


exports.addMessages = {message: "message add successfuly"}

exports.deleteMessage = {message: "message deleted successfuly"}

//////////////////////////////////// RELATIONSHIPS //////////////////////////////////////////////////////////////////////////////


exports.userRelationship1and2 = { id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' }

exports.relationshipsWhereUserStatus = { id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' }, { id: 2, userId1: 1, userId2: 3, 'user1-towards-user2': 'like', 'user2-towards-user1': 'none' }

exports.relationshipBetweenUserAndCandidate = [{ id: 1, userId1: 1, userId2: 2, 'user1-towards-user2': 'like', 'user2-towards-user1': 'like' }]

exports.getAllMatchesWith = [
  {
    profile: {
      id: 2,
      userid: 2,
      firstname: 'Moris',
      lastname: 'Rafoul',
      gender: 'male',
      status: 'Single',
      bio: 'Teaching web-dev',
      job: 'Web-Developer',
      livingin: 'Haifa',
      primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4',
      subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4']
    }
  }
];

exports.getRelationshipWhereUserSelected = { profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] } };

exports.getRelationshipWhereCandidateSelected = { profile: { id: 1, userid: 1, firstname: 'James', lastname: 'Daniels', gender: 'male', status: 'Single', bio: 'Learning web-dev in the blazing Haifa heat.', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars2.githubusercontent.com/u/51966598?s=60&v=4'] } }


exports.getRelationshipWhereUserSelected1 = { status: 200, data: [{ profile: { id: 3, userid: 3, firstname: 'hadi', lastname: 'Khalil', gender: 'male', status: 'Single', bio: 'ARTIST ', job: 'COUCH DRIVER', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] } }, { profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] } }], ok: true };