let a = 1;
let b = 1;
{
    let a = 2;
    {
        let a = 3;
        console.log(a); // 3, code line 6
        console.log(b); // 1, code line 2
    }
    console.log(a); // 2, code line 4
    console.log(b); // 1, code line 2
}