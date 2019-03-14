# url-builder

[![Build Status](https://travis-ci.org/FrancoMelandri/url-builder.svg?branch=master)](https://travis-ci.org/FrancoMelandri/url-builder)

[![NPM version](https://img.shields.io/npm/v/@francomelandri/url-builder.svg?style=flat)](https://www.npmjs.com/package/@francomelandri/url-builder)


Small node packge to build an url starting form a template like this:

```
{{protocol}}://{{host}}/{{isocode}}/{{path}}
```

How to use:

```
    test('should return url with query string parameter', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .withIso('it')
            .withPath('myoox/login')
            .withQueryParameter('returnUrl', '/')
            .build();
        expect(url).toBe( 'https://www.yoox.com/it/myoox/login?returnUrl=/');
    });
```

To run the test:

```
> npm test
```

