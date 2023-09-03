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
            Orientacion="E";
        }
        else if(comando=="D")
        {
            Orientacion="O";
        }
        return Orientacion;
    }
    if(Orientacion=="O")
    {
        if(comando=="I")
        {
            Orientacion="N";
        }
        else if(comando=="D")
        {
            Orientacion="S";
        }
        return Orientacion;
    }
    if(Orientacion=="E")
    {
        if(comando=="I")
        {
            Orientacion="S";
        }
        else if(comando=="D")
        {
            Orientacion="N";
        }
        return Orientacion;
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
        return Orientacion;
    }
   

    }
function ejecutar_Comando_A(posicionX,posicionY,or,tamX,tamY)
{
    let Orientacion=or;
    let X=posicionX;
    let Y=posicionY;
    if(Orientacion=="N" && Y+1<=tamY)
    {
         Y=Y+1;
    }
    if(Orientacion=="E" && X-1>0)
    {
        X=X-1;
       
    }
    if(Orientacion=="O" && X+1<=tamX)
    {
        X=X+1;
       
    }
    if(Orientacion=="S" && Y-1>0)
    {
        Y=Y-1;
        
    }
    return [X,Y]
}
function ejecutar(comandos,posicionX,posicionY,or,tamX,tamY)
{
    let Orientacion=or;
    let X=posicionX;
    let Y=posicionY;
    if(validar_comandos(comandos))
    {
        for (let i = 0; i < comandos.length; i++) {
            if(comandos[i]=="A" )
            {
                [X,Y]=ejecutar_Comando_A(X,Y,Orientacion,tamX,tamY);
            }
            else {
                Orientacion=ejecutar_Comandos_I_D(comandos[i],Orientacion);
            }
        }
        return [X,Y,Orientacion];
    }
}

export {posicionInicial,VerificarFormato_Entrada,Devolver_Comandos,validar_comandos,ejecutar_Comandos_I_D,ejecutar_Comando_A,ejecutar};