import React from 'react';

interface Props{
    classname: string;
    content: Item[]
}

interface Item{
    key:number
    data:string
}
const List: React.FC<Props> = ({
    classname,
    content
}) => {
    return (
        <ul className={classname}>
            {content.map((item) => (
                <li key={item.key}>{item.data}</li>
            ))}
        </ul>
    )
};

export default List;