var getlnformation = function (baseUrl) { // 서버에 요청할 주소의 기본 URL
    return function (path) { // path값
        return function (id) { // id값
            return fetch(baseUrl + path + '/' + id); // 실제 서버에 정보를 요청.
        };
    };
};
// ES6
var getlnformation = baseUrl => path => id => fetch(baseUrl + path + '/' + id);
    