class TokenService {
  public setAccessToken(accessToken: string) {
    localStorage.setItem("accessToken", accessToken);
  }

  public deleteAccessToken() {
    localStorage.removeItem("accessToken");
  }

  public getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  public setAccessId(accessToken: string) {
    localStorage.setItem("access_id", accessToken);
  }

  public getAccessId() {
    return localStorage.getItem("access_id");
  }
}

export default new TokenService();
