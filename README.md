# 🎓 Front-End Learning Journey

> **Note**: This is a learning project focused on the **process** of building modern front-end applications. The journey and skills gained are more valuable than the final output.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![MUI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)](https://mui.com/)
[![Rspack](https://img.shields.io/badge/Rspack-8DD6F9?style=for-the-badge&logo=rspack&logoColor=black)](https://www.rspack.dev/)

## 🧭 Learning Philosophy

This project is first and foremost a **learning journey**. The focus is on understanding concepts, making mistakes, and growing as a developer. The code you'll find here represents my learning process, complete with experiments, refactoring, and continuous improvement.

### Why This Project Exists
- To deeply understand modern front-end development through hands-on practice
- To document the learning process, including challenges and solutions
- To build a reference implementation that evolves with my growing knowledge
- To experiment with different patterns and approaches in a real-world context

### What You'll Find Here
- Progress through various stages of front-end development learning
- Real-world problem solving and decision making
- Evolving architecture and code quality improvements
- Documentation of both successes and learning moments

## 🎯 Learning Objectives

Through this project, I aim to:

### Core Development Skills
- Build a deep understanding of React and TypeScript
- Learn to make informed architectural decisions
- Develop proficiency with modern tooling and workflows
- Practice clean code principles and patterns

### Process-Oriented Goals
- Document the learning journey and decision-making process
- Embrace and learn from mistakes
- Iteratively improve code quality and architecture
- Build a growth mindset through hands-on practice

### Technical Focus Areas
- React patterns and best practices
- TypeScript type system mastery
- State management strategies
- Performance optimization techniques
- Testing methodologies

## Technologies

### Core Technologies
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: JavaScript with syntax for types
- **Node.js**: JavaScript runtime for backend services
- **MobX**: ✅ Scalable state management library

### Architecture
- **Conventional Src Structure**: ✅ Standard project organization with src directory
- **Micro-frontends**: Architecture pattern for frontend applications (planned)

### Build & Deployment
- **Rspack**: ✅ Fast module bundler for JavaScript applications (migrated from Webpack)
- **GitHub Actions**: CI/CD workflow automation (planned)
- **Jest**: JavaScript testing framework (planned)

### UI Framework
- **Material UI**: ✅ React components implementing Google's Material Design
- **Emotion**: CSS-in-JS library for styling React components (planned)

## Learning Path (Actual Progress)

### Phase 1: Project Setup and Infrastructure
- [x] ✅ Set up basic React application with TypeScript
  - ✅ Configure tsconfig.json for React
  - ✅ Create initial application structure
  - ✅ Implement path aliases (@/ for src/ and @packages/ for packages/)
- [x] ✅ Migrate build system from Webpack to Rspack
  - ✅ Replace webpack configuration with Rspack's configuration
  - ✅ Update build scripts and dependencies
  - ✅ Verify existing functionality works with the new build system
- [x] ✅ Restructure project to use conventional src/ directory
  - ✅ Create src/pages, src/routes, src/stores directories
  - ✅ Move components to appropriate locations
  - ✅ Update import paths and configurations

### Phase 2: Core Features Implementation
- [x] ✅ Implement client-side routing with React Router
  - ✅ Set up router configuration
  - ✅ Create protected routes for authentication
  - ✅ Handle navigation between pages
- [x] ✅ Set up state management with MobX
  - ✅ Create observable stores (authStore, clicksStore)
  - ✅ Connect components with observer HOC
  - ✅ Implement actions and computed values
- [x] ✅ Implement basic authentication flow
  - ✅ Create login page
  - ✅ Handle login/logout state
  - ✅ Protect routes based on authentication status
- [x] ✅ Integrate Material UI components
  - ✅ Set up Material UI provider
  - ✅ Use basic components
  - ✅ Create a theme and design system

### Phase 3: Planned Next Steps
- [ ] Implement micro-frontend architecture
  - ✅ Create reusable components in the shared package
  - ⟲ Implement micro-frontend architecture (build-time approach)
  - [ ] Migrate to runtime approach
  - [ ] Implement module federation
- [ ] Enhance authentication features
  - [ ] Build proper login/registration forms
  - [ ] Set up JWT token management
  - [ ] Improve protected routes implementation
- [ ] Add testing infrastructure
  - [ ] Configure Jest and React Testing Library
  - [ ] Write unit tests for components
  - [ ] Set up integration testing
- [ ] Implement CI/CD pipeline
  - [ ] Add linting with ESLint
  - [ ] Configure GitHub Actions
  - [ ] Set up automatic builds and testing

### Phase 4: Feature Development (Planned)
- [ ] Create a dashboard module
  - [ ] Implement data visualization components
  - [ ] Create interactive dashboard widgets
  - [ ] Set up mock API data for development
- [ ] Enhance UI/UX
  - [ ] Customize theme using Emotion
  - [ ] Implement responsive design patterns
  - [ ] Create reusable styled components
- [ ] Set up code splitting and lazy loading
  - [ ] Use React.lazy and Suspense
  - [ ] Implement route-based code splitting
  - [ ] Optimize loading states

## Resources

### React & TypeScript
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react)
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)
- [TypeScript with React - Best Practices](https://www.sitepoint.com/react-with-typescript-best-practices/)

### Micro-frontends
- [Micro-frontends.org](https://micro-frontends.org/)
- [Martin Fowler's Article on Micro-frontends](https://martinfowler.com/articles/micro-frontends.html)
- [Single-SPA Documentation](https://single-spa.js.org/)

### Build Tools
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Rspack Documentation](https://www.rspack.dev/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Jest Documentation](https://jestjs.io/docs/getting-started)

### State Management & UI Libraries
- [MobX Documentation](https://mobx.js.org/README.html)
- [Material UI Documentation](https://mui.com/getting-started/installation/)
- [Emotion Documentation](https://emotion.sh/docs/introduction)

## Implementation Progress

| Area            | Status               | Notes                                                                 |
|-----------------|----------------------|-----------------------------------------------------------------------|
| Project Setup   | &#10004; Complete    | Set up TypeScript, restructured to src/ directory, migrated to Rspack |
| Core React      | &#10004; Complete    | Created basic components, implemented routing with react-router-dom   |
| State Management| &#10004; Complete    | Implemented MobX with stores for auth and clicks                      |
| Authentication  | &#10004; Partial     | Basic login/logout flow works, JWT implementation pending             |
| UI Framework    | &#10004; Complete    | Integrated Material UI with basic components and theme                |
| Micro-frontends | &#10226; In Progress | Initial packages directory created, implementation pending            |
| Testing         | &#9200;  Pending     | Jest and React Testing Library setup planned                          |
| CI/CD           | &#9200;  Pending     | GitHub Actions configuration planned                                  |
 
## Contribution
This is a personal learning project, but suggestions and feedback are always welcome!

## License
MIT
