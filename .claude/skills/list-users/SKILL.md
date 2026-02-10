---
name: list-users
description: Query and list all users.
argument-hint: balance-above | balance-below
allowed-tools: Bash(curl*)
---

Create a MongoDB query that will retrieve a list of users given the $ARGUMENTS. Create a query for for all users if no $ARGUMENTS are provided. If arguments are specified, create the query to retrieve users with balances greater that $ARGUMENTS[0] and/or less than $ARGUMENTS[1]. The output of the query should just be name, email, and balance. Use this projects API to retrieve the users and show me the expected output of this query. Provide the MongoDB query at the end.