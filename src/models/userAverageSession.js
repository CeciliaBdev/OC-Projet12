export class userAverageSession {
  constructor(jsonData) {
    this.userId = jsonData.data.userId
    this.sessions = jsonData.data.sessions.map(
      (session) => new Sessions(session)
    )
  }
}

export class Sessions {
  constructor(session) {
    this.day = session.day
    this.sessionLength = session.sessionLength
  }
}
