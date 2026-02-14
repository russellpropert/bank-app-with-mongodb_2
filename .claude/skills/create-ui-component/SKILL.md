---
name: create-ui-component
description: Creates a new user interface component.
argument-hint: component-name | component-description
---

Create a new React user interface component using this description: $1. Use $0 as the name of the component.
- Put the component in @./public/components/ if it's a page. Put it in @./public/components/subComponents if it's a component that works within a page.

- Only implement the component in the rest of the project if told to do so. If told to do so, give me a list of places you think it would be useful and have me confirm those locations before proceeding with the edits. Give me an opportunity to change or provide other locations for the component.

- Use rem for all sizes. Do not use hard values like px.

- Style the component within @./public/styles.css.

- Use the variables in @./public/styles.css for light and dark themes.

- Use the Task tool with subagent_type "ui-ux-reviewer" for feedback. 
  - Ask me if the application is running if you are not sure. I'll start the application and the database. Don't start it yourself. Do not invoke the agent until we have the frontend, backend, and MongoDB database properly running. Test the database with the /test-bank-app-db command if you need confirmation.
  - The agent is read only. It cannot make changes. Make changes to your edits based on the agent's feedback. Re-run ui-ux-reviewer to verify each change.
  - Iterate as necessary up to five times or until the ui-ux-reviewer agent is satisfied with the edits. If you don't reach an agreement by the fifth iteration, present the remaining decisions to me with the agent's recommendations.
