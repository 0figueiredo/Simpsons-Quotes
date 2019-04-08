import  React  from  'react';

const  DisplayCharacter = ({ character }) => {
    return (
        <div  className="DisplayCharacter">
            <img  src={character.image}  alt=""  />
            <ul>
                <li>Character : {character.character}</li>
                <li>Quote : {character.quote}</li>
            </ul>
        </div>
    );
};

export  default  DisplayCharacter;