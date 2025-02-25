const fact = () =>{
    let x = 1;
    for (let i =0;i<=5;i++)
    {
        for (let j=1;j<i;j++)
        {
            document.write(x*x+" ");
            x++;
        }
        document.write("<br>")
    }
}

fact();