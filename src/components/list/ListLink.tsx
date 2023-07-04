import React from 'react'

interface Props{
    classname: string;
    content: Item[]
}

interface Item{
    key: number;
    data: string;
    ref: string;
}
const ListLink: React.FC<Props> = ({
    classname,
    content
}) => {
  return (
    <ul className={classname}>
        {content.map((item) => (
            <li key={item.key}><a href={item.ref}>{item.data}</a></li>
        ))
        }
    </ul>
  )
}

export default ListLink