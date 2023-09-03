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
function ejecutar_Comandos_I_D(comando,o)
{
   
    let Orientacion=o;
    if(Orientacion=="N")
    {
        if(comando=="I")
        {
            Orientacion="O";
        }
        else if(comando=="D")
        {
            Orientacion="E";
        }
    }
    if(Orientacion=="O")
    {
        if(comando=="I")
        {
            Orientacion="S";
        }
        else if(comando=="D")
        {
            Orientacion="N";
        }
       
    }
    if(Orientacion=="E")
    {
        if(comando=="I")
        {
            Orientacion="N";
        }
        else if(comando=="D")
        {
            Orientacion="S";
        }
       
    }
    if(Orientacion=="S")
    {
        if(comando=="I")
        {
            Orientacion="O";
        }
        else if(comando=="D")
        {
            Orientacion="E";
        }
        
    }
    return [Orientacion];

    }
function ejecutar_Comando_A(posicionX,posicionY,or)
{
    let Orientacion=or;
    let X=posicionX;
    let Y=posicionY;
    if(Orientacion=="N")
    {
      Y=Y+1;
    }
    if(Orientacion=="O")
    {
        X=X-1;
       
    }
    if(Orientacion=="E")
    {
        X=X+1;
       
    }
    if(Orientacion=="S")
    {
        Y=Y-1;
        
    }
    return [X,Y];
}

export {posicionInicial,VerificarFormato_Entrada,Devolver_Comandos,validar_comandos,ejecutar_Comandos_I_D,ejecutar_Comando_A};