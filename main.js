let data = 0;

function increment()
{
    data = data+1;
    document.getElementById("my-data").innerText = data;
}

function decrement()
{
    data = data-1;
    document.getElementById("my-data").innerText = data;
}

function reset()
{
    data = 0;
    document.getElementById("my-data").innerText = data;
}