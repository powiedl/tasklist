class TaskClass {
  constructor(name, description, deadline) {
    this.name = name;
    this.description = description;
    this.deadline = deadline;
    this.progress = -1;
    this.steps = [];
  }

  addStep(desc) {
    this.steps.push(desc);
  }

  get steps() {
    return this.steps;
  }

  set progress(value) {
    if (value <= this.steps.length) {
      this.progress = value;
    }
  }

  get progress() {
    return this.progress;
  }
}

module.exports = TaskClass;
