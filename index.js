module.exports = () => {

    const _templateUrl = '{{protocol}}://{{host}}/{{isocode}}/{{path}}';
    const _defaultTimeStamp = '_';

    var _protocol = 'https';
    var _host = '';
    var _isoCode = '';
    var _path = '';
    var _queryParams = [];
    var _encoding = input => input;

    return {

        withProtocol: function (protocol) {
            _protocol = protocol;
            return this;
        },

        withHost: function (host) {
            _host = host;
            return this;
        },

        withIso: function (isoCode) {
            _isoCode = isoCode.trim();
            return this;
        },

        withPath: function (path) {
            _path = path;
            return this;
        },

        withTimeStamp: function (parameter) {
            this.withQueryParameter(parameter || _defaultTimeStamp,
                                    Date.now());
            return this;
        },

        withQueryParameter: function (name, value) {
            _queryParams.push(name
                .concat('=')
                .concat(value));
            return this;
        },

        withEncoding: function () {
            _encoding = input => encodeURI(input);
            return this;
        },

        build: () => {
            return _encoding(_templateUrl
                                .replace('{{protocol}}', _protocol)
                                .replace('{{host}}', _host)
                                .replace('{{isocode}}', _isoCode)
                                .replace('{{path}}', _path)
                                .replace(/\/+$/, '')
                                .concat('?', _queryParams.join('&'))
                                .replace(/\?+$/, '')
                                .split(_protocol + '://')
                                .map(item => item.replace(/\/{2}/g, '/'))
                                .join(_protocol + '://'));
        }
    };
};
