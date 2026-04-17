let users = [];

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// Session setup
app.use(
  session({
    secret: "sessionTrackingApp",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }, // 10 minutes
  })
);

// ================= HOME =================
app.get("/", (req, res) => {
  res.redirect("/register");
});

// ================= REGISTER =================
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.send("All fields required");
  }

  const exists = users.find((u) => u.username === username);

  if (exists) {
    return res.send(`
      <html>
      <head><link rel="stylesheet" href="/style.css"></head>
      <body>
        <div class="card">
          <h3>User already exists</h3>
          <a href="/register">Try Again</a>
        </div>
      </body>
      </html>
    `);
  }

  // Save user
  users.push({ username, password });

  // Create session
  req.session.user = username;
  req.session.loginTime = new Date().toLocaleString();
  req.session.activities = [];
  req.session.activities.push(
    "Registered at " + new Date().toLocaleTimeString()
  );

  res.redirect("/dashboard?registered=1");
});

// ================= LOGIN =================
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.send(`
      <html>
      <head><link rel="stylesheet" href="/style.css"></head>
      <body>
        <h3 style="color:red;">Invalid Credentials</h3>
        <a href="/login">Try Again</a><br>
        <a href="/register">Register</a>
      </body>
      </html>
    `);
  }

  req.session.user = username;
  req.session.activities = [];
  req.session.loginTime = new Date().toLocaleString();
  req.session.activities.push(
    "Logged in at " + new Date().toLocaleTimeString()
  );

  res.redirect("/dashboard?login=1");
});

// ================= DASHBOARD =================
app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  req.session.activities.push(
    "Visited Dashboard at " + new Date().toLocaleTimeString()
  );

  const fs = require("fs");

  let html = fs.readFileSync(
    path.join(__dirname, "views/dashboard.html"),
    "utf-8"
  );

  html = html.replace("{{username}}", req.session.user);
  html = html.replace(
    "{{activityCount}}",
    req.session.activities.length
  );
  html = html.replace("{{loginTime}}", req.session.loginTime);

  res.send(html);
});

// ================= ACTIVITY =================
app.get("/activity", (req, res) => {
  if (!req.session.user) return res.redirect("/login");

  if (!req.session.activities) req.session.activities = [];

  let list = req.session.activities
    .map((a) => `<li>${a}</li>`)
    .join("");

  const fs = require("fs");

  let html = fs.readFileSync(
    path.join(__dirname, "views/activity.html"),
    "utf-8"
  );

  html = html.replace("{{activities}}", list);

  req.session.activities.push(
    "Viewed Activity Page at " + new Date().toLocaleTimeString()
  );

  res.send(html);
});

// ================= LOGOUT =================
app.get("/logout", (req, res) => {
  res.sendFile(path.join(__dirname, "views/logout.html"));
});

app.get("/logout-final", (req, res) => {
  req.session.destroy(() => {
    res.send(`
      <html>
      <head><link rel="stylesheet" href="/style.css"></head>
      <body>
        <h3 style="color:green;">Logged out successfully</h3>
        <script>
          setTimeout(() => {
            window.location.href = "/login";
          }, 2000);
        </script>
      </body>
      </html>
    `);
  });
});

// ================= COOKIE =================
app.get("/cookie-test", (req, res) => {
  const fs = require("fs");

  const lastVisit = req.cookies.lastVisit;
  const currentTime = new Date().toLocaleString();

  res.cookie("lastVisit", currentTime);

  let html = fs.readFileSync(
    path.join(__dirname, "views/cookie.html"),
    "utf-8"
  );

  html = html.replace("{{lastVisit}}", lastVisit || "First Visit");
  html = html.replace("{{currentTime}}", currentTime);

  if (req.session.activities) {
    req.session.activities.push(
      "Visited Cookie Page at " + new Date().toLocaleTimeString()
    );
  }

  res.send(html);
});

// ================= SERVER =================
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
