function fact(num)
{
    let mutli = 1;
    while(num>0)
    {
        mutli *= num;
        num--;
    }

    return mutli;
}

let fa = fact(3);

document.write("factorial is" + fa);