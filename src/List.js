import React from "react";
import './index.css';
import insanlar from "./insanlar";
import './peopleFix.css';

const List =({people})=>{
    return (
        <>
        {people.map((person)=>{
            const {id,name,yas,resim}=person;
            return <article key={id} className="person">
                <img src={resim} alt={name}></img>
                <div id="yasName">
                    <h4>{name}</h4>
                    <p>{yas} yaşında</p>
                </div>

            </article>
        })}
        </>
    );
};
export default List;