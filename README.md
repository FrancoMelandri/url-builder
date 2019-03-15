# url-builder

[![Build Status](https://travis-ci.org/FrancoMelandri/url-builder.svg?branch=master)](https://travis-ci.org/FrancoMelandri/url-builder) [![NPM version](https://img.shields.io/npm/v/@francomelandri/url-builder.svg?style=flat)](https://www.npmjs.com/package/@francomelandri/url-builder) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Small node package to build an URL  starting form a template like this:

```
{{protocol}}://{{host}}/{{isocode}}/{{path}}
```

How to use:

```javascript
    test('should return url with query string parameter', () => {
        let url = sut()
            .withHost('www.example.com')
            .withIso('it')
            .withPath('/login')
            .withQueryParameter('returnUrl', '/')
            .build();

        expect(url).toBe('https://www.example.com/it/login?returnUrl=/');
    });
```

To run the test:

```bash
> npm test
```

