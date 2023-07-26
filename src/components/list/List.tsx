import React from 'react';
import './List.css';

interface Props{
    classname: string;
    classnameli?:string;
    content: Item[]
}

interface Item{
    key:number
    data:string
}
const List: React.FC<Props> = ({
    classname,
    content,
    classnameli
}) => {
    return (
        <ul className={classname}>
            {content.map((item) => (
                <li className={classnameli} key={item.key}>{item.data}</li>
            ))}
        </ul>
    )
};

export default List;