export class userPerformance {
  constructor(jsonData) {
    this.userId = jsonData.data.userId
    this.kind = jsonData.data.kind
    this.data = jsonData.data.data.map((datas) => new Datas(datas))
  }
}

export class Datas {
  constructor(datas) {
    this.value = datas.value
    this.kind = datas.kind
  }
}
