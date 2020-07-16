export class Entity {
  oneString: string;
  oneInteger: Number;
  oneLong: Number;
  oneDecimal: Number;
  oneDate: Date;
  oneTime: Date;

  constructor(
    oneString: string,
    oneInteger: Number,
    oneLong: Number,
    oneDecimal: Number,
    oneDate: Date,
    oneTime: Date
  ) {
    this.oneString = oneString;
    this.oneInteger = oneInteger;
    this.oneLong = oneLong;
    this.oneDecimal = oneDecimal;
    this.oneDate = oneDate;
    this.oneTime = oneTime;
  }
}
