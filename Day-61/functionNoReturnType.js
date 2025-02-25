
// function add(p,q)
// {
//     document.write("adddition is"+(p+q));
// }

// add(10,20);


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

    document.write("max digit is "+max);
}

max(124568);