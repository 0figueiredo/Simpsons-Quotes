import  React  from  'react';

const  GenerateCharacter = ({ selectCharacter }) => {
    return (
        <div  className="GenerateCharacter">
        <button  onClick={selectCharacter}>Ramdom Character</button>
        </div>
    );
};

export  default  GenerateCharacter;