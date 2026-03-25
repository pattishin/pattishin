## 2025-05-22 - Preventing Information Leakage and Enhancing Request Context Management
**Vulnerability:** Backend API handlers were returning raw error messages (`err.Error()`) from Firestore and client creation directly to clients in JSON responses.
**Learning:** Raw errors can leak sensitive information about the database structure, project IDs, or internal configurations. Additionally, using `context.Background()` for request-scoped operations like database queries ignores client cancellations, potentially leading to resource exhaustion.
**Prevention:** Always return generic error messages (e.g., "Internal server error") to clients while logging the specific error details on the server. Always use the request context (`c.Request.Context()` in Gin) for operations that should be tied to the HTTP request lifecycle.

## 2025-05-23 - Optimizing Validation and Hardening Security Headers
**Vulnerability:** The application was missing critical security headers like `Strict-Transport-Security` (HSTS) and `Referrer-Policy`, and user-facing endpoints lacked input length and format validation.
**Learning:** Missing headers expose users to protocol downgrade attacks and information leakage via referrers. Lack of input validation can lead to DoS (via large payloads) or malformed data in the database. In Go, compiling regular expressions within request handlers (using `regexp.MustCompile`) is a performance anti-pattern as it repeats work on every request.
**Prevention:** Implement defense-in-depth by always including modern security headers. Validate all user input for both length and format before processing. In Go, pre-compile regular expressions at the package level to ensure high performance and reliability.
