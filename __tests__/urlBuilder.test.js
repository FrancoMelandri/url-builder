const sut = require('../');
require('jest-mock-now')(new Date('2016-11-18'));

describe('Testing url builder', () => {

    test('should return base url', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .build();
        expect(url).toBe('https://www.yoox.com');
    });

    test('should return base url with http', () => {
        let url = sut()
            .withProtocol('http')
            .withHost('www.yoox.com')
            .build();
        expect(url).toBe('http://www.yoox.com');
    });

    test('should return url with the iso code', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .withIso('it')
            .build();
        expect(url).toBe( 'https://www.yoox.com/it');
    });

    test('should return url with the iso code and path', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .withIso('it')
            .withPath('myoox/login')
            .build();
        expect(url).toBe( 'https://www.yoox.com/it/myoox/login');
    });

    test('should return url with the timestamp', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .withIso('it')
            .withPath('myoox/login')
            .withTimeStamp()
            .build();
        expect(url).toBe( 'https://www.yoox.com/it/myoox/login?_=1479427200000');
    });

    test('should return url with query string parameter', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .withIso('it')
            .withPath('myoox/login')
            .withQueryParameter('returnUrl', '/')
            .build();
        expect(url).toBe( 'https://www.yoox.com/it/myoox/login?returnUrl=/');
    });

    test('should return url with query string parameter and time stamp', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .withIso('it')
            .withPath('myoox/login')
            .withQueryParameter('returnUrl', '/')
            .withTimeStamp('timestamp')
            .build();
        expect(url).toBe( 'https://www.yoox.com/it/myoox/login?returnUrl=/&timestamp=1479427200000');
    });

    test('should return encoded url ', () => {
        let url = sut()
            .withHost('www.yoox.com')
            .withIso('cn')
            .withPath('男士')
            .withEncoding()
            .build();
        expect(url).toBe( 'https://www.yoox.com/cn/%E7%94%B7%E5%A3%AB');
    });
});
