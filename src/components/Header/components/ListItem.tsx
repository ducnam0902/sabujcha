import React, {FC} from 'react'
import { Link } from 'react-router-dom'
type BasicProps = {
    title: string,
    link: string
}
const ListItem: FC<BasicProps> = ({title,link}) => {
    return (
        <Link to={link}>{title}</Link>
    )
}

export default ListItem
