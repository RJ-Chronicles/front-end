# GitHub Actions Workflow Files: Explanation & Use Cases

Below is an explanation and use case for each of the four typical YAML workflow files in the `.github/workflows` folder:

---

## 1. ci.yml

**Purpose:**  
Runs Continuous Integration (CI) checks on every push or pull request to the `main` branch.

**What it does:**  
- Checks out your code.
- Sets up Node.js (version 22).
- Installs dependencies.
- Runs linting, build, and tests.

**Use Case:**  
Ensures code quality and that your app builds and passes tests before merging or deploying.

---

## 2. deploy.yml

**Purpose:**  
Automates deployment of your built React app to an AWS S3 bucket when changes are pushed to `main`.

**What it does:**  
- Checks out code and sets up Node.js.
- Installs dependencies and builds the app.
- Syncs the build output (`dist` folder) to your S3 bucket using AWS credentials stored as GitHub secrets.

**Use Case:**  
Provides automated, repeatable deployment to your production (or staging) environment.

---

## 3. codeql.yml (if present)

**Purpose:**  
Runs GitHub’s CodeQL static analysis to detect security vulnerabilities and code quality issues.

**What it does:**  
- Checks out code.
- Initializes and runs CodeQL analysis for JavaScript/TypeScript.

**Use Case:**  
Adds an extra layer of security and code analysis to catch vulnerabilities early.

---

## 4. release.yml (if present)

**Purpose:**  
Automates the release process when you push a new version tag (e.g., `v1.0.0`).

**What it does:**  
- Checks out code and sets up Node.js.
- Installs dependencies and builds the app.
- Creates a GitHub Release and uploads build artifacts (e.g., files from `dist/`).

**Use Case:**  
Streamlines versioned releases and makes it easy to distribute or roll back builds.

---

## Summary Table

| File         | Purpose/Trigger                        | Main Actions                                      | Use Case                                  |
|--------------|----------------------------------------|---------------------------------------------------|-------------------------------------------|
| ci.yml       | On push/PR to main                     | Lint, build, test                                 | Code quality & CI                         |
| deploy.yml   | On push to main                        | Build & deploy to S3                              | Automated deployment                      |
| codeql.yml   | On push/PR to main                     | Static code analysis for security                 | Security & code analysis                  |
| release.yml  | On tag push (e.g., v1.0.0)             | Build & create GitHub Release