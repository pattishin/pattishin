## 2025-05-22 - Improving Keyboard Accessibility in Legacy Projects
**Learning:** Legacy projects often use non-semantic elements like `div` or `ol` with `onClick` handlers for interactivity. This pattern completely breaks keyboard navigation as these elements are not focusable by default and do not respond to the "Enter" or "Space" keys.

**Action:** Always convert interactive `div` or `ol` elements to `<button>` elements. Ensure that default button styles (like background, border, and font) are reset in CSS to maintain the original design while gaining accessibility.
