# Semgrep Security Audit Report

## Scan Info

| | |
|---|---|
| **Status** | ❌ FAILED |
| **Date** | 2026-03-10 11:11 UTC |
| **Commit** | `d87e9b6` |
| **Branch** | `main` |
| **Pipeline** | [View run](https://github.com/ekateryna18/projet-master/actions/runs/22899685290) |
| **Semgrep version** | `1.153.1` |
| **Engine** | OSS |

## Scan Summary

| | |
|---|---|
| **Files scanned** | 17 |
| **Scan time** | 0.21s |
| **Total findings** | 1 |
| **Errors** | 0 |
| **Skipped rules** | 0 |
| **Error findings** | 1 |
| **Warning findings** | 0 |
| **Info findings** | 0 |

## Findings

### ERROR (1)

#### `javascript.lang.security.detect-child-process.detect-child-process`
- **File**: `app/index.js:21`
- **Impact**: HIGH | **Likelihood**: LOW
- **Message**: Detected calls to child_process from a function argument `req`. This could lead to a command injection if the input is user controllable. Try to avoid calls to child_process, and if it is needed ensure user input is correctly sanitized or sandboxed.
- **CWE**: CWE-78: Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection')
- **OWASP**: A01:2017 - Injection, A03:2021 - Injection, A05:2025 - Injection

```
requires login
```

> Rule details: https://sg.run/l2lo

