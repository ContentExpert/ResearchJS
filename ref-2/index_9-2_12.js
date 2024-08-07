// 클래스를 선언합니다.
class LifeCycle {
  call () {
    this.a()
    this.b()
    this.c()         
  }
  a () { console.log('a() 메소드를 호출합니다.')}
  b () { console.log('b() 메소드를 호출합니다.')}
  c () { console.log('c() 메소드를 호출합니다.')}
}

// 인스턴스를 생성합니다.
new LifeCycle().call()