

<template>
  <button class="kevbutton">KEVIN</button>
</template>
<style>
  *{
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}


.kevbutton{
    border: none;
    color: white;
    background-color: rgb(155, 77, 228);
    padding: 1rem 2.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    transition: opacity 0.17s;
    font-weight: bold;
    
}
.kevbutton:hover{
  opacity: 0.7;
  
}
.kevbutton:active{
    animation: animate 0.2s;
}
#app{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(37, 37, 37);
}
@keyframes animate{
    0%{
        transform: rotate(0deg) translateX(0px); 
    }
    25%{
        transform: rotate(-20deg) translateX(-10px); 
    }
    50%{
        transform: rotate(0deg) translateX(0px); 
    }
    75%{
        transform: rotate(20deg) translateX(10px); 
    }
    100%{
        transform: rotate(0deg) translateX(0px); 
    }
}
 
</style>