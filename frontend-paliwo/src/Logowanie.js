export default function Logowanie() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1> User Login Page </h1>
          <form action="http://localhost:8080/login" method="post">
            <div class="form-group">
              <label for="username"> Username </label> :
              <input
                type="text"
                class="form-control"
                id="username"
                name="username"
                placeholder="Enter Email ID"
                autofocus="autofocus"
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>:{" "}
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder="Enter Password"
              />
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                  <input
                    type="submit"
                    name="login-submit"
                    id="login-submit"
                    class="form-control btn btn-primary"
                    value="Log In"
                  />
                </div>
              </div>
            </div>
          </form>
          <div class="form-group">
            <span>
              New user? <a href="/registration">Register here</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
