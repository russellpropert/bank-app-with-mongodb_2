---
description: Test bank app database operations (defaults are deposit=100, withdraw=50)
argument-hint: name | email | password | deposit-amount | withdraw-amount
---

Create an account with name $0, email $1, and password $2. Log out and log in again. Confirm the account is there in the All Data page. Deposit ${3:-100} and withdraw ${4:-50}. Confirm in the Balance page you have ${3:-100} - ${4:-50}.
