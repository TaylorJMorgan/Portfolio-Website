# Personal Professional Website

[moogs.ca](https://www.moogs.ca)

Portfolio site including information about me, my projects, and a contact form.

Built with HTML, CSS, JS, React, and Node.

## Styling

Styled primarily with Bootstrap using the React-Bootstrap library, with a fair amount of custom CSS. Responsive elements are mainly from Bootstrap classes. CSS files are per-component and are modules to prevent accidental mis-matching of similar class names.

## Animation

Page animation from framer-motion library. Small amount of custom animation on social icons.

## Contact Form and Scripting

Contact form is from formspree/react. Form validation is custom with reducers for each field, handling validity and value. A useEffect debouncer is used to reduce the workload of validating the form.

## Data retrieval

The site is frontend only as it is static. Data for projects and skills are retrieved from JSON in data folders and rendered with array mapping. This makes adding additional projects simple.
