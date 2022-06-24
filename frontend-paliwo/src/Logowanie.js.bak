export default function Logowanie() {
  return (
    <div>
      <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span class="sr-only">Toggle navigation</span>{" "}
              <span class="icon-bar"></span> <span class="icon-bar"></span>{" "}
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#" th:href="@{/}">
              Rejestracja i Logowanie
            </a>
          </div>
        </div>
      </nav>

      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <h1> Strona Logowania </h1>
            <form th:action="@{/login}" method="post">
              <div th:if="${param.error}">
                <div class="alert alert-danger">
                  Niepoprawny login bądź hasło.
                </div>
              </div>

              <div th:if="${param.logout}">
                <div class="alert alert-info">Zostałeś wylogowany.</div>
              </div>

              <div class="form-group">
                <label for="username"> Login </label> :
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="Wpisz login"
                  autofocus="autofocus"
                />
              </div>

              <div class="form-group">
                <label for="password">Hasło</label>:{" "}
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  placeholder="Wpisz hasło"
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
                Nowy użytkownik? <a href="/registration">Zarejestruj się</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
