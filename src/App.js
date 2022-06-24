import React from 'react';
import Simpsons from "./components/simpsons/simpsons";
import './App.css';
import RickAndMorty from "./components/rickAndMorty/rickAndMorty";

const App = () => {
    return (
        <div>
            <div className={'simpsons'}>
                <Simpsons
                    name='Homer Simpson'
                    img='https://i.pinimg.com/originals/52/ba/3d/52ba3dbe77b936828b5bee7732390567.png'
                    info='Homer Jay Simpson (born May 12, 1956) is the main protagonist of The Simpsons series (or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn`t. '
                />
                <Simpsons
                    name='Marge Simpson'
                    img='https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
                    info='Marjorie Jacqueline "Marge" Simpson (née Bouvier[11]) is the homemaker and matriarch of the Simpson family. She is also one of the five main characters in The Simpsons TV series. Marge is 37 years of age. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.'
                />
                <Simpsons
                    name='Lisa Simpson'
                    img='https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'
                    info='Lisa Marie Simpson (born May 9)[9] is the elder daughter and middle child of the Simpson family. She was named after a train called Lil Lisa on her parents 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age. Not to everyone surprise, she is also the moral center of her family. In her upbringing, Lisa lacks parental involvement of Homer and Marge, which leads to hobbies such as playing saxophone and guitar, riding and caring for horses, and interest in advanced studies'
                />
                <Simpsons
                    name='Bart Simpson'
                    img='https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'
                    info='Bartholomew "Bart" Jojo Simpson (born April 1[7] or February 23[8]) is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" oldest child of the Simpson family in The Simpsons. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart Comet".'
                />
                <Simpsons
                    name='Maggie Simpson'
                    img='https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
                    info='Margaret Evelyn[10] Lenny "Maggie" Simpson[11] (born January 12, 1989) is the 1-year old daughter and youngest child of Marge and Homer Simpson, the baby sister to Bart and Lisa Simpson and one of the five main characters of The Simpsons. She is often seen sucking on her pacifier, and when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family. Maggie is the very young, infant age of 1.'
                />
            </div>
            <hr/>
            <div className="rickAndMorty">
                <RickAndMorty
                    id='1'
                    name='Rick Sanchez'
                    status='Alive'
                    species='Human'
                    gender='Male'
                    image='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
                />
                <RickAndMorty
                    id='2'
                    name='Morty Smith'
                    status='Alive'
                    species='Human'
                    gender='Male'
                    image='https://rickandmortyapi.com/api/character/avatar/2.jpeg'
                />
                <RickAndMorty
                    id='3'
                    name='Summer Smith'
                    status='Alive'
                    species='Human'
                    gender='Female'
                    image='https://rickandmortyapi.com/api/character/avatar/3.jpeg'
                />
                <RickAndMorty
                    id='4'
                    name='Beth Smith'
                    status='Alive'
                    species='Human'
                    gender='Female'
                    image='https://rickandmortyapi.com/api/character/avatar/4.jpeg'
                />
                <RickAndMorty
                    id='5'
                    name='Jerry Smith'
                    status='Alive"'
                    species='Human"'
                    gender='Male'
                    image='https://rickandmortyapi.com/api/character/avatar/5.jpeg'
                />
            </div>

        </div>
    );
};

export default App;