class User {
  constructor(created, providers, signedIn, uId) {
    this.created = created;
    this.providers = providers;
    this.signedIn = signedIn;
    this.uId = uId;
  }
}

export default User;