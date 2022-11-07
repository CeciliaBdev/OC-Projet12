export class userActivity {
  constructor(jsonData) {
    this.userId = jsonData.data.userId
    this.sessions = jsonData.data.sessions.map(
      (session) => new Activities(session)
    )
  }
}

export class Activities {
  constructor(session) {
    this.day = session.day
    this.kilogram = session.kilogram
    this.calories = session.calories
  }
}
