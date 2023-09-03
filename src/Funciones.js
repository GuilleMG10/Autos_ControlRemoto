function posicionInicial(posicionX,posicionY,orientacion)
{
    return [posicionX,posicionY,orientacion];
}

function VerificarFormato_Entrada(posicionX,posicionY,orientacion)
{
    if(Number.isInteger(posicionX) && Number.isInteger(posicionY) && typeof orientacion === 'string' )
    {
       if(orientacion=="N" || orientacion=="S" ||orientacion=="O"||orientacion=="E")
       {
        return true;
       }  
    }
    return false;
}
function Devolver_Comandos(comandos)
{
    return comandos;
}
function validar_comandos(comandos)
{
    
for (let i = 0; i < comandos.length; i++) {
    if(comandos[i]!="A" && comandos[i]!="I" && comandos[i]!="D")
    {
        return false;
    }
}
return true;
}
function ejecutar_Comandos(comandos,posicionX,posicionY,o)
{
    let X=posicionX;
    let Y=posicionY;
    let Orientacion=o;
    if(Orientacion=="N")
    {
        if(comandos=="I")
        {
            Orientacion="O";
        }
        else if(comandos=="D")
        {
            Orientacion="E";
        }
    }
    if(Orientacion=="O")
    {
        if(comandos=="I")
        {
            Orientacion="S";
        }
        else if(comandos=="D")
        {
            Orientacion="N";
        }
    }
    if(Orientacion=="E")
    {
        if(comandos=="I")
        {
            Orientacion="N";
        }
        else if(comandos=="D")
        {
            Orientacion="S";
        }
    }
    if(Orientacion=="S")
    {
        if(comandos=="I")
        {
            Orientacion="O";
        }
        else if(comandos=="D")
        {
            Orientacion="E";
        }
    }
    return [X,Y,Orientacion];


}

export {posicionInicial,VerificarFormato_Entrada,Devolver_Comandos,validar_comandos,ejecutar_Comandos};