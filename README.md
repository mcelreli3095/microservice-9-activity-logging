**Microservice 9 — Activity Logging / Audit Trail**
**User Story 1 — Record User Activity**
As a developer, I want to log important user actions so I can track system behavior and diagnose issues.

**Acceptance Criteria**
- Given a valid activity log request (user ID, timestamp, action type, metadata), when the microservice receives it, then it stores the log entry.

- Given missing required fields, when the microservice receives the request, then it returns an error.

**Quality Attributes**
- Reliability: Must not lose log entries.

- Scalability: Must support high‑volume logging.

**User Story 2 — Retrieve Activity Logs**
As a developer, I want to request logs for a user or time range so I can review system usage.

**Acceptance Criteria**
- Given a valid query, when the request is made, then the microservice returns matching logs in JSON format.

- Given invalid parameters, then it returns an error.

**Quality Attributes**
- Security: Sensitive data must be masked.

- Performance: Retrieval must support pagination.