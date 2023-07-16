import React from 'react';

interface Props{
    classname: string;
    classnameli?:string;
    content: Item[];
    islink?: boolean;
}

export interface Item{
    key:number
    data:string
    href?:string
}
const List: React.FC<Props> = ({
    classname,
    content,
    classnameli,
    islink
}) => {
    return (
        <ul className={classname}>
            {content.map((item) => (
                <li className={classnameli} key={item.key}>
                    {islink? (
                        <a className = 'a-list' href={item.href}>
                            {item.data}
                        </a>
                    ) : (
                        item.data
                    )}
                </li>
            ))}
        </ul>
    )
};

export default List;