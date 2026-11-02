# dsh-demo

A tiny zero-dependency demo repository for [dsh-superagent](../dsh-superagent-prototype-main): a proactive coding agent that watches one GitHub repository.

## Run the tests

```sh
node --test         # or: npm test
```

## Try the agent

Open an Issue in this repository and comment:

```text
@<agent login> 让 titleCase 支持连字符，例如 hello-world → Hello-World，并补上测试
```

Within about a minute a Ticket appears on the Superagent panel. The agent acknowledges the request, works in its own Session and directory, opens a pull request, and answers in the Issue.

## Behavior

`titleCase` capitalizes words separated by whitespace or hyphens: `titleCase('hello-world')` returns `Hello-World`.
