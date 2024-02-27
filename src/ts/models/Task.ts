export class Task {
  taskStatus: boolean;
  constructor(
    public title: string,
    public date: string,
    public description: string
  ) {
    this.taskStatus = false;
    this.title = title;
    this.date = date;
    this.description = description;
  }
}
