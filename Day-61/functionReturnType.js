function max(p)
{
    let max = 0;
    while (p>0)
    {
       let digit=  p%10;

       if (max < digit)
       {
        max = digit;
       }

       p = Math.floor(p/10);
    }
    return max;
}

let maxdigit = max(124568);

document.write("max digit in number is"+maxdigit)