// 변수를 선언합니다.
const test = {
    a: function () {
        console.log(this)
    },
    b: () => {
        console.log(this)
    }
}

// 메소드를 호출합니다.
test.a()
test.b()