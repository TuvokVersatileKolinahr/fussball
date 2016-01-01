let {Component, View, SetModule, Inject, MeteorReactive} = angular2now;

SetModule('fussball');

@Component({selector: 'test'})
@View({templateUrl: () => {
  return 'client/test/test.html';
}})
@MeteorReactive
class test {
  constructor() {
    this.helpers({
      isLoggedIn: this.isLoggedIn,
      currentUser: this.currentUser
    });
  }

  currentUser() {
    return Meteor.user();
  }

  isLoggedIn() {
    return Meteor.userId() !== null;
  }

  logout() {
    Accounts.logout();
  }
}