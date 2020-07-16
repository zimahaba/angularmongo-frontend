export class Entity {

  id: string;
  oneString: string;
  oneInteger: Number;
  oneLong: Number;
  oneDecimal: Number;
  oneDate: Date;
  oneTime: Date;

  constructor(init?: Partial<Entity>) {
    Object.assign(this, init);
}
}
