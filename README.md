# DOMParser testing

## Summary

Small samples to test security of [`DOMParser`](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser) vs [`document.createElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

Some specific aspects being looked at:

- Are scripts executed?
- Are script events executed?
- Are assets (e.g., images) loaded?

## Resources

- [DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- [DOMParser polyfill](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser#DOMParser_HTML_extension_for_other_browsers)
- [Stack Overflow Question](https://stackoverflow.com/a/37554728/1858091)
