let {Component, View, SetModule, Inject, MeteorReactive} = angular2now;

SetModule('fussball');

@Component({
  selector: 'match',
  properties: [
    'current'
  ]
})
@View({
  templateUrl: 'client/match/match.html'
})
@MeteorReactive
class match {
  current: string;

  constructor() {
    this.current = '';

    this.helpers({
    });
  }

  addGoal(goal_id) {

    console.log('in game ' + this.current + ' add goal for ' + goal_id)
  }

  finish(win_id) {
    console.log(this.current)
  }
}
