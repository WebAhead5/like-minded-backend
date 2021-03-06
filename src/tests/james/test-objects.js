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

exports.getAllChatsWith = [{ profile: { id: 2, userid: 2, firstname: 'Moris', lastname: 'Rafoul', gender: 'male', status: 'Single', bio: 'Teaching web-dev', job: 'Web-Developer', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'] }, lastMessage: { id: 2, senderUserId: 1, recipUserId: 2, message: 'How\'s tricks?', timeAndDate: new Date('Fri May 01 2020 13:08:29 GMT+0300 (Israel Daylight Time)') } }]


exports.addMessages = { message: "message add successfuly" }

exports.deleteMessage = { message: "message deleted successfuly" }

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







//////////////////////////// QUIZZES //////////////////////////////////

exports.getQuizzesData = '[{"quizTitle":"MBTI-short","completionLevel":1,"isCompleted":true,"questions":[{"id":1,"question":"As a child, did alone time bore you or did it allow for self-reflection?","userAnswer":1,"answers":[{"title":"SELF-REFLECTION","value":-1},{"title":"BORED-ALONE","value":1}]},{"id":2,"question":"Is silence and solitude something you\'re comfortable with, or is it awkward and causes you to overthink?","userAnswer":1,"answers":[{"title":"SILENCE IS FINE","value":-1},{"title":"SILENCE IS AWKWARD","value":1}]},{"id":3,"question":"As a child, did you impulsively say anything that came to mind, or did you normally think before speaking?","userAnswer":1,"answers":[{"title":"THINK THEN SPEAK","value":-1},{"title":"SPEAK THEN THINK","value":1}]},{"id":4,"question":"As a child, were you more of a realist with a strong connection to reality, or did you lose yourself in day dreams and imagination?","userAnswer":1,"answers":[{"title":"REALITY","value":-1},{"title":"IMAGINATION","value":1}]},{"id":5,"question":"You usually enquire more about the...","userAnswer":1,"answers":[{"title":"\\"WHO\\", \\"WHAT\\", \\"WHEN\\"","value":-1},{"title":"WHY","value":1}]},{"id":6,"question":"Are you more focused with what exists today, or do you like to think about the future and its infinite possibilities?","userAnswer":1,"answers":[{"title":"TODAY","value":-1},{"title":"FUTURE","value":1}]},{"id":7,"question":"If you have to put plans on hold, do you commit to sticking with them, or do you move on to the next thing?","userAnswer":-1,"answers":[{"title":"MOVE ON","value":-1},{"title":"STICK WITH IT","value":1}]},{"id":8,"question":"Are you more of an...","userAnswer":-1,"answers":[{"title":"IMPROVISER","value":-1},{"title":"ORGANISER","value":1}]},{"id":9,"question":"Growing up, did you finish your homework and chores first, or did you have fun before getting to task?","userAnswer":-1,"answers":[{"title":"PLAY BEFORE WORK","value":-1},{"title":"WORK BEFORE PLAY","value":1}]},{"id":10,"question":"As a child, were mistakes positive learning experiences or negative experiences that made you completely re-evaluate your self-worth","userAnswer":1,"answers":[{"title":"LEARNING EXPERIENCE","value":-1},{"title":"RE-EVALUATE EVERYTHING","value":1}]},{"id":11,"question":"Did you embrace your emotional side while growing up or did you emotions make you uncomfortable?","userAnswer":1,"answers":[{"title":"\\"VALUE\\" EMOTIONS","value":-1},{"title":"UNCOMFORTABLE W/ EMOTIONS","value":1}]},{"id":12,"question":"You prefer fixing...","userAnswer":1,"answers":[{"title":"PEOPLE","value":-1},{"title":"PROBLEMS","value":1}]}]}]'

exports.getQuizResult = { question: 'MBTI-short', mbtiType: 'ENTP', about: 'No one loves the process of mental sparring more than the Debater personality type, as it gives them a chance to exercise their effortlessly quick wit, broad accumulated knowledge base, and capacity for connecting disparate ideas to prove their points. Debaters are the ultimate devil’s advocate, thriving on the process of shredding arguments and beliefs and letting the ribbons drift in the wind for all to see. They don’t always do this because they are trying to achieve some deeper purpose or strategic goal, though. Sometimes it’s for the simple reason that it’s fun.', relationshipDescrip1: 'If there’s one thing Debaters are good at, it’s coming up with a never-ending stream of innovations and ideas to keep things moving forward, and this is evident in their romantic relationships as well. For people with the Debater personality type growth is key, and even before they’ve found a dating partner, they imagine all the ways that they can experience new things together, to grow in tandem. This can be an overwhelming process if their partner doesn’t match up, but when Debaters find someone who shares their love of intellectual exploration, watch out.', relationshipDescrip2: 'From the earliest dates, Debaters test their partners’ limits for this kind of potential, pushing boundaries and traditions, looking for open-mindedness and spontaneity. Dating Debater personalities is hardly a boring experience, and they make use of their enthusiasm and creativity by delighting and surprising their partners with new ideas and experiences.', moreInfoLink: 'https://www.16personalities.com/entp-personality' }




exports.getPotentialMatches = [
  {
    profile: { id: 14, userid: 6, firstname: 'Mehyar', lastname: 'Davis', gender: 'male', status: 'Single', bio: 'ARTIST ', job: 'COUCH DRIVER', livingin: 'Haifa', primaryphoto: 'https://avatars0.githubusercontent.com/u/57487623?s=60&v=4', subphotos: ['https://avatars2.githubusercontent.com/u/51966598?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4', 'https://avatars0.githubusercontent.com/u/10247681?s=60&v=4'], userId1: 6, userId2: 1, 'user1-towards-user2': 'none', 'user2-towards-user1': 'none' },
    quizzesResults: { candidatePersonalityType: 'ISFJ', compatabilityScore: '20-40%' }
  }]